import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.scss']
})
export class ToppersComponent implements OnInit{
 

  toppersList: any[]=[]

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.toppersList = this.dataService.getDataList().filter(user => user.score > 90);
  }
}
