import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { DeseadosService } from '../../servicios/deseados.service';

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
      nombre: 'Ferrari SF-24 coche de carreras',
      descripcion: 'Para mayores de 10 años, mas de 5000 piezas para ensamblar',
      precio: 26000,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_710360-MLA82861442184_032025-O.webp',
      disponible: true,
    },
    {
      id: 2,
      nombre: 'Gorra Max Verstappen 2025',
      descripcion: 'Gorra de competicion del tetracampeon del mundo',
      precio:20000,
      imagen: 'https://images.footballfanatics.com/red-bull-racing/red-bull-racing-new-era-max-verstappen-9seventy-piped-cap-navy_ss5_p-202169037+u-bseveoofibb3mgrjxwql+v-3zsw9dkdlutm60x3qdqu.jpeg?_hv=2&w=400',
      disponible: true
    },
    {
      id: 3,
      nombre: 'Remera Mercedes AMG F1 2024',
      descripcion: 'Remera de algodon, de los multiples campeones del mundo',
      precio: 30000,
      imagen: 'https://down-mx.img.susercontent.com/file/cn-11134207-7r98o-ly9m65mpekxfe8',
      disponible: true
    }

  ]

constructor(private carritoService: CarritoService,private deseadoService:DeseadosService){ }
//metodo para agregar un producto
agregar(producto: Producto){
  this.carritoService.agregarAlcarrito(producto)
  alert('Producto agregado al carrito')
}

//metodo para añadir a una lista de deseos
agregarDeseo(producto: Producto){
  this.deseadoService.agregarAdeseado(producto)
  alert('Producto agregado a la lista de deseos')
}
}
