import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoComponent } from './todo/todo.component';
import { LoggerService } from './shared/services/logger.service';
import {TodosService} from './shared/services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LoggerService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
