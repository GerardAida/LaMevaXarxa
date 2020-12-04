import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LlistaPefils } from 'src/app/model/llista-perfils.model';
import Swal from 'sweetalert2';

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

  @Output() pasarArray = new EventEmitter<LlistaPefils>();

  constructor(private formBuilder: FormBuilder) { }

  //creo la variable usuari donde almaceno los datos que recibo del formulario
  usuari: FormGroup;
  submitted = false;

  ngOnInit(): void {
        //pongo las condiciones de los campos
        this.usuari = this.formBuilder.group({

          nom: ['', Validators.required],
          cognom: ['', Validators.required],
          edat: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
          foto: ['', Validators.required],
          descripcio: ['', [Validators.required, Validators.minLength(4)]],
          correu: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
          passwordc: ['', [Validators.required]]

        });
  }

  // creamos un metodo para facilitar el acceso a los controles de formulario desde la plantilla
  get f(){
    return this.usuari.controls;
  }

  //metodo enviar
  enviarDatos(nom,cognom,edat,foto,descripcio,correu,passwordc){
    this.submitted = true;
    //si algun campo no cumple las condiciones
    if(this.usuari.invalid){
      return;
    }

    //si todos los campos son correctos muestra la siguiente ventana emergente
    this.GuardarDatos(nom,cognom,edat,foto,descripcio,correu,passwordc);
    Swal.fire('Registre Completat','Ja se ha registrar el teu usuari!','success');
  }

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

  EnviarAlPadre(): void {
    this.pasarArray.emit(new LlistaPefils(this.nom, this.cognom, this.edat, this.foto, this.descripcio, this.correu, this.password));

  }

}
