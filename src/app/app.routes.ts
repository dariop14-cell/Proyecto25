import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoComponent } from './Productos/producto/producto.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio',pathMatch:'full'},
    {path: 'inicio',component:InicioComponent}, 
    {path: 'contacto',component:ContactoComponent},
    {path: 'producto',component:ProductoComponent}
];
