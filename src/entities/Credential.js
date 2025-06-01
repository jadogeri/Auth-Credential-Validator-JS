/**
 * @author      Joseph Adogeri
 * @since       31-MAY-2025
 * @version     1.0.0
 * @description class representing user credentials
 *  
 */

export class Credential {
    constructor(username ="", email = "", password = ""){
        this.username = username;
        this.email = email;
        this.password = password;
    }
 
    /**
     * Retrieves the email address of the current object.
     * @returns {string} The email address.
     * @throws {TypeError} If the email is not a string.
     */    
    getEmail(){
        return this.email
    }

    /**
     * Retrieves the username of the current instance.
     * @returns {string} The username associated with the instance.
     * @throws {undefined} If the username is not set, returns undefined.
     */    
    getUsername(){
        return this.username
    }

    /**
     * Retrieves the stored password for the current instance.
     * 
     * @returns {string} The password associated with the instance.
     * @throws {undefined} If the password is not set, returns undefined.
    */    
    getPassword(){
        return this.password
    }

    /**
     * Generates a secure password based on specified criteria.
     * @param {number} length - The desired length of the password.
     * @param {boolean} includeSpecialChars - Whether to include special characters.
     * @returns {string} The generated password.
     * @throws {Error} If the length is less than 8 or greater than 128.
     */    
    setEmail(email){
        if(email == undefined || email == null){
            this.email = "";
        }else{
            this.email = email;
        }
    }

    /**
     * Sets the username for the current instance.
     * @param {string} username - The new username to be set.
     * @returns {void} - This function does not return a value.
     * @throws {TypeError} - Throws an error if the username is not a string.
     */    
    setUsername(username){

        if(username == undefined || username == null){
            this.username = "";
        }else{
            this.username = username;
        }
    }

    /**
     * Sets the user's password to the provided value.
     * @param {string} password - The new password to be set.
     * @returns {void}
     * @throws {TypeError} If the password is not a string.
     */    
    setPassword(password){
        if(password == undefined || password == null){
            this.password = "";
        }else{
            this.password = password;
        }
    }
}

