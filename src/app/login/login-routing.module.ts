import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeloginComponent } from './homelogin/homelogin.component';

const routes: Routes = [
  {path: '', component: HomeloginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
