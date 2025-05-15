import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeseadosService } from '../../servicios/deseados.service';
import { Producto } from '../../model/producto.model';


@Component({
  selector: 'app-deseados',
  imports: [CommonModule,RouterModule],
  templateUrl: './deseados.component.html',
  styleUrl: './deseados.component.css'
})
export class DeseadosComponent implements OnInit {
 productosDeseado: {producto: Producto; cantidad : number}[] = []

  constructor(private deseadoService: DeseadosService){}

  ngOnInit(): void {
    this.deseadoService.des$.subscribe((productos) => {
      this.productosDeseado = productos;
    });
  }

  eliminarProducto(productoId:number){
    this.deseadoService.eliminarDeDeseados(productoId)
  }

  }


