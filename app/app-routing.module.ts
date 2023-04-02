import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertiComponent } from './certi/certi.component';
import { DashComponent } from './dash/dash.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OutletComponent } from './outlet/outlet.component';
import { RegComponent } from './reg/reg.component';
import { C0Component } from './schemes/c0/c0.component';
import { C1Component } from './schemes/c1/c1.component';
import { C2Component } from './schemes/c2/c2.component';
import { C3Component } from './schemes/c3/c3.component';
import { C4Component } from './schemes/c4/c4.component';
import { C5Component } from './schemes/c5/c5.component';
import { C6Component } from './schemes/c6/c6.component';
import { C7Component } from './schemes/c7/c7.component';
import { C8Component } from './schemes/c8/c8.component';
import { C9Component } from './schemes/c9/c9.component';
import { SchemesComponent } from './schemes/schemes.component';
import { CarromComponent } from './sports/carrom/carrom.component';
import { ChessComponent } from './sports/chess/chess.component';
import { CricketComponent } from './sports/cricket/cricket.component';
import { FootballComponent } from './sports/football/football.component';
import { KabaddiComponent } from './sports/kabaddi/kabaddi.component';
import { KhoComponent } from './sports/kho/kho.component';
import { LjComponent } from './sports/lj/lj.component';
import { RunningComponent } from './sports/running/running.component';
import { ShotputComponent } from './sports/shotput/shotput.component';
import { SportsComponent } from './sports/sports.component';
import { VbComponent } from './sports/vb/vb.component';
import { TbComponent } from './tb/tb.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
{path:"home", component:HomeComponent},
{path:"schemes", component:SchemesComponent, 
children: [
  {path:"c1", component:C1Component},
  {path:"c2", component:C2Component},
  {path:"c3", component:C3Component},
  {path:"c4", component:C4Component},
  {path:"c5", component:C5Component},
  {path:"c6", component:C6Component},
  {path:"c7", component:C7Component},
  {path:"c8", component:C8Component},
  {path:"c9", component:C9Component},
  {path:"c0", component:C0Component},
]},
{path:"sports", component:SportsComponent, children:[
  {path:"chess", component:ChessComponent},
  {path:"carrom", component:CarromComponent},
  {path:"vb", component:VbComponent},
  {path:"football", component:FootballComponent},
  {path:"kho", component:KhoComponent},
  {path:"lj", component:LjComponent},
  {path:"cricket", component:CricketComponent},
  {path:"kabaddi", component: KabaddiComponent},
  {path:"shotput", component:ShotputComponent},
  {path:"running", component: RunningComponent}
]},
{path:"tb", component:TbComponent},
{path:"login", component:LoginComponent},
{path:"reg", component:RegComponent},
{path:"outlet", component:OutletComponent},
{path: "forgot-pass", component: ForgotPassComponent},
{path: "verify-email", component: VerifyEmailComponent},
{path: "dash", component:DashComponent},
{path: "certi", component:CertiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
