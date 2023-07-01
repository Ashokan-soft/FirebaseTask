import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit{

 winnersList: any[]=[]

 constructor(private dataService: DataService) { }

 ngOnInit() {
   this.winnersList = this.dataService.getWinnersList();
 }
}