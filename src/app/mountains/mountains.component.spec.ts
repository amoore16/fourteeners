/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MountainsComponent } from './mountains.component';

describe('MountainsComponent', () => {
  let component: MountainsComponent;
  let fixture: ComponentFixture<MountainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
