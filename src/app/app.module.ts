// Angular basics
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Layout and UI
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// services
import { AppRoutingModule } from './services/app-routing.module';

// App Layout Components
import { AppComponent } from './app.component';
import { ContainerComponent } from './layout/container/container.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

// App components - pages
import { SettingsComponent } from './components//settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    SidenavComponent,
    SettingsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
