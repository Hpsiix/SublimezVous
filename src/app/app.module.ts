import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialMediaIconsComponent } from './components/social-media-icons/social-media-icons.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShowCaseComponent } from './components/show-case/show-case.component';
import { VitrineComponent } from './components/show-case/vitrine/vitrine.component';
import { PresentationComponent } from './components/show-case/presentation/presentation.component';
import { ContactComponent } from './components/show-case/contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LoginComponent } from './components/show-case/login/login.component'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialMediaIconsComponent,
    ShowCaseComponent,
    VitrineComponent,
    PresentationComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { 
        path: '',
        component:ShowCaseComponent
      },
      { 
        path: 'login',
        component:LoginComponent
      }
    ]),
    FlexLayoutModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
