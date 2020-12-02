import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanellAdminComponent } from './panell-admin/panell-admin.component';
import { PerfilUsuariComponent } from './perfil-usuari/perfil-usuari.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'perfil-usuari' },
  { path: 'panell-admin', component: PanellAdminComponent },
  { path: 'perfil-usuari', component: PerfilUsuariComponent },
  { path: '**', component: PerfilUsuariComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
