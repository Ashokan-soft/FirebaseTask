import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataList: any[] = [
    { name: "Ashok", age: "22", score: "100" },
    { name: "Mohan", age: "24", score: "99" },
    { name: "Madan", age: "28", score: "79" },
    { name: "Nivas", age: "29", score: "55" },
    { name: "Sridhar", age: "30", score: "20" },
    { name: "Logu", age: "31", score: "89" },
    { name: "Tamil", age: "32", score: "67" },
  ];

  winnersList: any[] = [];

  constructor() { }

  getDataList(): any[] {
    return this.dataList;
  }

  getWinnersList(): any[] {
    return this.winnersList;
  }

  addToWinnersList(user: any) {
    this.winnersList.push(user);
  }
}
