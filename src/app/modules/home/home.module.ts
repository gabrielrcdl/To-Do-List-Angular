import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Componentes
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//Página
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class HomeModule { }
