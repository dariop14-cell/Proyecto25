import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './Shared/navbar/componente1.component';
import { Componente2Component } from './Shared/footer/componente2.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Componente1Component,Componente2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto25';
}
