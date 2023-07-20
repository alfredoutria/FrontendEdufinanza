import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {

  constructor( private http: HttpClient){}

  email: string = '';
  modal: string = '';
  recuperar: boolean  = false;
  ActivarNuevaClave: boolean = true;
  emailValido: boolean = true;
  mensajeEmail: boolean = true;
  claveGuardada: boolean = true;
  mensajeNoExiste: boolean = true;
  mensajeEmailNoExiste: boolean = true;
  mensajeVacio: boolean = true;
  codigo: string = '';
  clave: string = '';


  validarEmail() {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Verificar si el valor del campo de correo electrónico coincide con el formato válido
    this.emailValido = emailRegex.test(this.email);
  }

  EnviarCodigo(){

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.emailValido = emailRegex.test(this.email);

    if(this.emailValido){

        let email = {"email":this.email}
    
        this.http.post('https://backendedufinanza.onrender.com/usuario/recuperar/', email).subscribe(
          (response: any) => {
            console.log(response);
            if(response == 'Email no existe'){
              this.mensajeEmailNoExiste = false;
            }else{
              this.ActivarNuevaClave = false;
              this.recuperar = true;
            }  
          }
        );
  
   }else{
    this.ActivarNuevaClave = true;
    this.recuperar = false;
    this.mensajeEmail = false;
      
   }

  }

  

  ActualizarClave(){


  if(this.codigo != '' || this.clave != ''){

   let datos = {
       "email": this.email,
       "password": this.clave,
       "codigo": this.codigo,
      
    }

    this.http.post('https://backendedufinanza.onrender.com/usuario/clavenueva/', datos).subscribe(
      (response: any) => {
        console.log(response);

        if (response == 'Contraseña Guardada'){
        this.claveGuardada =false
        this.mensajeNoExiste = true;
        }
        else{
          this.claveGuardada = true
          this.mensajeNoExiste = false;
        }
        
      }
    );
     
  }else{
    this.mensajeVacio = false;
  }

  }


}
