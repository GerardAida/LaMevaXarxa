import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PanellAdminComponent } from './panell-admin/panell-admin.component';
import { PerfilUsuariComponent } from './perfil-usuari/perfil-usuari.component';
import { LlistaPerfilsComponent } from './perfil-usuari/llista-perfils/llista-perfils.component';
import { DetallUsuariComponent } from './perfil-usuari/detall-usuari/detall-usuari.component';
import { RegistreUsuariComponent } from './perfil-usuari/registre-usuari/registre-usuari.component';
import { LlistaUsuariComponent } from './panell-admin/llista-usuari/llista-usuari.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PanellAdminComponent,
    PerfilUsuariComponent,
    LlistaPerfilsComponent,
    DetallUsuariComponent,
    RegistreUsuariComponent,
    LlistaUsuariComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
