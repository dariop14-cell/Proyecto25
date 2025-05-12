import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto.model';
@Injectable({
  providedIn: 'root'
})
export class DeseadosService {
  private deseadosSubject = new BehaviorSubject<{ producto: Producto; cantidad: number }[]>([]);

  deseados$ = this.deseadosSubject.asObservable();
  agregarDeseo(producto: Producto) {
    const productos = this.deseadosSubject.getValue();
    const encontrado = productos.find(p => p.producto.id === producto.id);

    if (encontrado) {
      encontrado.cantidad++;
    } else {
      this.deseadosSubject.next([...productos, { producto, cantidad: 1 }]);
    }
  }

  eliminarDeseo(productoId: number) {
    const productos = this.deseadosSubject.getValue().filter(p => p.producto.id !== productoId);
    this.deseadosSubject.next(productos);
  }

  vaciarDeseos() {
    this.deseadosSubject.next([])
  }

  constructor() { }
}
