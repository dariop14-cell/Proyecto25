import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto.model';
@Injectable({
  providedIn: 'root'
})
export class DeseadosService {
   private deseadoSubject = new BehaviorSubject<{producto: Producto; cantidad: number}[]>([]);
  des$= this.deseadoSubject.asObservable()
  
  agregarAdeseado(producto:Producto){
    const productos = this.deseadoSubject.getValue();
    const encontrado = productos.find(p => p.producto.id === producto.id)

    if(encontrado){
      encontrado.cantidad++
    } else{
      this.deseadoSubject.next ([...productos, {producto, cantidad :1}]) 

    }
  }

  eliminarDeDeseados(productoId: number){
    const productos = this.deseadoSubject.getValue().filter(p => p.producto.id !== productoId)
    this.deseadoSubject.next(productos)
  }
  constructor() { }
}