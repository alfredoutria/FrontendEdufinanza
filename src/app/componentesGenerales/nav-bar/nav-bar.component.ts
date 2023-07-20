import { Component,OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  Miusuario: string = '';
  Sesion: String = '';
  divSesion:String = '';

  constructor(private Serviciousuario: UsuarioService){}

  ngOnInit(): void {

    const miusuarioLocalStorage = localStorage.getItem('Miusuario');
  
    if (miusuarioLocalStorage) {
      try {
        this.Miusuario = JSON.parse(miusuarioLocalStorage);
        this.Serviciousuario.enviarDatos(this.Miusuario);
        this.Sesion = 'Cerrar Sesión';
        this.divSesion = 'divSesion';
      } catch (error) {
        console.error('Error al analizar la cadena JSON:', error);
      }
    }
    
    this.Serviciousuario.obtenerDatos().subscribe((datos) => {
      this.Miusuario = datos;
      this.Sesion = 'Cerrar Sesión';
      this.divSesion = 'divSesion';
    });

  }

  cerrarSesion(){
    localStorage.removeItem('Miusuario');
    this.divSesion = '';
    this.Miusuario = '';
    this.Sesion = '';
    window.location.reload();
  }

}
