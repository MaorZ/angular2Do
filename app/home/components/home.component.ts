import {Component} from "angular2/core";

@Component({
    selector: 'a2d-home',
    templateUrl: 'app/home/components/home.component.html'
})
export class HomeComponent {
    public homeTitle:string;

    constructor() {
        this.homeTitle = "This is my home page!!!";
    }
}