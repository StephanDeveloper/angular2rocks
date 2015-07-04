import {Component, View, bootstrap, NgFor, Inject} from 'angular2/angular2';
import {UserStore} from 'src/user/services/UserStore';

@Component({
    selector: "userList",
    appInjector: [
        UserStore
    ],
})

@View({
    templateUrl: "src/user/userList.html",
    directives: [NgFor]
})

class UserListController {
    userStore:UserStore;

    constructor(userStore:UserStore) {
        this.userStore = userStore;
    }

    addUser(username) {
        this.userStore.add(username);
    }

    removeUser(user) {
        this.userStore.remove(user);
    }

    doneTyping($e) {
        if ($e && $e.which === 13) {
            this.addUser($e.target.value);
            $e.target.value = null;
        }
    }
}

bootstrap(UserListController);