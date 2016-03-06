import {Component} from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HomeComponent} from './home/components/home.component'
import {ToDoComponent} from './todo/components/todo.component'

// import { HeroService } from './hero.service';
// import { DashboardComponent } from './dashboard.component';
// import { HeroesComponent } from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'a2d-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS//,
        //HeroService
    ],
    styleUrls: ['app/app.component.css']
})
@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent
    },{
        path: '/todo',
        name: 'Todo',
        component: ToDoComponent
    },{
        path: '/**',
        redirectTo: ['Home']
    }//,
    // {
    //     path: '/heroes',
    //     name: 'Heroes',
    //     component: HeroesComponent
    // }
])
export class AppComponent {
    public currentState:string;
    public navLinks:Array;
    
    constructor() {
        this.currentState = 'Home';
        this.navLinks = [
            {
                name: 'Home',
                label: 'Home'
            },
            {
                name: 'Todo',
                label: 'My ToDo\'s'
            }//,
            // {
            //     name: 'HouseChores',
            //     label: 'My House chores'
            // },
            // {
            //     name: 'Payments',
            //     label: 'My Payments'
            // },
            // {
            //     name: 'WishList',
            //     label: 'My Wish List'
            // }
        ];
    }
}

    