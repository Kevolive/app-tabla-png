
import { Component } from '@angular/core';



import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../../imports';
import { Customer } from '../../../domain/customer';
import { CustomerService } from '../../../service/customerservice';
import { BotonComponent } from '../../../buttonCrear/components/boton/boton.component';




@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [TableModule,  ImportsModule, BotonComponent ],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
  providers: [CustomerService]
})
export class TablaComponent {
customers!: Customer[];

constructor(private customerService: CustomerService) {}

ngOnInit () {
  this.customerService.getCustomersMedium().then((customers) => (this.customers = customers))
}
}
