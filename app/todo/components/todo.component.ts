import {Component} from 'angular2/core';
import {TodoModel} from '../todoModel';
import {TodoService} from "../todo-service";
import {ToDoListComponent} from "./todo-list.component";

@Component({
    selector: 'a2d-todo',
    templateUrl: 'app/todo/components/todo.component.html',
    directives: [ToDoListComponent],
    providers: [TodoService],
    styles: [`
        .mdl-card {
            margin-left: 5%;
            margin-top: 20px;
            margin-bottom: 50px;
            width: 90%; 
        }
        .mdl-card__title {
            background-color: aqua;
        }`
    ]
})
export class ToDoComponent {
    public title:string;
    public todoItems:Array<TodoModel>;
    
    constructor(public todoService:TodoService) {
        this.title = "My Todo List";
        this.todoItems = todoService.getAll();
    }
}