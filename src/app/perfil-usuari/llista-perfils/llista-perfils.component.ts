import { Component, Input, OnInit } from '@angular/core';
import { LlistaPefils } from 'src/app/model/llista-perfils.model';

@Component({
  selector: 'app-llista-perfils',
  templateUrl: './llista-perfils.component.html',
  styleUrls: ['./llista-perfils.component.css']
})
export class LlistaPerfilsComponent implements OnInit {

  usuaris: LlistaPefils[] = [];
  usuari :LlistaPefils;

  constructor() {
    // Usuaris d'exemple
    this.usuaris.push(new LlistaPefils('Samuel','Orellana Pi', 22, 'assets/img/usuaris-img/persona-1.jpg', 'Gran persona', 'samuel@gmail.com', '3,14159265358979323846...'));
    this.usuaris.push(new LlistaPefils('Anna','Silva Martinez', 20, 'assets/img/usuaris-img/persona-3.jpg', 'Autodidacta', 'anna@gmail.com','240800'));
    this.usuaris.push(new LlistaPefils('Jannete','LeBlanc', 23, 'assets/img/usuaris-img/persona-5.png', 'Amant del vi', 'jannete@gmail.com','En invierno no hay mal abrigo con una copa de un buen vino'));

   }

  ngOnInit(): void {
  }

  // Guarda els usuaris creats per formulari
  arrayDeEventos(NouUsuari): void {

    this.usuaris.push(new LlistaPefils(NouUsuari.nom, NouUsuari.cognom, NouUsuari.edat, NouUsuari.foto, NouUsuari.descripcio, NouUsuari.correu, NouUsuari.password));

  }

}
