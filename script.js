import Validator from "auth_credential_validator_js"
const validator = new Validator("jose mourinho","jose mpurinho@gmailcom","rtw5wwvw+-*/twrt");

console.log("*********** Testing Package before publish using npm link***********\n\n");
console.log("validator Object : ",validator);
console.log("validator Credentials : ",validator.getCredential());
console.log("validate email :" ,validator.validateEmail());
console.log("validate username :" ,validator.validateUsername());
console.log("validate password :" ,validator.validatePassword());

validator.credential.setEmail("joseMourinho@gmail.com");
validator.credential.setUsername("Josemourinho");
validator.credential.setPassword("Mourinho!trebl3");

console.log("\n\n*********** test new credentials***********\n\n");

console.log("validate email :" ,validator.validateEmail());
console.log("validate username :" ,validator.validateUsername());
console.log("validate password :" ,validator.validatePassword());
