import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentesGenerales/nav-bar/nav-bar.component';
import { FooterComponent } from './componentesGenerales/footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { AhorroComponent } from './ahorro/ahorro.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InversionComponent } from './inversion/inversion.component';
import { CreditoComponent } from './credito/credito.component';
import { SesionComponent } from './sesion/sesion.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { CambiarComponent } from './cambiar/cambiar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    InicioComponent,
    AhorroComponent,
    ComentariosComponent,
    RegistrarseComponent,
    InversionComponent,
    CreditoComponent,
    SesionComponent,
    RecuperarComponent,
    CambiarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
