import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCertificationsComponent } from './dialog-certifications.component';

describe('DialogCertificationsComponent', () => {
  let component: DialogCertificationsComponent;
  let fixture: ComponentFixture<DialogCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCertificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
