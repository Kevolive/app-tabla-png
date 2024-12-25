import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-boton-agregar',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonAgregarComponent {

}
