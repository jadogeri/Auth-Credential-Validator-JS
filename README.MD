## **Auth Credential Validator JS**

**Version:** 1.0.0
**Date:** June 2, 2025

---

## Description

This is a javascript npm package for both frontend and Backend Application (Express + Node + Mongoose) which validate credentials (username, email password) using dynamic regex field.

## Authors

[@jadogeri](https://www.github.com/jadogeri)

## Repository

 [https://github.com/jadogeri/Auth-Credential-Validator-JS.git](https://github.com/jadogeri/Auth-Credential-Validator-JS.git)

 ## Registory

 [npm](https://www.npmjs.com/package/auth-credential-validator-js)


## Screenshots

| ![Screenshot 1](assets/images/screenshot1.png) | ![screenshot 2](assets/images/screenshot2.png) |
| -------------------------------------------- | -------------------------------------------- |
|                                              |                                              |

## Table of Contents

<ul>
      <li><a href="#1-introduction">1. Introduction</a>
        <ul>
          <li><a href="#11-purpose">1.1 Purpose</a> </li>
          <li><a href="#12-scope">1.2 Scope</a> </li>
          <li><a href="#13-intended-audience">1.3 Intended Audience</a> </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li><a href="#2-technology-stack">2. Technology Stack</a>
      </li>
    </ul>
    <ul>
      <li><a href="#3-data-design">3. Data Design</a>
        <ul>
          <li><a href="#31-data-entities-and-relationships">3.1 Entities and Relationships</a> </li>
        </ul>
      </li>
    </ul> 
    <ul>
        <li><a href="#4-usage">4. Usage</a> </li>
        <ul>
            <li><a href="#41-install-dependency">4.1 Install Dependency</a> </li>
            <li><a href="#42-code-snippet">4.2 Code Snippet</a> </li>
        </ul>
    </ul> 
    <ul>
        <li><a href="#5-tests-">5. Tests</a> </li>
        <ul>
            <li><a href="#51-test-from-node_modules">5.1 Test from node_modules</a> </li>
            <li><a href="#52-test-from-npm-link">5.2 Test from npm link</a> </li>
        </ul>
    </ul> 
    <ul>  
        <li><a href="#6-license">6. License</a>
        </li>
    </ul> 
    <ul> 
        <li><a href="#7-references">7. References</a>
        </li>
    <ul>

## **1. Introduction**

### **1.1 Purpose**

This document outlines the system architecture, components, and design considerations for Contact Management App. The goal is to provide a template for backend developers to handle CRUD operations and authentication flow.

### **1.2 Scope**

This package will allow users to:

- Accept valid credentials (username, email and password).
- Resolve undefined and undefined values as inputs.
- Provide security to user data.

### **1.3 Intended Audience**

- Junior or Senior backend developers.
- beginners learning typescript.

---

### **2. Technology Stack**

- **Programming Languages**: Javascript
- **IDE**: Visual Studio Code (VSCode)
- **Test**: Jest
- **Plugins**: Early AI
- **Hosting**: Render.com
- **Source Control**: Git and GitHub
- **CI/CD**: GitHub Actions
- **Code Analsis**: SonarQube

## **3. Data Design**

### **3.1 Data Entities and Relationships**

| Entity | Description                                          |
| ------ | ---------------------------------------------------- |
| CREDENTIAL   | User account information used to authenticate users. |
| VALIDATOR  | Validates authentication information of Users.           |

---

## **4. Usage**

### 4.1 install dependency ###

1 Type npm install auth-credential-validator-js install dependencies.

```bash
  npm install auth-credential-validator-js
```
### 4.2 code snippet ###

```ruby

import Validator from "auth-credential-validator-js"
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

```


## 5. Tests  ##

#### **5.1 Test from node_modules**

1 navigate to auth-credential-validator-js directory using command below

```bash
  cd node_modeles/auth-credential-validator-js  
```

2 type npm run test to run unit tests

```bash
  npm run test
```

![](assets/images/testusingjest.png)


#### **5.2 Test from npm link**

Note : this test was done pre publish to npm manager

1 In the root of package run npm link to create symblink globally accessible

```bash
  npm link
```

![](assets/images/npmlink.png)


2 Create a new directory, copy script.js in Auth-Credential-Validator-JS root directory to new folder.

3 Run command nom link Auth-Credential-Validator-JS to install node with created package

![](assets/images/afternpmlink.png)

3 Type node script.js to test package

```bash
  code script.js
```

![](assets/images/testusingnpmlink.png)

## **6. License**

[LICENSE](/LICENSE)

---

## **7. References**

* FreeCodeCamp : [Frontend Web Development: (HTML, CSS, JavaScript, TypeScript, React)](https://www.youtube.com/watch?v=MsnQ5uepIa).
* AweSome Open Source : [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
* Readme.so : [The easiest way to create a README](https://readme.so/)
* Mockingoose : [How to test mongoose models with jest and mockingoose](https://dev.to/darkmavis1980/how-to-test-mongoose-models-with-jest-and-mockingoose-2k10)

