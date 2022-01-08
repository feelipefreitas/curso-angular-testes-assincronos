import { Component, OnInit } from '@angular/core';
import { IPerson } from './interfaces/person.interface';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  peopleList: IPerson[] = [];

  constructor(
    private _peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    console.log('OnInit');
    
    this.testeAsyncAwait();  
  }

  async testeAsyncAwait() {
    console.log('testeAsyncAwait');
    this.peopleList = 
      await this._peopleService.returnPeopleListWithPromise();
  }
}
