import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {VisitSearchComponent} from "./components/searchVisit/visit-search/visit-search.component";
import {SignInComponent} from "./components/sign/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign/sign-up/sign-up.component";
import {DoctorListComponent} from "./components/searchVisit/doctor/doctor-list/doctor-list.component";
import {MainDoctorPanelComponent} from "./components/panels/doctor/main-doctor-panel/main-doctor-panel.component";
import {MainPatientPanelComponent} from "./components/panels/patient/main-patient-panel/main-patient-panel.component";


const routes: Routes = [
    {path: '', redirectTo: '/homepage', pathMatch: 'full'},
    {path: 'homepage', component: HomepageComponent},
    {path: 'visits', component: VisitSearchComponent, pathMatch: 'full'},
    {path: 'visits/search', component: DoctorListComponent,},
    {path: 'login', component: SignInComponent},
    {path: 'register', component: SignUpComponent},
    {path: 'doctorPanel',component: MainDoctorPanelComponent,},
    {path: 'patientPanel', component: MainPatientPanelComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {
}