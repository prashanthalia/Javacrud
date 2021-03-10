import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbillComponent } from './allbill.component';

describe('AllbillComponent', () => {
  let component: AllbillComponent;
  let fixture: ComponentFixture<AllbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
