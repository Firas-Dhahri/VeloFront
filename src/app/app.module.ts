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
import { PackListComponent } from './components/pack-list/pack-list.component';
import { AddPackComponent } from './components/add-pack/add-pack.component';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { UpdatePackComponent } from './components/update-pack/update-pack.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AjouterveloComponent,
    AfficherveloComponent,
    UpdateveloComponent,
    PackListComponent,
    AddPackComponent,
    AddActivityComponent,
    ActivityListComponent,
    UpdatePackComponent
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
