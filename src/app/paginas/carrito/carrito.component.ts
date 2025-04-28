import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: { producto: Producto; cantidad: number }[] = []

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe((productos) => {

    })
  }

  agregarCantidad(index: number){
    this.productosEnCarrito[index].cantidad++;
  }

  quitarCantidad(index: number){
    if (this.productosEnCarrito[index].cantidad>1){
      this.productosEnCarrito[index].cantidad--;
    }
  }
  
  eliminarProducto(productoId: number){
    this.carritoService.eliminarDelCarrito(productoId)
  }

  vaciarCarrito(){
    this.carritoService.vaciarCarrito()
  }

  realizarCompra(){
    alert('Compra realizada')
    this.vaciarCarrito()
  }
}