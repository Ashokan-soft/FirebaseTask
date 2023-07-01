import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // constructor(private db: Database) {}

  // getUsers(): Observable<any[]> {
  //   return this.db.list<any[]>('/Users').valueChanges();
  // }

  // getWinners(): Observable<any[]> {
  //   return this.db.list<any[]>('/Winners').valueChanges();
  // }

  // addToWinners(user: any) {
  //   this.db.list<any[]>('/Winners').push(user);
  // }

  // getToppers(): Observable<any[]> {
  //   return this.db.list<any[]>('/Users').valueChanges().pipe(
  //     map((users: any[]) => users.filter(user => Number(user.score) > 90))
  //   );
  // }
}
