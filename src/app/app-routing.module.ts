import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {VisitSearchComponent} from "./components/searchVisit/visit-search/visit-search.component";
import {SignInComponent} from "./components/sign/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign/sign-up/sign-up.component";
import {DoctorListComponent} from "./components/searchVisit/doctor/doctor-list/doctor-list.component";
import {MainDoctorPanelComponent} from "./components/panels/doctor/main-doctor-panel/main-doctor-panel.component";
import {MainPatientPanelComponent} from "./components/panels/patient/main-patient-panel/main-patient-panel.component";
import {DoctorDetailsComponent} from "./components/searchVisit/doctor/doctor-details/doctor-details.component";
import {PatientDetailsComponent} from "./components/shared/profiles/patients/patient-details/patient-details.component";
import {NotFoundComponent} from "./components/homepage/not-found/not-found.component";
import {PrescriptionListComponent} from "./components/panels/patient/prescription-list/prescription-list.component";
import {PrescriptionSuccessComponent} from "./components/panels/doctor/doctor-prescription-list/prescription-success/prescription-success.component";
import {VisitListComponent} from "./components/panels/patient/visit-list/visit-list.component";
import {
    DoctorPrescriptionListComponent
} from "./components/panels/doctor/doctor-prescription-list/doctor-prescription-list.component";
import {DoctorVisitListComponent} from "./components/panels/doctor/doctor-visit-list/doctor-visit-list.component";
import {
    FavoriteDoctorListComponent
} from "./components/panels/patient/favorite-doctor-list/favorite-doctor-list.component";
import {
    PrescriptionDetailsComponent
} from "./components/panels/patient/prescription-details/prescription-details.component";


const routes: Routes = [
    {path: '', redirectTo: '/homepage', pathMatch: 'full'},
    {path: 'notfound', component: NotFoundComponent},
    {path: 'homepage', component: HomepageComponent},
    {path: 'visits', component: VisitSearchComponent, pathMatch: 'full'},
    {path: 'visits/search', component: DoctorListComponent,},
    {path: 'visits/search/doctor', component: DoctorDetailsComponent},
    {path: 'visits/search/patient',component: PatientDetailsComponent},
    {path: 'login', component: SignInComponent},
    {path: 'register', component: SignUpComponent},
    {path: 'doctorPanel',component: MainDoctorPanelComponent,
        children:[
            {path: '', redirectTo: 'prescriptions', pathMatch: 'full'},
            {path: 'visits',component: DoctorVisitListComponent},
            {path: 'prescriptions',component: DoctorPrescriptionListComponent},
            {path: 'prescriptions/#',component: PrescriptionSuccessComponent}
        ]
    },
    {path: 'patientPanel', component: MainPatientPanelComponent,
        children:[
            {path: '' ,redirectTo:'prescriptions',pathMatch:'full'},
            {path: 'prescriptions', component: PrescriptionListComponent},
            {path: 'prescriptions/:id', component: PrescriptionDetailsComponent},
            {path: 'visits', component: VisitListComponent},
            {path: 'favouritedoctors', component: FavoriteDoctorListComponent}
        ]
    },



    //not found musi byc ostatni
    {path: '**' ,redirectTo:'notfound', pathMatch: 'full'}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {
}
