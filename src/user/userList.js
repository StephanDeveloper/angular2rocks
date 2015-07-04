if (typeof __decorate !== "function") {
    __decorate = function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
            return Reflect.decorate(decorators, target, key, desc);
        }
        switch (arguments.length) {
            case 2:
                return decorators.reduceRight(function (o, d) {
                    return (d && d(o)) || o;
                }, target);
            case 3:
                return decorators.reduceRight(function (o, d) {
                    return (d && d(target, key)), void 0;
                }, void 0);
            case 4:
                return decorators.reduceRight(function (o, d) {
                    return (d && d(target, key, o)) || o;
                }, desc);
        }
    };
}
if (typeof __metadata !== "function") {
    __metadata = function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
            return Reflect.metadata(k, v);
        }
    };
}
var angular2_1 = require('angular2/angular2');
var UserStore_1 = require('src/user/services/UserStore');
var UserListController = (function () {
  function UserListController(userStore) {
    this.userStore = userStore;
  }

  UserListController.prototype.addUser = function (username) {
    this.userStore.add(username);
  };
  UserListController.prototype.removeUser = function (user) {
    this.userStore.remove(user);
  };
  UserListController.prototype.doneTyping = function ($e) {
    if ($e && $e.which === 13) {
      this.addUser($e.target.value);
      $e.target.value = null;
    }
  };
  UserListController = __decorate([
    angular2_1.Component({
      selector: "userList",
      appInjector: [
        UserStore_1.UserStore
      ],
    }),
    angular2_1.View({
      templateUrl: "src/user/userList.html",
      directives: [angular2_1.NgFor]
    }),
    __metadata('design:paramtypes', [UserStore_1.UserStore])
  ], UserListController);
  return UserListController;
})();
angular2_1.bootstrap(UserListController);
