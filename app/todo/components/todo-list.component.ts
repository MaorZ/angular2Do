import {Component, Input} from "angular2/core";
import {TodoItemComponent} from "./todo-item.component";

@Component({
    selector: 'a2d-todo-list',
    templateUrl: 'app/todo/components/todo-list.component.html',
    directives: [TodoItemComponent]
})
export class ToDoListComponent {
    @Input() TodoItems;
}