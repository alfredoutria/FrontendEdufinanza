import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {


  Nombre = '';
  divRegistrarse: boolean = true;
  ActivacionComentarios: boolean = true;
  ActivarBotonCrud: boolean = true;
  comentarioArray: any[] = [];
  
  formu:{
    id: number;
    fechaHora:any;
    usuario: string;
    comentario: string;
    MostrarComentario: string
  };
 
 

  constructor(private usuarioServicio: UsuarioService, private http: HttpClient){
    this.formu = {
      id: 0,
      usuario: '',
      fechaHora: '',
      comentario: '',
      MostrarComentario:''
    };
  
  }

  ngOnInit(): void {

   this.getComentario();
   setInterval(()=>{
    this.formu.fechaHora = new Date();
   }, 1000)
   
    const miusuarioLocalStorage = localStorage.getItem('Miusuario');

    if(miusuarioLocalStorage){
      
      try{
        this.Nombre = JSON.parse(miusuarioLocalStorage);
        this.usuarioServicio.enviarDatos(this.Nombre);
        this.divRegistrarse = true;
        this.ActivacionComentarios = false;
        this.ActivarBotonCrud = false;
        this.formu.usuario = this.Nombre;
        

      }catch(error){
         console.log('Error: ' + error);
      }
    } else{

      this.usuarioServicio.obtenerDatos().subscribe((datos) =>{
      this.Nombre = datos;
      })  
      
      this.divRegistrarse = false;
      this.ActivacionComentarios = true;
      this.ActivarBotonCrud = true;
      
    }

  
  }



   enviar(){
   
    let bodyData = {
      "fechaHora": this.formu.fechaHora,
      "usuario": this.formu.usuario,
      "comentario" : this.formu.comentario
    };

    this.http.post('https://backendedufinanza.onrender.com/comentario/crear/', bodyData).subscribe(
      (response: any) => {
        console.log(response);
        this.getComentario();
        
      }
    );
    console.log('Usuario: ' + bodyData.usuario + ' ' + bodyData.comentario)
  
   }


   getComentario(){
    this.http.get("https://backendedufinanza.onrender.com/obtener/comentario/").subscribe((resultData: any)=>{
        console.log(resultData);
        this.comentarioArray = resultData;
    });
  }


  Actualizar(dato: any)
  {
   this.formu.id = dato.id;
   this.formu.MostrarComentario = dato.comentario;  

  }

  Eliminar(dato: any)
  {
   this.formu.id = dato.id;
   this.formu.MostrarComentario = dato.comentario; 
   console.log(this.formu.id)

  }

  ActualizarComentario()
  {
    let bodyData = {
      "usuario": this.formu.usuario,
      "comentario" : this.formu.MostrarComentario, 
    };
    
    this.http.put("https://backendedufinanza.onrender.com/comentario/actualizar/"+ this.formu.id , bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.getComentario();

    });
  }

  EliminarComentario()
  {
    this.http.delete("https://backendedufinanza.onrender.com/comentario/eliminar/" + this.formu.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.getComentario()
    });
 
  }
 

}
