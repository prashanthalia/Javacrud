import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingsuccessComponent } from './billingsuccess.component';

describe('BillingsuccessComponent', () => {
  let component: BillingsuccessComponent;
  let fixture: ComponentFixture<BillingsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
