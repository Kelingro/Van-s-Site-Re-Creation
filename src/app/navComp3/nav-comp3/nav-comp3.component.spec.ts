import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComp3Component } from './nav-comp3.component';

describe('NavComp3Component', () => {
  let component: NavComp3Component;
  let fixture: ComponentFixture<NavComp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
