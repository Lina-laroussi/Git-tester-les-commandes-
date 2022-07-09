import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Facesnap } from '../Models/facesnap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http:HttpClient){}

  facesnaps : Facesnap[] = []

    getAllFaceSnaps (): Observable<Facesnap[]>{
       return this.http.get<Facesnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById (faceSnapId : number):Observable<Facesnap>{
     return this.http.get<Facesnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }


    SnapFaceSnapById (faceSnapId : number , SnapType :'snap' | 'unsnap'): Observable<Facesnap>{
       return this.getFaceSnapById(faceSnapId).pipe(
             map(facesnap => ({
                ...facesnap,
                snaps:facesnap.snaps + (SnapType==='snap'?1:-1)
             })),
             switchMap(updatedFaceSnap =>  this.http.put<Facesnap>(`http://localhost:3000/facesnaps/${faceSnapId}`,updatedFaceSnap)
               )
       );
}


    addFaceSnap(formValue :{title:string , description:string , imageUrl:string, location?:string}): Observable<Facesnap>{
      return this.getAllFaceSnaps().pipe(
         map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
         map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
         map(previousFacesnap => ({
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: previousFacesnap.id + 1
        })),
        switchMap(newFacesnap => this.http.post<Facesnap>(
            'http://localhost:3000/facesnaps',
            newFacesnap)
        )
 );
 }}