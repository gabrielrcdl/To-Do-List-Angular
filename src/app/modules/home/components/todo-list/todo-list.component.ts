import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';
import { TaskService } from 'src/app/service/task.service';
import { convertFromMaybeForwardRefExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array <TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.setLocalStorage();
  }


  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }
  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }
  public deleteAllTaskList() {
    const confirm = window.confirm('Você realmente deseja excluir?');

    if (confirm) {
      // Se confirm for verdade
      this.taskList = []; //Irá resetar a lista de task
    }
  }
  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Ops! o campo está vazio, deseja excluir?');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked));

      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
     // Convertendo checked para number, pois seu tipo é boolean
    // Colocando o sort todos os primeiros checados serão os ultimos da lista. ngDocheck irá verificar se teve uma ação, dependendo da ação dará um .sort
  

  }
}

//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
