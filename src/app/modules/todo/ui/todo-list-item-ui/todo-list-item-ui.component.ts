import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todo';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrl: './todo-list-item-ui.component.scss',
  standalone: true,
  imports: [NgIf]
})
export class TodoListItemUiComponent implements OnInit {

  @Input()
  todo!: Todo;

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  edit = new EventEmitter<void>();

  @Output()
  toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }

  onToggle(event: any) {
    event.preventDefault();
    this.toggle.emit();
  }
}
