import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AllcourseModule } from './allcourse/allcourse.module';
import { HomeModule } from './home/home.module'; 
import { LoginModule } from './login/login.module';
import { MycourseModule } from './mycourse/mycourse.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllcourseModule,
    HomeModule,
    LoginModule,
    MycourseModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
