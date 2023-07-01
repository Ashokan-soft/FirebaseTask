import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Database, getDatabase, push, ref, set } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit{
  ngOnInit() {
   
  }
  constructor(public Database:Database,
    private http:HttpClient,
    // private db: Database
    ){}
    // constructor() { }

  userform: FormGroup = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Age: new FormControl('', [Validators.required]),
    Score: new FormControl('', [Validators.required]),
    user_id: new FormControl('', [Validators.required]),
  })
  Submit(value:any){

    const db = getDatabase();
    
    set(ref(db, 'Users/'+ value.user_id), ({
      name: value.Name,
      age: value.Age,
      score : value.Score
    }));
    alert("created succfuly")
  
  }
  Clear(){
    this.userform.reset()
  }
  // test(inputs:any)
//   {
// const db = getDatabase();
// const postListRef = ref(db, 'posts');
// const newPostRef = push(postListRef);
// set(newPostRef, {
//   NAME: inputs.Name,
//   AGE: inputs.Age,
//   SCORE : inputs.Score
// });

  // }
    // if(this.userform.valid){
      // let newdata = {
      //   "Name": parseInt(this.userform.controls['Name'].value),
      //   "Age": parseInt(this.userform.controls['Age'].value),
      //   "Score": parseInt(this.userform.controls['Score'].value),
      // }
      // const db = getDatabase();
      // alert(JSON.stringify(newdata))
  
      // this.ValueGive(newdata).subscribe((Response: any) => {
  
      //   alert(JSON.stringify(Response))
      //   //this.GetAll();
  
      // })
      // set(ref(db, 'users/'), {
      //   Name: parseInt(this.userform.controls['Name'].value),
      //   Age: parseInt(this.userform.controls['Age'].value),
      //   Score: parseInt(this.userform.controls['Score'].value),
        // NAME: newdata.Name,
        // AGE: newdata.Age,
        // SCORE : newdata.Score
  //     });
  //   }
  //   else{
  //     alert("Warning !!! Form Invalid")
  //   }
  // }
  // postData(data: any): void {
  //   const db = getDatabase();
  //   let newdata = {
  //       "Name": parseInt(this.userform.controls['Name'].value),
  //       "Age": parseInt(this.userform.controls['Age'].value),
  //       "Score": parseInt(this.userform.controls['Score'].value),
  //     }

  //   const apiUrl = 'https://fir-project-a9d76-default-rtdb.firebaseio.com/Users.json';
  //   this.http.post(apiUrl, newdata).subscribe(
  //     response => {
  //       // Handle success response
  //       console.log('Data posted successfully:', response);
  //     },
  //     error => {
  //       // Handle error response
  //       console.error('Error posting data:', error);
  //     }
  //   );
  // }
  
  // pushData(data: any): void {
  //   this.db.Users('https://fir-project-a9d76-default-rtdb.firebaseio.com/Users.json').push(data)
  //     .then(() => {
  //       console.log('Data pushed successfully.');
  //     })
  //     .catch((error) => {
  //       console.error('Error pushing data:', error);
  //     });
  // }
  
  }

