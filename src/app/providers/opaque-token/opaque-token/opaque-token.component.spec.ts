/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpaqueTokenComponent } from './opaque-token.component';

describe('OpaqueTokenComponent', () => {
  let component: OpaqueTokenComponent;
  let fixture: ComponentFixture<OpaqueTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpaqueTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpaqueTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
