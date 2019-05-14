import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../todo/todo.interface';
import { TodosService } from '../shared/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Input() showTodos: string;
  // @Output() addTodo = new EventEmitter<Todo>();

  constructor(private todosService: TodosService) { }

  title: string;
  description: string;

  onAddTodo() {
    if (this.title && this.description) {
      this.todosService.addOne({
        title: this.title,
        description: this.description
      });
    }
  }
}
