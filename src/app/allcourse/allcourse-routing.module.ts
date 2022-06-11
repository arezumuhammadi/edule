import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { VarComponent } from './var/var.component';

const routes: Routes = [
  {path: '', component: PlaceholderComponent},
  {path: '', component: VarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllcourseRoutingModule { }
