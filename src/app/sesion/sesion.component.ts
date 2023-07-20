import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  nombre: string = '';
  email: string = '';
  password: string = '';
  inputBackground:string = 'black';
  color:string = 'white';
  mostrar: boolean = true;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private nombreUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.inputBackground = 'black';
    this.color = 'white';
  }

  login(){
    const credentials = { email: this.email, password: this.password };
    this.http.post('https://backendedufinanza.onrender.com/api/login/', credentials).subscribe({
          next: (response: any) => {
          console.log(credentials);
          console.log(response.nombre);
          localStorage.setItem('token', response.token);
          this.nombre = response.nombre;
          this.nombreUsuario.enviarDatos(this.nombre);
          console.error('Error ' + response);
          if(response.nombre !=  undefined){
            this.router.navigate(['/inicio']);
          }else{
            this.mostrar = false;
          }
        },
        error: (error: any) => {
         console.log('error ' + error)
         
        }
     });
  }

}
