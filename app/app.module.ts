import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {provideStorage, getStorage} from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SchemesComponent } from './schemes/schemes.component';
import { SportsComponent } from './sports/sports.component';
import { TbComponent } from './tb/tb.component';
import { LoginComponent } from './login/login.component';
import { MarqComponent } from './marq/marq.component';
import{ AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { RegComponent } from './reg/reg.component';
import { OutletComponent } from './outlet/outlet.component';
import { C1Component } from './schemes/c1/c1.component';
import { C2Component } from './schemes/c2/c2.component';
import { C3Component } from './schemes/c3/c3.component';
import { C4Component } from './schemes/c4/c4.component';
import { C5Component } from './schemes/c5/c5.component';
import { C6Component } from './schemes/c6/c6.component';
import { C7Component } from './schemes/c7/c7.component';
import { C8Component } from './schemes/c8/c8.component';
import { C9Component } from './schemes/c9/c9.component';
import { C0Component } from './schemes/c0/c0.component';
import { VbComponent } from './sports/vb/vb.component';
import { KabaddiComponent } from './sports/kabaddi/kabaddi.component';
import { KhoComponent } from './sports/kho/kho.component';
import { FootballComponent } from './sports/football/football.component';
import { ChessComponent } from './sports/chess/chess.component';
import { CarromComponent } from './sports/carrom/carrom.component';
import { CricketComponent } from './sports/cricket/cricket.component';
import { RunningComponent } from './sports/running/running.component';
import { ShotputComponent } from './sports/shotput/shotput.component';
import { LjComponent } from './sports/lj/lj.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { DashComponent } from './dash/dash.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { CertiComponent } from './certi/certi.component';
import {provideFirestore,getFirestore} from '@angular/fire/firestore'




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SchemesComponent,
    SportsComponent,
    TbComponent,
    LoginComponent,
    MarqComponent,
    RegComponent,
    OutletComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    C6Component,
    C7Component,
    C8Component,
    C9Component,
    C0Component,
    VbComponent,
    KabaddiComponent,
    KhoComponent,
    FootballComponent,
    ChessComponent,
    CarromComponent,
    CricketComponent,
    RunningComponent,
    ShotputComponent,
    LjComponent,
    ForgotPassComponent,
    VerifyEmailComponent,
    DashComponent,
    CertiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(()=>getStorage()),
    provideFirestore(() => getFirestore()),
    
    
  
  
  ],
  providers: [

    

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




