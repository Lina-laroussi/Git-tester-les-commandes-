import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandigPageComponent } from "./landing-page/components/landig-page/landig-page.component";



const routes:Routes = [
  { path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule) },  
  {path : '' , component : LandigPageComponent},
];



@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],

    exports :[
        RouterModule
    ]
}

)
export class AppRoutingModule{}