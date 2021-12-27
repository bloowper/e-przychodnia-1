import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./components/homepage/homepage.component";


const routes: Routes = [
  {path: '', redirectTo: '/homepage',pathMatch:'full'},
  {path: 'homepage', component: HomepageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
