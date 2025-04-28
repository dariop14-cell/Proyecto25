import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../model/producto.model';

@Component({
  selector: 'app-componente1',
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  cantidadProductos: number = 0

  constructor(private carritoSevice: CarritoService) { }

  ngOnInit(): void {
    //Escucha los cambios en el carrito para actualizar la cantidad de productos

    this.carritoSevice.carrito$.subscribe((productos: { producto: Producto, cantidad: number }[]) => {
      this.cantidadProductos = productos.reduce((total, item) => total + item.cantidad, 0)
    })
  }
  onCarritoClick(){
    console.log("Carrito clicked")
  }
}