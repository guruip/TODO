import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrl: './todo-create-form-ui.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
})
export class TodoCreateFormUiComponent {
  public name: string = '';

  @Output()
  create = new EventEmitter<string>();

  onCreate() {
    if (this.name){
      this.create.emit(this.name);
      this.name = '';
    }
  }
}
