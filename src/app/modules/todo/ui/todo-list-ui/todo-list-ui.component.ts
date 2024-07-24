import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoListItemUiComponent } from '../todo-list-item-ui/todo-list-item-ui.component';
import { TodoListItemEditUiComponent } from '../todo-list-item-edit-ui/todo-list-item-edit-ui.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrl: './todo-list-ui.component.scss',
  standalone: true,
  imports: [
    TodoListItemUiComponent,
    TodoListItemEditUiComponent,
    NgFor,
    NgIf
  ]
})
export class TodoListUiComponent implements OnInit {
  public editIds: number[] = [];

  @Input()
  todoList: Todo[] | null = [];

  @Output()
  delete = new EventEmitter<number>()

  @Output()
  toggle = new EventEmitter<number>()

  @Output()
  edit = new EventEmitter<{id: number, name: string}>()

  constructor() {}

  ngOnInit(): void {
  }

  onEditMode(id: number) {
    this.editIds.push(id);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onToggle(id: number) {
    this.toggle.emit(id);
  }

  onEdit(name: string, id: number) {
    this.editIds = this.editIds.filter(item => item !== id);
    this.edit.emit({id, name});
  }
}
