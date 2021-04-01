class User{
    constructor(username, name, email) {
        this.username = username;
        this.name = name;
        this.email = email;
    }

    getUserName() {
        return this.username;
    }

    updateUserName(name) {
        this.name = name;
    }
}

let user = new User('John', 'Smith', 'john@gmail.com')
user.updateUserName('Harry')
const name = user.getUserName()
