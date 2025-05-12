import { Component, OnInit } from '@angular/core';
import { DeseadosService } from '../../servicios/deseados.service';
import { Producto } from '../../model/producto.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-deseados',
  imports: [DeseadosService,NgIf],
  templateUrl: './deseados.component.html',
  styleUrl: './deseados.component.css'
})
export class DeseadosComponent implements OnInit {

  deseado: Deseados[] = [
    {
      id: 1,
      nombre: '',
      imagen: '',
      descripcion: '',
      precio: ''
    }
  ]

  productosDeseados: { producto: Producto; cantidad: number }[] = []
  constructor(private deseadosService: DeseadosService) { }
  ngOnInit(): void {
    this.deseadosService.deseados$.subscribe((productos) => { })
  }
  agregarDeseo(index: number) {
    this.productosDeseados[index].cantidad++;
  }
  quitarDeseo(index: number) {
    if (this.productosDeseados[index].cantidad > 1) {
      this.productosDeseados[index].cantidad--;
    }
  }
  eliminarDeseo(productoId: number) {
    this.deseadosService.eliminarDeseo(productoId)
  }
  vaciarDeseos() {
    this.deseadosService.vaciarDeseos()
  }
  realizarCompra() {
    alert('compra realizada')
    this.vaciarDeseos()
  }
}
