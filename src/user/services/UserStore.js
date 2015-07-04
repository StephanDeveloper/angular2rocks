var UserStore = (function () {
    function UserStore() {
        this.users = [];
        this.uuid = 0;
    }
    UserStore.prototype.add = function (username) {
        this.uuid = this.uuid + 1;
        var user = {
            username: username,
            uuid: this.uuid
        };
        this.users.push(user);
    };
    UserStore.prototype.remove = function (user) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user_1 = _a[_i];
            var i = this.users.indexOf(user_1);
            if (i > -1) {
                return this.users.splice(i, 1)[0];
            }
        }
        return null;
    };
    return UserStore;
})();
exports.UserStore = UserStore;
