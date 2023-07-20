import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   /* this.route.queryParams.subscribe(params => {
      const nombre: any = params['nombre'] || null;

     this.Nombre = nombre;
    });*/

   
  }

 

}
