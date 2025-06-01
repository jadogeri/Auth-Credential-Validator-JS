export class Validator {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    static default(){
        new Credential("","","");

    }
    getEmail(){
        return this.email
    }

    getUsername(){
        return this.username
    }

    getPassword(){
        return this.password
    }

    setEmail(email){
        this.email = email;
    }

    setUsername(username){
        this.username = username;
    }

    setPassword(password){
        this.password = password;
    }
}

