import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./piloto/pages/home/home.component";
import {SubHomeComponent} from "./piloto/pages/sub-home/sub-home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'subPage', component: SubHomeComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
