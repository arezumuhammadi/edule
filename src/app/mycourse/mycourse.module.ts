import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycourseRoutingModule } from './mycourse-routing.module';
import { MeComponent } from './me/me.component';


@NgModule({
  declarations: [
    MeComponent
  ],
  imports: [
    CommonModule,
    MycourseRoutingModule
  ]
})
export class MycourseModule { }
