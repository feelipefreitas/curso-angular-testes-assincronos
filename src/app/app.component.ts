import { Component, OnInit } from '@angular/core';
import { IPerson } from './interfaces/person.interface';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  peopleListAsyncAwait: IPerson[] = [];
  peopleListPromise: IPerson[] = [];
  peopleListPromiseTimeout: IPerson[] = [];

  constructor(
    private _peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    console.log('OnInit');
    
    this.testPromiseTimeout();  
  }

  async testeAsyncAwait() {
    this.peopleListAsyncAwait = 
      await this._peopleService.returnPeopleListWithPromise();
  }

  testePromise() {
    this._peopleService.returnPeopleListWithPromise().then((peopleListResponse) => {
      this.peopleListPromise = peopleListResponse;
    });
  }

  testPromiseTimeout() {
    this._peopleService.returnPeopleListWithPromiseTimeout().then((peopleListResponse) => {
      this.peopleListPromiseTimeout = peopleListResponse;
    });
  }
}
