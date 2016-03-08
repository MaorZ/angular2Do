import {TodoModel} from "./todoModel";
import {Injectable} from "angular2/core";

@Injectable()
export class TodoService{
    todos:Array<TodoModel>;

    constructor() {
        this.todos = [
            {
                id: 1,
                text: 'My first todo!!!',
                completed: false
            },{
                id: 2,
                text: 'My second todo!!!',
                completed: false
            },{
                id: 3,
                text: 'Do something good',
                completed: false
            },{
                id: 4,
                text: 'Do something very good',
                completed: false
            },
        ];
    }
    
    getAll() {
        return this.todos;
    }
}