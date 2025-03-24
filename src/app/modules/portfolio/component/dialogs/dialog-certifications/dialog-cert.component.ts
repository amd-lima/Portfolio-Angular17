import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IProjects } from '../../../interface/IProjects.interface';

@Component({
  selector: 'app-dialog-certifications',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-cert.component.html',
  styleUrl: './dialog-cert.component.scss',
})
export class DialogCertComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogCertComponent>,
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
