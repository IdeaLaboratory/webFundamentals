# webFundamentals
Web Fundamentals is made for beginners and developers from standalone application background.

## Basic html

### Terminology
`<>` Tag

`<html>` element

Container element:

`<html></html>`

`<body></body>`

Empty element:

`<br/>`

`<img src="image.jpg"/>`

|   token  | called as
| ------------- |:-------------
| img    | element
|src     | Attribute
|lotus.jpg     | Attribute value 

|   Symbol  | Remarks
| ------------- |:-------------
| Tr    | Table row
|Th     | Table header
|Td     | Table data  

### Rules:
One root element.
Attribute value should be in double quote.

### Tags

#### `<br> Tag`
The `<a>` tag is anchor tag defines a hyperlink.

#### `<a> Tag`
The `<br>` tag produces a line break in text

#### `<form> Tag`
The `<form>` tag defines an HTML form that contains controls which enable a user to submit information to a web server. An HTML form is used to capture user information such as username, password, address details etc.

#### `<input> Tag`
`<input>` tag is used to create interactive controls within a form.


## HTML 5:
`<!DOCTYPE html>`
`
* Semantic element
* Form
* Media
* Graphics
* API`

#### SemanticElement
A semantic element clearly describes its meaning to both the browser and the developer.
This helps webCrawlers to understand page better and provide better result for search engine optimization.

HTML5 Semantic Elements
```html
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```

#### attribute and video attribute.
#### DataList

# javaScript
Developed by Brendan in Netscape in December 4, 1995.
Initially it was named Mocha, later LiveScript, and finally JavaScript
Developed for client side Scripting, in 10 days he made.
Intention was to make easy scripting language for anyone to use.

It was very forgiving language, interpreter proceed with error as well.

In November 1996, Netscape announced a meeting of the Ecma International standards organization to advance the standardization of JavaScript. First edition of ECMA-262 was adopted by the Ecma General Assembly in June 1997.

### DataTypes
Object, number, undefined, undefined, null.

### Type Coercion
a=10; b="10"; a==b is true;

#### Extra:
Define a method, define a class in a old way.
inherit class with properties
Prototype.newMethod()
inherit pro methods

## ES6
#### Scope:
⋅⋅* Global scope
⋅⋅* Function scope
⋅⋅* Block scope

Let, const = Both let and const are block scope.

Code link:

Note: In ES5, we can declare only one variable in a function scope.
If we define two by any chance, JS will not give any error but the last assign value will be retain..
This called "Features of hoisting".

#### Default arguments:

Fun(a,b,c=0)
Code link:

#### Template literals
Syntax
`string text`
This can contain almost anything in between including multiline.

#### Arrow function
```javascript
hello = () => {
  return "Hello World!";
}
```

#### Class
Note: Function vs Method
Function outside of the class and Method inside of a class.

* Cannot over load function, method or constructor.

##### Base constructor is not call by default, we should call super() to call base constructor.
```javascript
class Demo {
    constructor(id, name) {
        console.log("Constructor of Demo");
        this.id = id;
        this.name = name;
    }
    disp() {
        console.log("Method");
    }
}
class Child extends Demo {
    constructor() {
        super();
        console.log("Const of ChildDemo");
    }
    disp() {
        console.log("Overridden Method");
    }
}
```

### DOM
### BOM
### Ajax
### Css

---
---


Use -webkit/moz/ms if that property is not directly available.
Use web fonts:
fonts.google.com

### Animation:
Transition, KeyFrame.

#### Transition:
transitions allows you to change property values smoothly, over a given duration.
#### KeyFrame:
Define keyframe "@keyframes example {" 
```javascript
position: relative;
```

### Responsiveness:
	1. Meta
	2. FlexBox
	3. Column
    4. MediaQuery

#### Meta:
content="width=device-width, initial-scale=1.0"

#### FlexBox:
flex-container:
flex-wrap: nowrap;

#### @media:
The @media rule is used in media queries to apply different styles for different media types/devices.



# TypeScript
// to be updated

# Angular










#### Define custom pipe
code link:

#### Component
Is for specific task, usually smaller than library. But can use multiple library in a component.

#### Module

##### Library
Pre written code to be reused 

##### Framework
Pre written code, contains multiple library.

#### Platform
It is a running environment.

#### Service
A running process (mostly running somewhere else in the backgound) which serve on client action.
It should have specific architecture.

Service returns 'Promise'. [Observable, ]
```Javascript
Promise -> .then(success,failure)
Observable -> .subscribe(next, error, complete) //prefered

```

#### webService
Has to be on the web, called via http/https.

#### API
Interface to communicate two program (most likely public).

#### REST
PHD research. 
GET 4 read, PUT 4 update, POST 4 create, DELETE 4 delete and PATCH also 4 update.

[use all this to completely, how?]
If I do not use REST and I use WebAPI, I can only get or post not all 5 as Rest.

#### DI : Dependency Injection
```javascript
Emp emp = new Emp();
fun(emp);

fun(Emp emp)	//creates a new reference which points to the same object of Emp();
{

}
```
#### Note: 
```typescript
class Demo{
	a=0;
	constructor(a){
		this.a= a;
	}
}

// in TypeScript
class Demo{
	constructor(private a){
	}
}
```