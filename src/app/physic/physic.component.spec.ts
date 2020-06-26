import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicComponent } from './physic.component';

describe('PhysicComponent', () => {
  let component: PhysicComponent;
  let fixture: ComponentFixture<PhysicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
