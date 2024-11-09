import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AjouterveloComponent } from './components/ajoutervelo/ajoutervelo.component';
import { AfficherveloComponent } from './components/affichervelo/affichervelo.component';
import { UpdateveloComponent } from './components/updatevelo/updatevelo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AjouterveloComponent,
    AfficherveloComponent,
    UpdateveloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule
    
  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
