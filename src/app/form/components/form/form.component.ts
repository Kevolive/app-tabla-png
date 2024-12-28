import { Component, Input, OnInit } from '@angular/core';


import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { BotonAgregarComponent } from '../../../buttonAgregar/components/boton/boton.component';
import { City, Customer } from '../../../domain/customer';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';





@Component({
  selector: 'app-form',
  standalone: true,

  imports: [InputGroupModule, InputGroupAddonModule, FormsModule, MultiSelectModule, CommonModule, ButtonModule  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent  {
  title = 'Formulario de registro';

  public customer: Customer =
    {
      id: 0,
      name: '',
      city: '',
      company: '',
      status: '',

    };

    emitCustomer(): void {
      console.log(this.customer);


      this.customer.name= '';
      this.customer.city= '';
      this.customer.company= '';
      this.customer.status= '';

    }




//   public cities!: City[];
//   selectedCities!: City[];
//   ngOnInit(): void {
//     this.cities= [
//       {
//         name: 'Bello',
//         code: 'BL'
//       },
//       {
//         name: 'Santa Marta',
//         code: 'SM'
//       },
//       {
//         name: 'Villanueva',
//         code: 'VN'
//       },
//       {
//         name: 'Valledupar',
//         code: 'VL'
//       },
//       {
//         name: 'Barranquilla',
//         code: 'Quilla'
//       }
//     ];
//     this.selectedCities=[];
//   }
}
