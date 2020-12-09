import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LlistaPefils } from 'src/app/model/llista-perfils.model';

@Component({
  selector: 'app-detall-usuari',
  templateUrl: './detall-usuari.component.html',
  styleUrls: ['./detall-usuari.component.css']
})
export class DetallUsuariComponent implements OnInit {

  @Input() usuariSelected: LlistaPefils;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  canviarModel(modal) {
    // Obre el modal del corresponen detalls d'usuari
    console.log(this.usuariSelected);
    this.modalService.open(modal);
  }



}
