import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPerson } from "../interfaces/person.interface";

@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    readonly peopleList: IPerson[] = [
        {
            name: 'Lucas'
        },
        {
            name: 'Laura'
        }
    ];

    returnPeopleListWithPromise(): Promise<IPerson[]> {
        return new Promise<IPerson[]>((resolve) => {
            return resolve(this.peopleList);
        });
    }

    returnPeopleListWithPromiseTimeout(): Promise<IPerson[]> {
        return new Promise<IPerson[]>((resolve) => {
            setTimeout(() => {
                resolve(this.peopleList);
            }, 500);
        });
    }

    returnPeopleListWithObservable(): Observable<IPerson[]> {
        return new Observable((observer) => {
            observer.next(this.peopleList);
        });
    }

    returnPeopleListWithObservableTimeout(): Observable<IPerson[]> {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(this.peopleList);
            }, 500);
        });
    }
}