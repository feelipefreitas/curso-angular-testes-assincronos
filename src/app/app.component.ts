import { Component, OnInit } from '@angular/core';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private _peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.testeAssincrono();  
  }

  // testeSincrono() {
  //   console.log('1');
  //   alert('Teste');
  //   console.log('2');
  // }

  testeAssincrono() {
    console.log(1);
    
    this._peopleService.returnPeopleListWithObservableTimeout().subscribe(peopleListResponse => {
      console.log('peopleListResponse', peopleListResponse)
      console.log(2);
    });

    console.log(3);
    console.log(3);
    console.log(3);
    console.log(3);
    console.log(3);
    console.log(3);
  }
}
