import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { TodoState } from "../../store/todo/todo.reducer";
import { TodoCreateAction, TodoDeleteAction, TodoEditAction, TodoToggleAction } from "../../store/todo/todo.actions";
import { Observable } from "rxjs";
import { Todo } from "../../model/todo";
import { todoListSelector } from "../../store/todo/todo.selectors";
import { TodoSyncStorageService } from "../../service/todo-sync-storage.service";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrl: './todo-widget.component.scss'
})
export class TodoWidgetComponent implements OnInit {

  public todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(
    private store$: Store<TodoState>,
    private todoSyncStorage: TodoSyncStorageService
  ) {}

  ngOnInit() {
    this.todoSyncStorage.init();
  }

  //** Create store */
  onCreate(name: string) {
    this.store$.dispatch(new TodoCreateAction({ name }));
  }

  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteAction({ id }));
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleAction({ id }));
  }

  onEdit({ id, name }: {id: any, name: any}) {
    this.store$.dispatch(new TodoEditAction({ id, name }));
  }
}
