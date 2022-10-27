import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBoundShoeComponent } from './data-bound-shoe.component';

describe('DataBoundShoeComponent', () => {
  let component: DataBoundShoeComponent;
  let fixture: ComponentFixture<DataBoundShoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBoundShoeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBoundShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
