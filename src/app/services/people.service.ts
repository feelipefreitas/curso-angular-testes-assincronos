import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPeople } from "../interfaces/people.interface";

@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    readonly peopleList: IPeople[] = [
        {
            name: 'Lucas'
        },
        {
            name: 'Laura'
        }
    ];

    returnPeopleListWithPromise(): Promise<IPeople[]> {
        return new Promise<IPeople[]>((resolve) => {
            return resolve(this.peopleList);
        });
    }

    returnPeopleListWithPromiseTimeout(): Promise<IPeople[]> {
        return new Promise<IPeople[]>((resolve) => {
            setTimeout(() => {
                resolve(this.peopleList);
            }, 500);
        });
    }

    returnPeopleListWithObservable(): Observable<IPeople[]> {
        return new Observable((observer) => {
            observer.next(this.peopleList);
        });
    }

    returnPeopleListWithObservableTimeout(): Observable<IPeople[]> {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(this.peopleList);
            }, 500);
        });
    }
}