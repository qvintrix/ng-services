import { Component, Input } from '@angular/core';

import { Todo } from './todo.interface';
import { TodosService } from '../shared/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() id: number;
  @Input() todo: Todo;
  // @Output() removeTodo = new EventEmitter<number>();

  constructor(private todosService: TodosService) { }

  onRemoveTodo() {
    this.todosService.removeById(this.id);
  }
}
