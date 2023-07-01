import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ToppersComponent } from './toppers/toppers.component';
import { WinnersComponent } from './winners/winners.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const routes: Routes = [
  {path:'user',component:UsersComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'toppers',component:ToppersComponent},
  {path:'winners',component:WinnersComponent},
  {path:'confrim',component:ConfirmDialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
