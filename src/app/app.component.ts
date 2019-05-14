import { Component, OnInit } from '@angular/core';

import { Todo } from './todo/todo.interface';
import { TodosService } from './shared/services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  showTodos = true;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todos = this.todosService.getAll();
  }

  // addTodo(todo: Todo) {
  //   this.todos.push(todo);
  // }

  toggleShowTodosStatus() {
    this.showTodos = !this.showTodos;
  }

  // removeTodo(id: number) {
  //   this.todos.splice(id, 1);
  // }
}
