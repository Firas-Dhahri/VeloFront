import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AfficherveloComponent } from './components/affichervelo/affichervelo.component';
import { AjouterveloComponent } from './components/ajoutervelo/ajoutervelo.component';
import { UpdateveloComponent } from './components/updatevelo/updatevelo.component';
import { PackListComponent } from './components/pack-list/pack-list.component';
import { AddPackComponent } from './components/add-pack/add-pack.component';
import { UpdatePackComponent } from './components/update-pack/update-pack.component';


const routes: Routes = [
  {path:'' , component:NavbarComponent , children:[
  { path: 'affichervelo', component: AfficherveloComponent },
  { path: 'ajoutervelo', component: AjouterveloComponent },
  { path: 'modifierVelo/:id', component: UpdateveloComponent }, // This should accept the ID parameter
  { path: 'afficherpack', component: PackListComponent },
  { path: 'ajouterpack', component: AddPackComponent },
  { path: 'modifierPack/:id', component: UpdatePackComponent}, 
    

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
