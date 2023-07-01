import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Database, getDatabase, onValue, ref, set } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: any;
  position: any;
  weight: any;
  symbol: any;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
  userList: any[]=[]
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'age', 'score', 'addToWinners'];

  constructor(private dialog: MatDialog, private dataService: DataService) { }

  ngOnInit() {
    this.userList = this.dataService.getDataList();
    this.dataSource = new MatTableDataSource(this.userList);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openConfirmDialog(user: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        user: user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.addToWinnersList(user);
      }
    });
  }
  
  // constructor(
  //   public Database:Database,
  //   private http:HttpClient
  //   ){}
    // fireDatas:any[]=[{}]



  // constructor(private http:HttpClient) { }

//  const db = getDatabase();

//  const starCountRef = ref(db, 'posts/' );
//  onValue(starCountRef, (snapshot) => {
//    const data = snapshot.val();
//   //  updateStarCount(postElement, data);
//  });

// this.getBeta().subscribe((Response: any) => {

  // this.Data1=Response.u1
  // this.Data2=Response.u2
  // this.fireDatas=Response.u1
  // this.fireDatas=JSON.stringify(this.fireDatas)
  // console.log(JSON.stringify(Response))
  // console.log(this.fireDatas)
  // console.log(this.Data1)
  //this.GetAll();
  // this.dataSource=this.fireDatas
 
// })
// console.log(this.fireDatas)

//  }
 
//  public getBeta(){
//   let url ="https://fir-project-a9d76-default-rtdb.firebaseio.com/Users/.json"
//   return this.http.get(url)
// }

// const dbRef = ref(getDatabase());

// get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });


}
