import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AfficherveloComponent } from './components/affichervelo/affichervelo.component';
import { AjouterveloComponent } from './components/ajoutervelo/ajoutervelo.component';
import { UpdateveloComponent } from './components/updatevelo/updatevelo.component';


const routes: Routes = [
  {path:'' , component:NavbarComponent , children:[
  { path: 'affichervelo', component: AfficherveloComponent },
  { path: 'ajoutervelo', component: AjouterveloComponent },
  { path: 'modifierVelo/:id', component: UpdateveloComponent }, // This should accept the ID parameter
 

    

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
