import { Component, Input, OnInit } from '@angular/core';


import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { BotonAgregarComponent } from '../../../buttonAgregar/components/boton/boton.component';
import { City, Customer } from '../../../domain/customer';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';





@Component({
  selector: 'app-form',
  standalone: true,

  imports: [InputGroupModule, InputGroupAddonModule, BotonAgregarComponent, FormsModule, MultiSelectModule  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  title = 'Formulario de registro';
  @Input()
  public customer: Customer[] = [
    {
      id: 1140858067,
      name: 'Kevin Olivella',
      city: 'Bello',
      company: 'Conexpacios',
    },
  ];


  public cities!: City[];
  selectedCities!: City[];
  ngOnInit(): void {
    this.cities= [
      {
        name: 'Bello',
        code: 'BL'
      },
      {
        name: 'Santa Marta',
        code: 'SM'
      },
      {
        name: 'Villanueva',
        code: 'VN'
      },
      {
        name: 'Valledupar',
        code: 'VL'
      },
      {
        name: 'Barranquilla',
        code: 'Quilla'
      }
    ];
    this.selectedCities=[];
  }
}
