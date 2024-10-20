import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenpassComponent } from './forgottenpass.component';

describe('ForgottenpassComponent', () => {
  let component: ForgottenpassComponent;
  let fixture: ComponentFixture<ForgottenpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgottenpassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgottenpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
