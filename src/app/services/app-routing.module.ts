import { NgModule } from '@angular/core';
import { CanActivate, Routes, RouterModule } from '@angular/router';

import { SignupComponent } from '../components/signup/signup.component';
import { LoginComponent } from '../components/login/login.component';
import { SettingsComponent } from '../components/settings/settings.component';

const routes: Routes = [

  { path: 'signup', component: SignupComponent,   },
  { path: 'login', component: LoginComponent, outlet: 'NotLoggedIn' },
  { path: 'usersettings', component: SettingsComponent,  },
  { path: '**', component: LoginComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})


export class AppRoutingModule { }
