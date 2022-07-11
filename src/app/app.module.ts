import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { NewComponentComponent } from './dossier/new-component/new-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FaceSnapsModule,
    LandingPageModule,
    AuthModuleModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
 }
}