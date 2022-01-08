import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PeopleService } from './services/people.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        PeopleService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('(ASYNC-AWAIT) should test the testeAsyncAwait function', async () => {
    await component.testeAsyncAwait();

    expect(component.peopleList.length).toBeGreaterThan(0);
  });

  it('(ASYNC-AWAIT) should apply a people list in the peopleList prop', async () => {
    await fixture.detectChanges();

    expect(component.peopleList.length).toBeGreaterThan(0);
  });

  it('(WAIT-FOR-ASYNC) should apply a people list in the peopleList prop', waitForAsync(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.peopleList.length).toBeGreaterThan(0);
    });
  }));

  it('(FAKE-ASYNC) should apply a people list in the peopleList prop', fakeAsync(() => {
    fixture.detectChanges();

    tick(500);

    expect(component.peopleList.length).toBeGreaterThan(0);
  }));
});
