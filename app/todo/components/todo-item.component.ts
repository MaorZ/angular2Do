import {Component, Input} from "angular2/core";
import {TodoModel} from "../todoModel";
import {MdlUpgradeDirective} from "../../Directives/mdlUpgrade";

@Component({
    selector: 'a2d-todo-item',
    templateUrl: 'app/todo/components/todo-item.component.html',
    directives: [MdlUpgradeDirective]
})
export class TodoItemComponent {
    @Input() todoItem:TodoModel;
}