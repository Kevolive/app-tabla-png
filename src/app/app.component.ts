import { Component } from '@angular/core';
import {  RouterModule, RouterOutlet } from '@angular/router';


import { BotonComponent } from './buttonCrear/components/boton/boton.component';
import { TablaComponent } from './tabla/components/tabla/tabla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonComponent, TablaComponent, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Este es el proyecto en Primeng';
}
