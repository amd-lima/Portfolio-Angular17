import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IProjects } from '../../../interface/IProjects.interface';

@Component({
  selector: 'app-dialog-certifications',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-certifications.component.html',
  styleUrl: './dialog-certifications.component.scss',
})
export class DialogCertificationsComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogCertificationsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ) {}

  public certifications = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.certifications.set(this._data);
  }

  closeModal(){
    this._dialogRef.close();
  }
}
