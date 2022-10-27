import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkcardComponent } from './pinkcard.component';

describe('PinkcardComponent', () => {
  let component: PinkcardComponent;
  let fixture: ComponentFixture<PinkcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinkcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinkcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
