import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { UsersComponent } from './users/users.component';
import { WinnersComponent } from './winners/winners.component';
import { ToppersComponent } from './toppers/toppers.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FirebaseService } from './firebase.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdduserComponent } from './adduser/adduser.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    UsersComponent,
    WinnersComponent,
    ToppersComponent,
    ConfirmDialogComponent,
    AdduserComponent,
    ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes)




  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
