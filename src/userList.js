if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var UserListController = (function () {
    function UserListController() {
        this.users = ["stephan", "anna", "nordi", "lisa"];
    }
    UserListController.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserListController.prototype.doneTyping = function ($e) {
        if ($e.which === 13) {
            this.addUser($e.target.value);
            $e.target.value = null;
        }
    };
    UserListController = __decorate([
        angular2_1.Component({
            selector: "userList"
        }),
        angular2_1.View({
            template: "\n        <p>User Lists</p>\n        <p>User:</p>\n        <ul>\n            <li *ng-for=\"#user of users\">{{user}}</li>\n        </ul>\n        <input #username (keyup)=\"doneTyping($e)\"><button (click)=\"addUser(username.value)\">Add User</button>\n    ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], UserListController);
    return UserListController;
})();
angular2_1.bootstrap(UserListController);
