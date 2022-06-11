import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllcourseRoutingModule } from './allcourse-routing.module';
import { VarComponent } from './var/var.component';

import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [
    VarComponent,
    PlaceholderComponent
  ],
  imports: [
    CommonModule,
    AllcourseRoutingModule
  ]
})
export class AllcourseModule { }
