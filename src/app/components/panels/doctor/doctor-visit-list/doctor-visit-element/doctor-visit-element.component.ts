import {Component, Input, OnInit} from '@angular/core';
import {AppointmentEntity} from "../../../../../entities/AppointmentEntity";
import {DoctorAppointmentService} from "../../../../../services/visit/doctor-appointment.service";

@Component({
  selector: 'app-doctor-visit-element',
  templateUrl: './doctor-visit-element.component.html',
  styleUrls: ['./doctor-visit-element.component.scss']
})
export class DoctorVisitElementComponent implements OnInit {

    @Input()
    public appointment!: AppointmentEntity;

    constructor(private doctorAppointmentService:DoctorAppointmentService) {
    }

    ngOnInit(): void {
    }

    cancel() {
        this.doctorAppointmentService.appointments.forEach((value, index) => {
            if (value.id !=null && value.id == this.appointment.id){
                this.doctorAppointmentService.appointments.splice(index, 1);
            }
        })
    }
}
