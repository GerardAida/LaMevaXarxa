import { Component, OnInit } from '@angular/core';
import { LlistaUsuari } from 'src/app/model/llista-usuari.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-llista-usuari',
  templateUrl: './llista-usuari.component.html',
  styleUrls: ['./llista-usuari.component.css']
})
export class LlistaUsuariComponent implements OnInit {

  usuaris: LlistaUsuari[] = [];

  constructor() { }

  ngOnInit(): void {
    this.usuaris.push(new LlistaUsuari('Samuel','Orellana Pi', '22', 'Gran persona' ,'assets/img/usuaris-img/persona-1.jpg'));
    this.usuaris.push(new LlistaUsuari('Josep','Guardia Peralta', '45', 'Apasionat de les motos' ,'assets/img/usuaris-img/persona-2.jpg'));
    this.usuaris.push(new LlistaUsuari('Anna','Silva Martinez', '20', 'Autodidacta' ,'assets/img/usuaris-img/persona-3.jpg'));
    this.usuaris.push(new LlistaUsuari('Anabel','Sora Cervero', '25', 'Superheroina' ,'assets/img/usuaris-img/persona-4.jpg'));
    this.usuaris.push(new LlistaUsuari('Jannete','LeBlanc', '23', 'Amant del vi' ,'assets/img/usuaris-img/persona-5.png'));
  }


  eliminar(llista_usuari_model) {
    Swal.fire({
      title: 'Estas segur?',
      text: "Aixo no es pot revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borra-ho!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuaris.splice(llista_usuari_model,1);
        Swal.fire(
          'Eliminat!',
          'Ha estat eliminat.',
          'success'
        )
      }
    })

  }



}
