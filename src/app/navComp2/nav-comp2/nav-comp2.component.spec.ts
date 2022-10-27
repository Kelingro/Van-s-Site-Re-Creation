import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComp2Component } from './nav-comp2.component';

describe('NavComp2Component', () => {
  let component: NavComp2Component;
  let fixture: ComponentFixture<NavComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
