export class UserStore {
    users:Array<User>;
    uuid:Number;

    constructor() {
        this.users = [];
        this.uuid = 0;
    }

    add(username:string) {
        this.uuid = this.uuid + 1;
        let user = {
            username: username,
            uuid: this.uuid
        };
        this.users.push(user)
    }

    remove(user:any) {
        for (let user of this.users) {
            var i = this.users.indexOf(user);
            if (i > -1) {
                return this.users.splice(i, 1)[0];
            }
        }

        return null;
    }
}