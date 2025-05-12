import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterModule, NgClass, NgFor],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {



  Productos: Producto[] = [
    {
      id: 1,
      nombre: '',
      descripcion: '',
      precio: 29,
      imagen: '',
      disponible: true,
    }

  ]

constructor(private carritoService: CarritoService){ }
//metodo para agregar un producto
agregar(producto: Producto){
  this.carritoService.agregarAlcarrito(producto)
  alert('Producto agregado al carrito')
}

//metodo para añadir a una lista de deseos
agregarDeseo(producto: Producto){
  this.carritoService.agregarAlcarrito(producto)
  alert('Producto agregado a la lista de deseos')
}
}
