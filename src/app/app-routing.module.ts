import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDataComponent } from './core/components/get-data/get-data.component';

const routes: Routes = [
  {
     path:'get-data',component:GetDataComponent
  },
  {
    path:'',component:GetDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
