import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { UserdataComponent } from './component/userdata/userdata.component';


const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'user-data', component: UserdataComponent},
  {path: '', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
