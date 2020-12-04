import { Component, OnInit } from '@angular/core';
import { LlistaUsuari } from 'src/app/model/llista-usuari.model';

@Component({
  selector: 'app-llista-perfils',
  templateUrl: './llista-perfils.component.html',
  styleUrls: ['./llista-perfils.component.css']
})
export class LlistaPerfilsComponent implements OnInit {

  usuaris: LlistaUsuari[] = [];

  constructor() { }

  ngOnInit(): void {
    this.usuaris.push(new LlistaUsuari('Samuel','Orellana Pi', '22', 'Gran persona' ,'assets/img/usuaris-img/persona-1.jpg'));
    this.usuaris.push(new LlistaUsuari('Josep','Guardia Peralta', '45', 'Apasionat de les motos' ,'assets/img/usuaris-img/persona-2.jpg'));
    this.usuaris.push(new LlistaUsuari('Anna','Silva Martinez', '20', 'Autodidacta' ,'assets/img/usuaris-img/persona-3.jpg'));
    this.usuaris.push(new LlistaUsuari('Anabel','Sora Cervero', '25', 'Superheroina' ,'assets/img/usuaris-img/persona-4.jpg'));
    this.usuaris.push(new LlistaUsuari('Jannete','LeBlanc', '23', 'Amant del vi' ,'assets/img/usuaris-img/persona-5.png'));

  }

}
