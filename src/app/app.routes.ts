import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductoComponent } from './paginas/producto/producto.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { QuienesomosComponent } from './paginas/quienesomos/quienesomos.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { DeseadosComponent } from './paginas/deseados/deseados.component';
import { CompraComponent } from './paginas/compra/compra.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home',pathMatch:'full'},
    {path: 'home',component:HomeComponent}, 
    {path: 'contacto',component:ContactoComponent},
    {path: 'producto',component:ProductoComponent},
    {path: 'ofertas',component:OfertasComponent},
    {path: 'quienessomos',component:QuienesomosComponent},
    {path: 'carrito',component:CarritoComponent},
    {path: 'deseados',component:DeseadosComponent},
    {path: 'compra', component:CompraComponent}
];
