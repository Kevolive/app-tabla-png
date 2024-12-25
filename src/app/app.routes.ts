import { Routes, RouterModule } from '@angular/router';


import { FormComponent } from './form/components/form/form.component';
import { TablaComponent } from './tabla/components/tabla/tabla.component';

export const routes: Routes = [
  {
  path: 'tabla',
  component:TablaComponent
},
  {
  path: 'formulario',
  component: FormComponent
},
{
  path: '**',
  redirectTo: 'tabla'
}



];
