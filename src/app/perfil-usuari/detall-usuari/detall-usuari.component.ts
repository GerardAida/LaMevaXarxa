import { Component, OnInit } from '@angular/core';
import { LlistaUsuari } from 'src/app/model/llista-usuari.model';

@Component({
  selector: 'app-detall-usuari',
  templateUrl: './detall-usuari.component.html',
  styleUrls: ['./detall-usuari.component.css']
})
export class DetallUsuariComponent implements OnInit {

  usuariSelected: LlistaUsuari = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectUsuari(usuari: LlistaUsuari): void {
    this.usuariSelected = usuari;
  }
