import { Component , OnInit , Input} from '@angular/core';
import {  Router } from '@angular/router';
import { Facesnap } from '../../../core/Models/facesnap.model';
import { FaceSnapsService } from '../../../core/Services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {

  @Input() facesnap !: Facesnap;
  ButtonText!:string;
  constructor( private faceSnapsService: FaceSnapsService ,
    private router :Router){

  }

  ngOnInit() {
  this.ButtonText = 'on snap !';
}

onsnap(){
    if ( this.ButtonText =='on snap!' ){
         this.faceSnapsService.SnapFaceSnapById(this.facesnap.id , 'snap');
         this.ButtonText = 'oops ,unsnap' ;

   } else {
     this.faceSnapsService.SnapFaceSnapById(this.facesnap.id , 'unsnap');
     this.ButtonText = 'on snap!';
   }
  }
 
onViewFaceSnap(){
     this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`)
}

}
