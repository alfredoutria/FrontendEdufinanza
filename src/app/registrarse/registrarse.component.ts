import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  mostrar: boolean = true;
  usuarioExiste: boolean = true;
  correoExiste: boolean = true;
  emailValido: boolean = true;
  inputBackground:string = '';
  color:string = '';
  codigo:number = 0;

  usuario ={
    id: '',
    nombre: '',
    email: '',
    password: '',
    repetirPassword:''
  }



  UsuarioArray : any[] = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getUsuario();
    this.inputBackground = 'black';
    this.color = 'white';
    
  }

  validarEmail() {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Verificar si el valor del campo de correo electrónico coincide con el formato válido
    this.emailValido = emailRegex.test(this.usuario.email);
  }
 
  Guardar(){

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.emailValido = emailRegex.test(this.usuario.email)
  
   if(this.usuario.password == this.usuario.repetirPassword){

    if(this.emailValido){

    let bodyData = {
      "nombre": this.usuario.nombre,
      "email" : this.usuario.email,
      "password": this.usuario.password,  
      "codigo": this.codigo,
    };

    this.http.post('https://backendedufinanza.onrender.com/usuario/crear/', bodyData).subscribe(
      (response: any) => {
        console.log(response);
        console.log(this.codigo);
        this.getUsuario();
        
        if(response == 'Correo ya existe' ){
          this.correoExiste = false;
        }else if(response == 'Usuario ya existe'){
          this.usuarioExiste = false;
        }else if(response == 'Correo ya existe' && response == 'Usuario ya existe'  ){

        }
        else{
            this.router.navigate(['/sesion']); 
        }
        
      }
    );

    }else{
      alert("El formato de email está incorrecto");
    }
    console.log('Usuario: ' + this.usuario.email + ' ' + this.usuario.password )

   }else{
      this.mostrar = false;
   }

    

}



  getUsuario(){
    this.http.get("https://backendedufinanza.onrender.com/usuario/obtener/").subscribe((resultData: any)=>{
        console.log(resultData);
        this.UsuarioArray = resultData;
    });
  }

  Actualizar(dato: any)
  {
   this.usuario.id = dato.id;
   this.usuario.nombre;
   this.usuario.email = dato.email;
   this.usuario.password = dato.password;
   
   
  }

  ActualizarUsuario()
  {
    let bodyData = {
      "nombre": this.usuario.nombre,
      "email" : this.usuario.email,
      "password" : this.usuario.password,  
    };
    
    this.http.put("https://backendedufinanza.onrender.com/usuario/actualizar/"+ this.usuario.id , bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Usuario Actualziado exitosamente")
        this.usuario.email = '';
        this.usuario.password = '';
        this,this.getUsuario();
    });
  }


  Eliminar(data: any)
  {
    this.http.delete("https://backendedufinanza.onrender.com/usuario/eliminar/" +  data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deletedddd")
        this.getUsuario();
    });
 
  }

  


   
    

    CampoInput(){
     this.inputBackground = 'black';
     this.color = 'white';

    }  
    


}
