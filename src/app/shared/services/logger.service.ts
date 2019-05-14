import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logOnAddingTodo(title: string) {
    console.log(`We are adding new todo with title:${title}`);
  }

  logOnDeletingTodo(title: string) {
    console.log(`We are deleting todo with title:${title}`);
  }
}
