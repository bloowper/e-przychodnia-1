import {Injectable} from '@angular/core';
import {PatientEntity} from "../../entities/PatientEntity";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PatientProviderService {

    fetchedPatients: PatientEntity[]

    constructor() {
        this.fetchedPatients = [
            {
                id: 1,
                nick: "Eliqu",
                firstName: 'Anna',
                lastName: 'Nowak',
                age: 25,
                history: "Pacjent jest w trakcie leczenia lekiem Izotek. Po miesiącu stosowania widać znaczącą poprawę. Kuracja dla małej dawki leku musi potrwać minimum 6 miesięcy. ",
                medicine: "Stosując lek Izotek należy unikać suplementów diety z witaminą A oraz antybiotyków z grupy tetracyklin (zwykle stosowane w leczeniu trądziku, rzadko przy zapaleniu oskrzeli). Jeśli nastąpi wysuszenie wszelkich błon śluzowych proszę o kontakt telefoniczny.",
                thumbnailImageUrl: 'https://i.pinimg.com/564x/e3/69/d7/e369d7e313c8dc041f24958d5d36ff67.jpg'
            }
        ]
    }

    getPatient(patientId: number): Observable<PatientEntity> {
        //mock fetch method, acth like request
        return new Observable(subscriber => {
            var patientEntity = this.fetchedPatients.find(value => value.id === patientId);
            setTimeout(() => {
                if (patientEntity != null) {
                    subscriber.next(patientEntity);
                    subscriber.complete();
                } else {
                    subscriber.error(new Error(`Nie znaleziono pacjenta o podanym id = ${patientId}`))
                    subscriber.complete();
                }
            }, 500);
        })
    }

    getPatientsById(patientId:Set<number>):Observable<PatientEntity[]>{
        return new Observable(subscriber => {
            let patient: PatientEntity[] = [];
            for (let fetchedDoctor of this.fetchedPatients) {
                if (patientId.has(fetchedDoctor.id)) {
                    patient.push(fetchedDoctor);
                }
            }
            setTimeout(() => {
                subscriber.next(patient);
                subscriber.complete();
            }, 500);
        });
    }

}
