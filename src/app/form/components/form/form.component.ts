import { Component } from '@angular/core';


import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { BotonAgregarComponent } from '../../../buttonAgregar/components/boton/boton.component';

@Component({
  selector: 'app-form',
  standalone: true,

  imports: [InputGroupModule, InputGroupAddonModule, BotonAgregarComponent  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
