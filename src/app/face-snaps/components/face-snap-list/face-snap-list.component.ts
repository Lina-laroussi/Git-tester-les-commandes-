import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { Facesnap } from '../../../core/Models/facesnap.model';
import { FaceSnapsService } from '../../../core/Services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit , OnDestroy {

  facesnaps$!:Observable<Facesnap[]>

  private destroy$ !: Subject<boolean>
  
  constructor(private faceSnapsServices:FaceSnapsService) { }

  ngOnInit() {
    this.facesnaps$ =this.faceSnapsServices.getAllFaceSnaps();

     this.destroy$ = new Subject<boolean>();

     interval(1000).pipe(
       tap(console.log),
       takeUntil(this.destroy$)
       )
       .subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);

  }

}
