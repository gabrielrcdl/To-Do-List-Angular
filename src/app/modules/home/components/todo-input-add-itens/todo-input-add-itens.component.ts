import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter // Recebe Outuput para emitir um evento

  public addItemTaskList: string  = ""
  

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){

    this.addItemTaskList = this.addItemTaskList.trim() //Remove o espaço em branco à esquerda e à direita e os caracteres de terminação de linha de uma string.

    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList); // Quando aperta o enter dará o emit (this.addItemTaskList) para fora do componente todo-list
      this.addItemTaskList = "";
    }
  }
}
