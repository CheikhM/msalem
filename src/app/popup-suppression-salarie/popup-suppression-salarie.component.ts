import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-suppression-salarie',
  templateUrl: './popup-suppression-salarie.component.html',
  styleUrls: ['./popup-suppression-salarie.component.css']
})
export class PopupSuppressionSalarieComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupSuppressionSalarieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDataModel) { }

  ngOnInit(): void {
  }

}


// #TODO move outside folder
export interface ConfirmDataModel {
  message: string;
  confirm: string;
  deny: string;
}
