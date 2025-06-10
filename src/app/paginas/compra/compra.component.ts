import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CarritoService } from '../../servicios/carrito.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-compra',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent implements OnInit {
  //Declaracion del formulario reactivo para la compra
  formularioCompra!: FormGroup;

  //Variable para almacenar el total de la compra (subtotal + envio)
  total!: number

  //Costo fijo de envio 
  envio = 1500;

  //Indicador para saber si la factura ya fue generada 
  facturaGenerada = false;

  //Objeto que contiene la informacion de la factura generada
  factura: any;

  //Controla la visibilidad del modal que muestra el pdf 
  mostrarModal = false;

  //Fuente segura para mostrar el PDF generado en el iframe  (URL sanitizada)
  pdfSrc: SafeResourceUrl | undefined;

  constructor(
    private fb: FormBuilder, //FormBuilder para crear el formulario rectivo
    private carritoService: CarritoService, //Servicio para manejar el carrito y obtener poductos y total
    private sanitizer: DomSanitizer //Para sanitizar la URL del PDF y que angular lo permita mostrar
  ) { }

  //Metodo que se ejecuta al inicializar el componente
  ngOnInit(): void {
    //Formulario con los campos requeridos y validadores
    this.formularioCompra = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      codigoPostal: ['', Validators.required],
      ciudad: ['', Validators.required],
      provincia: ['', Validators.required],
      metodoPago: ['', Validators.required],
    })
  }
  //Calcualr el total de la compra sumando el subtotal y el costo de envio 
  calcularTotal(): number {
    const subtotal = this.carritoService.obtenerTotal();//obtiene el subtotal del carrito
    this.total = subtotal + this.envio;
    return this.total
  }

  //Prepara los datos para la factura con clientes, productos, totales y fecha
  emitirFactura(): void {
    const datosCliente = this.formularioCompra.value; //Datos ingresados en el formulario
    const productos = this.carritoService.obtenerProductos(); //Productos del carrito
    const totalFinal = this.calcularTotal(); //total calculado con envio

    //Construye el objeto factura con toda la informacion necesaria
    this.factura = {
      cliente: datosCliente,
      productos: productos,
      envio: this.envio,
      total: totalFinal,
      fecha: new Date()
    }
    //Marca que la factura fue generada
    this.facturaGenerada = true
  }

  //metodo que se ejecuta al finalizar la compra (clic en boton)
  //verifica la validez del formulario, genere factura y muestre el PDF 
  finalizarCompra():void{
    if (this.formularioCompra.valid){
      this.emitirFactura(); //crea la factura
      this.generarPDFModal(); //genera y muestra el PDF en el modal
    }else{
      this.formularioCompra.markAllAsTouched(); //Marca todos los campos como tocados para mostrar errores
    }
  }
  //Genera PDF con jsPDF y crea la URL para mostrar en iframe dentro del modal
  generarPDFModal():void{
    if (!this.factura) return; //si no hay factura, no hacer nada

    const doc = new jsPDF(); //crea instancia de jsPDF

    //Agregar titulo y fecha al PDF 

    doc.setFontSize(18)
    doc.text('Factura de compra,',14,20);

    doc.setFontSize(12)
    doc.text(`Fecha: ${this.factura.fecha.toLocaleString()}`, 14, 30);

    //Informacion del cliente 
    doc.text('Cliente',14,40)
    const c = this.factura.cliente;
    doc.text(`Nombre: ${c.nombre}`,20,50);
    doc.text(`Direccion: ${c.direccion}`,20,60);
    doc.text(`Correo: ${c.correo}`,20,70);
    doc.text(`Telefono: ${c.telefono}`,20,80);
    doc.text(`Ciudad: ${c.ciudad}`,20,90);
    doc.text(`Provincia: ${c.provincia}`,20,100);
    doc.text(`Codigo Postal: ${c.codigoPostal}`,20,110);

    //Listado de productos con calidad, precio y subtotal
    let y = 120
    doc.text('Productos',14,y);

    this.factura.productos.forEach((item:any, index:number) => {
      y +=10;
      doc.text(  
        `${index + 1}.${item.producto.nombre} - Cantidad: ${item.cantidad} - Precio: ${item.producto.precio.toFixed(2)} - Subtotal: $${(item.producto.precio*item.cantidad).toFixed(2)}`,
        20,
      y
      )
    })
    //Costos finales
    y += 10;
    doc.text(`Costo de Envio: $${this.factura.envio.toFixed(2)}`,14,y);
    y += 10;
    doc.text(`Total a Pagar: $${this.factura.total.toFixed(2)}`,14,y);

    const pdfBlod = doc.output('blob');
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(pdfBlod))

    //Abre el modal que contiene el PDF
    this.mostrarModal = true;
  }

  //Metodo para cerrar el modal y liberar la URL del PDF para evitar fugas de memoria
  cerrarModal():void{
    this.mostrarModal = false
    if (this.pdfSrc){
      //Se revoca la URL para liberar recursos 
      URL.revokeObjectURL((this.pdfSrc as any).changingThisBreaksApplicationSecurity)
      this.pdfSrc = undefined;
    }
  }
  //Metodo para imprimir el PDF que esta cargando dentro del iframe en la vista
  imprimirpdf():void{
    //Obtener la referencia al elemento iframe del DOM mediante su ID 'pdfFrame'
    //Puede devolver null sino encuentra al elemento

    const iframe : HTMLIFrameElement | null = document.getElementById('pdfFrame') as HTMLIFrameElement

    //verifica que el iframe exista y que tenga un objeto ContentWindow valido
    if (iframe && iframe.contentWindow){
      //Le da foco al contenido del iframe para asegurarseque la ventana correcta esta activa para imprimir
      iframe.contentWindow.focus();

      //Llama al metodo print() de la ventana del iframe para abrir la ventana de la impresion del navegador
      iframe.contentWindow.print()
    } 
  }
}