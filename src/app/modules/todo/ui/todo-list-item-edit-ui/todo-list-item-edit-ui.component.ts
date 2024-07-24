import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todo';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list-item-edit-ui',
  templateUrl: './todo-list-item-edit-ui.component.html',
  styleUrl: './todo-list-item-edit-ui.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
})
export class TodoListItemEditUiComponent implements OnInit {
  public name: string = '';

  @Input()
  todo!: Todo;

  @Output()
  edit = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.name = this.todo.name;
  }

  onEdit() {
    if (this.name) {
      this.edit.emit(this.name);
    }
  }

  onCancel() {
    this.name = this.todo.name;
  }
}
