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

  describe('testeAsyncAwait', () => {
    it('(ASYNC-AWAIT) should test the testeAsyncAwait function', async () => {
      await component.testeAsyncAwait();
  
      expect(component.peopleListAsyncAwait.length).toBeGreaterThan(0);
    });
  
    it('(ASYNC-AWAIT) should apply a people list in the peopleListAsyncAwait prop', async () => {
      await fixture.detectChanges();
  
      expect(component.peopleListAsyncAwait.length).toBeGreaterThan(0);
    });
  
    it('(WAIT-FOR-ASYNC) should apply a people list in the peopleListAsyncAwait prop', waitForAsync(() => {
      fixture.detectChanges();
  
      fixture.whenStable().then(() => {
        expect(component.peopleListAsyncAwait.length).toBeGreaterThan(0);
      });
    }));
  
    it('(FAKE-ASYNC) should apply a people list in the peopleListAsyncAwait prop', fakeAsync(() => {
      fixture.detectChanges();
  
      tick(500);
  
      expect(component.peopleListAsyncAwait.length).toBeGreaterThan(0);
    }));
  });

  describe('testePromise', () => {
    it('(ASYNC-AWAIT) should test the testePromise function', async () => {
      await component.testePromise();
  
      expect(component.peopleListPromise.length).toBeGreaterThan(0);
    });

    it('(ASYNC-AWAIT) should apply a people list in the peopleListPromise prop', async () => {
      await fixture.detectChanges();
  
      expect(component.peopleListPromise.length).toBeGreaterThan(0);
    });

    it('(WAIT-FOR-ASYNC) should apply a people list in the peopleListPromise prop', waitForAsync(() => {
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.peopleListPromise.length).toBeGreaterThan(0);
      });
    }));

    it('(FAKE-ASYNC) should apply a people list in the peopleListPromise prop', fakeAsync(() => {
      fixture.detectChanges();

      tick(500);
  
      expect(component.peopleListPromise.length).toBeGreaterThan(0);
    }));
  });

  describe('testPromiseTimeout', () => {
    it('(WAIT-FOR-ASYNC) should apply a people list in the peopleListPromiseTimeout prop', waitForAsync(() => {
      fixture.detectChanges();
      
      //Ocorre Erro
      // component.testPromiseTimeout();

      fixture.whenStable().then(() => {
        expect(component.peopleListPromiseTimeout.length).toBeGreaterThan(0);
      });
    }));

    it('(FAKE-ASYNC) should test the testPromiseTimeout function', fakeAsync(() => {
      component.testPromiseTimeout();
      // fixture.detectChanges();

      tick(501);

      expect(component.peopleListPromiseTimeout.length).toBeGreaterThan(0);
    }));
  });

  describe('testObservable', () => {
    it('(ASYNC-AWAIT) should test the testObservable function', async () => {
      await component.testObservable();
  
      expect(component.peopleListObservable.length).toBeGreaterThan(0);
    });

    it('(ASYNC-AWAIT) should apply a people list in the peopleListObservable prop', async () => {
      await fixture.detectChanges();
  
      expect(component.peopleListObservable.length).toBeGreaterThan(0);
    });

    it('(WAIT-FOR-ASYNC) should apply a people list in the peopleListObservable prop', waitForAsync(() => {
      fixture.detectChanges();
  
      fixture.whenStable().then(() => {
        expect(component.peopleListObservable.length).toBeGreaterThan(0);
      });
    }));

    it('(FAKE-ASYNC) should apply a people list in the peopleListObservable prop', fakeAsync(() => {
      fixture.detectChanges();
  
      tick(500);
  
      expect(component.peopleListObservable.length).toBeGreaterThan(0);
    }));
  });

  describe('testObservableTimeout', () => {
    it('(WAIT-FOR-ASYNC) should apply a people list in the peopleListObservableTimeout prop', waitForAsync(() => {
      // Ocorre erro
      // component.testObservableTimeout();
      fixture.detectChanges();
  
      fixture.whenStable().then(() => {
        expect(component.peopleListObservableTimeout.length).toBeGreaterThan(0);
      });
    }));

    it('(FAKE-ASYNC) should apply a people list in the peopleListObservableTimeout prop', fakeAsync(() => {
      fixture.detectChanges();
  
      tick(501);
  
      expect(component.peopleListObservable.length).toBeGreaterThan(0);
    }));
  });
});
