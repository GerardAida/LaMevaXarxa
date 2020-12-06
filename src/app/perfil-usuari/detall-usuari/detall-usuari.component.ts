import { Component, Input, OnInit } from '@angular/core';
import { LlistaUsuari } from 'src/app/model/llista-usuari.model';

@Component({
  selector: 'app-detall-usuari',
  templateUrl: './detall-usuari.component.html',
  styleUrls: ['./detall-usuari.component.css']
})
export class DetallUsuariComponent implements OnInit {

  @Input() usuariSelected: LlistaUsuari;

  constructor() { }

  ngOnInit(): void {
  }

}
