import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisedataComponent } from './promisedata.component';

describe('PromisedataComponent', () => {
  let component: PromisedataComponent;
  let fixture: ComponentFixture<PromisedataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromisedataComponent]
    });
    fixture = TestBed.createComponent(PromisedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
