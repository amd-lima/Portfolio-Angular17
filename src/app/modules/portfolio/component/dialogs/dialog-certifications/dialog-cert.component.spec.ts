import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCertComponent } from './dialog-cert.component';

describe('DialogCertComponent', () => {
  let component: DialogCertComponent;
  let fixture: ComponentFixture<DialogCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
