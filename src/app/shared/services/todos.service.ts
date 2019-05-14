import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import { Todo } from '../../todo/todo.interface';

@Injectable()
export class TodosService {
  private todos = [
    {
      title: 'Angular',
      description: 'Learn angular 6'
    },
    {
      title: 'RxJS',
      description: 'Learn RxJS'
    }
  ];

  constructor(
    private loggerService: LoggerService
  ) { }

  getAll() {
    return this.todos;
  }

  addOne(todo: Todo) {
    this.todos.push(todo);
    this.loggerService.logOnAddingTodo(todo.title);
  }

  removeById(id: number) {
    const removedTodos = this.todos.splice(id, 1);
    this.loggerService.logOnAddingTodo(removedTodos[0].title);
  }
}
