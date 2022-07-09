import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Facesnap } from '../../../core/Models/facesnap.model';
import { FaceSnapsService } from '../../../core/Services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() facesnap !: Facesnap;
  facesnap$!:Observable<Facesnap>;
  ButtonText!:string;
  constructor( private faceSnapsService: FaceSnapsService,
                private route:ActivatedRoute ){

  }

  ngOnInit() {
  this.ButtonText = 'on snap !';
  const snapId = +this.route.snapshot.params['id'];
  this.facesnap$ = this.faceSnapsService.getFaceSnapById(snapId);
}

onsnap(faceSnapId:number){
    if ( this.ButtonText =='on snap!' ){
         this.faceSnapsService.SnapFaceSnapById(faceSnapId, 'snap').pipe(
           tap(()=>{
              this.facesnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
              this.ButtonText = 'Oops, unSnap!';
           })
         );
   } else {
     this.faceSnapsService.SnapFaceSnapById(faceSnapId , 'unsnap').pipe(
       tap(()=>{
         this.facesnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
         this.ButtonText = 'on snap!';
       })
     );  
   }
  }


}
