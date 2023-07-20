import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private nombreUsuario = new Subject<any>();

  enviarDatos(datos: any){
    this.nombreUsuario.next(datos);
    localStorage.setItem('Miusuario', JSON.stringify(datos)); 
  }

  obtenerDatos(){
    return this.nombreUsuario.asObservable();
  }
}
