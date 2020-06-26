import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicFormComponent } from './physic-form.component';

describe('PhysicFormComponent', () => {
  let component: PhysicFormComponent;
  let fixture: ComponentFixture<PhysicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
