import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
    selector: "userList"
})

@View({
    template: `
        <p>User Lists</p>
        <p>User:</p>
        <ul>
            <li *ng-for="#user of users">{{user}}</li>
        </ul>
    `,
    directives: [NgFor]
})

class UserListController {
    users:Array<String>;

    constructor() {
        this.users = ["stephan", "anna", "nordi", "lisa"]
    }
}

bootstrap(UserListController);