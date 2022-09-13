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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategorieItemComponent } from './components/categorie/categorie-item/categorie-item.component';
import { CategorieListComponent } from './components/categorie/categorie-list/categorie-list.component';
import { PrestationListComponent } from './components/prestation/prestation-list/prestation-list.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialMediaIconsComponent,
    ShowCaseComponent,
    VitrineComponent,
    PresentationComponent,
    ContactComponent,
    LoginComponent,
    CategorieItemComponent,
    CategorieListComponent,
    PrestationListComponent,
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
      },
      { 
        path: 'categories',
        component:CategorieListComponent
      },
      { 
        path: 'categorie/:id',
        component:PrestationListComponent
      }
    ]),
    FlexLayoutModule,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
