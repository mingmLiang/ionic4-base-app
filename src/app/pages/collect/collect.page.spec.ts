import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectPage } from './collect.page';

describe('CollectPage', () => {
  let component: CollectPage;
  let fixture: ComponentFixture<CollectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
