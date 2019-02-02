import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPersonPage } from './new-person.page';

describe('NewPersonPage', () => {
  let component: NewPersonPage;
  let fixture: ComponentFixture<NewPersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPersonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
