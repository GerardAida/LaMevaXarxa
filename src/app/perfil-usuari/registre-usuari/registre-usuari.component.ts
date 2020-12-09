import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LlistaPefils } from 'src/app/model/llista-perfils.model';
import Swal from 'sweetalert2';
import { validarQueSonIguals } from './registre-usuari.validator';

@Component({
  selector: 'app-registre-usuari',
  templateUrl: './registre-usuari.component.html',
  styleUrls: ['./registre-usuari.component.css']
})

export class RegistreUsuariComponent implements OnInit {

  nom: string ="";
  cognom: string ="";
  edat: number=0;
  foto: string ="";
  descripcio: string="";
  correu: string="";
  password: string="";
  passwordc: string="";

  @Output() pasarUsuari = new EventEmitter<LlistaPefils>();

  constructor(private formBuilder: FormBuilder) { }

  usuari: FormGroup;
  submitted = false;

  ngOnInit(): void {
        // Condicions dels camps
        this.usuari = this.formBuilder.group({

          nom: ['', Validators.required],
          cognom: ['', Validators.required],
          edat: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
          foto: ['', Validators.required],
          descripcio: ['', [Validators.required, Validators.minLength(4)]],
          correu: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
          passwordc: ['', Validators.required],

        },{
          // Validar que les contrasenyes son IDENTIQUES
          validator: validarQueSonIguals('password', 'passwordc')

        });

  }

  get f(){

    return this.usuari.controls;

  }

  // Enviar dades
  enviarDatos(nom,cognom,edat,foto,descripcio,correu,passwordc){

    this.submitted = true;

    if(this.usuari.invalid){

      return;

    }

    this.GuardarDatos(nom,cognom,edat,foto,descripcio,correu,passwordc);
    Swal.fire('Registre Completat','Ja se ha registrar el teu usuari!','success');

  }

  // Guardem dades
  GuardarDatos(nom,cognom,edat,foto,descripcio,correu, passwordc): void {

    this.nom = nom;
    this.cognom = cognom;
    this.edat = edat;
    this.foto = foto;
    this.descripcio = descripcio;
    this.correu = correu;
    this.passwordc = passwordc;
    this.EnviarAlPadre();

  }

  // Enviem les dades al pare
  EnviarAlPadre(): void {

    this.pasarUsuari.emit(new LlistaPefils(this.nom, this.cognom, this.edat, this.foto, this.descripcio, this.correu, this.passwordc));

  }

}
