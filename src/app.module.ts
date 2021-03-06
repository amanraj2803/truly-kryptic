import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './components/app/app';
import { NavbarComponent } from "./components/nav-bar/nav-bar";
import { LandingpageComponent } from "./components/landing/landing";
import { firebaseConfig } from './firebase.config';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form';
import { ProviderAuthComponent } from './components/provider-auth/provider-auth';
import { LoginComponent } from './components/login/login';
import { AccountComponent } from "./components/account/account";
import { LevelListComponent } from './components/level-list/level-list';
import { LevelComponent } from './components/level/level';
import { HallOfFameComponent } from "./components/hof/hof";
import { GettingStartedComponent } from './components/getting-started/getting-started';
import { ResetPasswordComponent } from './components/reset-password/reset-password';
import { LevelService } from './components/level/level.service';
import { HallOfFameFormComponent } from './components/hof-form/hof-form';
import { LevelGuard } from './components/level/level.guard';
import { LoggedOutGuard } from './logged-out.guard';
import { LoggedInGuard } from './logged-in.guard';

const appRoutes: Routes = [
  { path: '', canActivate: [LoggedOutGuard], component: LandingpageComponent },
  { path: 'login', canActivate: [LoggedOutGuard], component: LoginComponent },
  { path: 'account', canActivate: [LoggedInGuard], component: AccountComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'level-list', canActivate: [LoggedInGuard], component: LevelListComponent },
  { path: 'level/:level_id/:sublevel_id', canActivate: [LoggedInGuard, LevelGuard], component: LevelComponent },
  { path: 'hof', component: HallOfFameComponent },
  { path: 'hof-form', canActivate: [LoggedInGuard], component: HallOfFameFormComponent },
  { path: 'reset-password', canActivate: [LoggedOutGuard], component: ResetPasswordComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig[FIREBASE_PROJECT]),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    SignUpFormComponent,
    LoginComponent,
    AccountComponent,
    ProviderAuthComponent,
    LevelListComponent,
    LevelComponent,
    HallOfFameComponent,
    HallOfFameFormComponent,
    GettingStartedComponent,
    ResetPasswordComponent,
  ],
  providers: [LevelService, LevelGuard, LoggedOutGuard, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
