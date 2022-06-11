import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: 'allcourse', loadChildren: ()=> import('./allcourse/allcourse.module').then(m => m.AllcourseModule )},
  { path: 'mycourse', loadChildren: ()=> import('./mycourse/mycourse.module').then(m => m.MycourseModule)},
  { path: 'home', loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)},
  { path: 'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)},
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
