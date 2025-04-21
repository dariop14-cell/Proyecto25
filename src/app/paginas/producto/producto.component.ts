import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [NgClass, NgFor],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  /*    Productos =[
        {nombre: 'Producto 1', precio: 100},
        {nombre: 'Producto 2', precio: 150},
        {nombre: 'Producto 3', precio: 200}
      ]
      usuario = { 
        nombre: 'Ari',
        activo: false
      }
  */

  producto = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/51ArY8U5AML._AC_UF1000,1000_QL80_.jpg',
      nombre: 'Camiseta Scuderia Ferrari',
      descripcion: 'Un pruducto unico del fabricante de coches mas reconocido del mundo'
    },
    {
      id: 2,
      img: 'https://http2.mlstatic.com/D_NQ_NP_782055-MLA80176862421_102024-O.webp',
      nombre: 'Camiseta Williams Racing',
      descripcion: 'Camiseta del equipo mas exitoso de la decada del 90'
    },
    {
      id: 3, 
      img: 'https://m.media-amazon.com/images/I/61IDPrNRgnL._AC_SL1500_.jpg',
      nombre: 'Camiseta Mercedes AMG-Petronas',
      descripcion:' Camiseta del equipo mas laureado de la decada del 2010'
    }

  ]
}
