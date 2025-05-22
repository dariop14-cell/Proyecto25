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
    },

    {
      id: 4,
      nombre: 'Camiseta McLaren F1 2023',
      descripcion: 'Camiseta del equipo britanico más exitoso de la historia',
      precio: 250000,
      imagen: 'https://laz-img-sg.alicdn.com/p/435775edd7c3a5ef52c333edfa53f36c.jpg',
      disponible: true
    },

    {
      id: 8,
      nombre: 'F1 24, Champions Edition',
      descripcion: 'Una version alternativa del videojuego producido por CodeMasters sobre la F1 replica intensidad y la competitividad.',
      precio: 60000,
      imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202404/0815/a0d007672d6720838e77689f862a0135990afdde875952f6.png',
      disponible: true
    },

    {
      id: 5,
      nombre: 'Camiseta Williams F1 2024',
      descripcion: 'Camiseta de una de las escuderias mas emblematicas de la historia',
      precio: 25000,
      imagen: 'https://dcdn-us.mitiendanube.com/stores/005/652/448/products/remera-deportiva-franco-colapinto-williams-f1-temporada-2024-imagen-1_9-eb241407f88998255617360190239369-480-0.jpg',
      disponible: true
    },

    {
      id: 6,
      nombre: 'Camiseta Aston Martin Aramco 2025',
      descripcion: 'La colección Aston Martin F1 Teamwear para la temporada 2024',
      precio: 24000,
      imagen: 'https://images.footballfanatics.com/aston-martin/aston-martin-aramco-cognizant-f1-2025-team-t-shirt_ss5_p-202359044+pv-3+u-mtgmqpsd0igeutok11nm+v-b6fy0mzratoilavgszk0.jpg?_hv=2&w=600',
      disponible: true
    },

    {
      id: 7,
      nombre: 'McLaren MP4/4 F1 Ayrton Senna 1988',
      descripcion: 'Una replica a escala 1/18 de uno de los coches mas legendarios y dominantes de la historia de la F1, con el que el legendario Ayrton Senna alcanzo su 1er titulo mundial',
      precio:120000,
      imagen: 'https://i.ebayimg.com/thumbs/images/g/ivwAAOSwmztmPGsm/s-l1200.jpg',
      disponible: true
    },
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
