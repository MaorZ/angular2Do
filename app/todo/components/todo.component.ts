import {Component} from 'angular2/core'

@Component({
    selector: 'a2d-todo',
    template: `<h1>{{title}}</h1>`
})
export class ToDoComponent {
    public title:string;
    
    constructor() {
        this.title = "My Todo List";
    }
}