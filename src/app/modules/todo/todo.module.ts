import { CommonModule, NgIf } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { TODO_REDUCER_NODE, todoReducer } from "./store/todo/todo.reducer";
import { RouterModule } from "@angular/router";
import { todoRoutes } from "./routes";
import { TodoWidgetComponent } from "./widget/todo-widget/todo-widget.component";
import { TodoPageComponent } from "./page/todo-page/todo-page.component";
import { TodoCreateFormUiComponent } from "./ui/todo-create-form-ui/todo-create-form-ui.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoListUiComponent } from "./ui/todo-list-ui/todo-list-ui.component";
import { TodoListItemUiComponent } from "./ui/todo-list-item-ui/todo-list-item-ui.component";
import { TodoListItemEditUiComponent } from "./ui/todo-list-item-edit-ui/todo-list-item-edit-ui.component";
import { TodoSyncStorageService } from "./service/todo-sync-storage.service";

@NgModule({
    declarations: [
        TodoWidgetComponent,
        TodoPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TodoCreateFormUiComponent,
        TodoListUiComponent,
        TodoListItemUiComponent,
        TodoListItemEditUiComponent,
        StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
        RouterModule.forChild(todoRoutes)
    ],
    exports: [TodoWidgetComponent],
    providers: [TodoSyncStorageService]
})
export class TodoModules {}
