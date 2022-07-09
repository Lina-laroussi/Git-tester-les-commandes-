import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandigPageComponent } from './components/landig-page/landig-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandigPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LandigPageComponent
  ]
})
export class LandingPageModule { }
