import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AhorroComponent } from './ahorro/ahorro.component';
import { InversionComponent } from './inversion/inversion.component';
import { CreditoComponent } from './credito/credito.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { SesionComponent } from './sesion/sesion.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { CambiarComponent } from './cambiar/cambiar.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'inicio',
    pathMatch:'full'
  },
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'inicio/:id',
    component: InicioComponent
  },
  {
    path:'ahorro',
    component: AhorroComponent
  },
  {
    path:'inversion',
    component: InversionComponent
  },
  {
    path:'credito',
    component:CreditoComponent
  },
  {
    path:'registrarse',
    component: RegistrarseComponent
  },
  {
    path:'sesion',
    component: SesionComponent
  },
  {
    path:'recuperar',
    component: RecuperarComponent
  }
  ,{
    path:'cambiar',
    component: CambiarComponent
  }/*,
  {
    path:'**',
    component: InicioComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
