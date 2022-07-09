import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landig-page',
  templateUrl: './landig-page.component.html',
  styleUrls: ['./landig-page.component.scss']
})
export class LandigPageComponent implements OnInit {


  userEmail !: string;
  constructor( private router : Router) { }

  ngOnInit(){
    
 }

 OnContinue() {
       this.router.navigateByUrl('facesnaps');
    }

 OnSubmitForm(form : NgForm){
  console.log(form.value);
 }   

}
