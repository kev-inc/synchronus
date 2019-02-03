import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileDetailPage } from './tile-detail.page';

describe('TileDetailPage', () => {
  let component: TileDetailPage;
  let fixture: ComponentFixture<TileDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
