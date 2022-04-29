import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/home/pages/inicio/inicio.component';

//Paginas
const routes: Routes = [
  {path:"", component: InicioComponent}
]; // Cada objeto é uma página que será carregada

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
