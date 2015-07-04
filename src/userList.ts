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
        <input #username (keyup)="doneTyping($e)"><button (click)="addUser(username.value)">Add User</button>
    `,
    directives: [NgFor]
})

class UserListController {
    users:Array<String>;

    constructor() {
        this.users = ["stephan", "anna", "nordi", "lisa"]
    }

    addUser(user:string) {
        this.users.push(user)
    }

    doneTyping($e) {
        if ($e.which === 13) {
            this.addUser($e.target.value);
            $e.target.value = null;
        }
    }
}

bootstrap(UserListController);