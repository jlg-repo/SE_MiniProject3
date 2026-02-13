# mini-project-03-spring2026-react-beginner

## Week 03

## Topic: React & Component-Based Design

```
 + Introduction to React
     - Components, Props, State,
     - React Hooks
 + Modern CSS frameworks (Tailwind CSS),
 + responsive design principles, and mobile-first development (maybe in next class).

```

## Step 01: More on JavaScript

#### Javascript (ES6)

- ES6 (ECMAScript 2015) was introduced to modernize JavaScript by addressing its limitations and adding features found in other mature programming languages, thereby making it a more powerful, efficient, and maintainable language for building complex, large-scale applications.

- **Key reasons for its introduction include:**
  - **Addressing Language Gaps:** Before ES6, JavaScript lacked crucial features like proper variable scoping, a native module system, and built-in support for object-oriented programming (OOP) classes.

  - **Enhancing Code Readability and Maintainability:** ES6 introduced a more concise and expressive syntax, such as `arrow functions`, `template literals`, and `de-structuring`, which significantly improved the readability and reduced the verbosity of the code.
  - **Improving Asynchronous Programming:** The `Promise API` was introduced to handle asynchronous operations more gracefully
  - **Standardizing Modularity:** The introduction of native `import` and `export` statements solved the problem of organizing code into separate, reusable files, which was a crucial step for developing large, **modular** applications.

  - **Better Variable Management:** The `let` and `const` keywords were added to provide block-scoped variable declarations, resolving the issues and unpredictable behavior associated with the function-scoped `var` keyword.

  - **Enabling Modern Frameworks:** Modern web development frameworks like `React`, `Angular`, and `Vue` rely heavily on the features introduced in ES6, making knowledge of this version essential for contemporary developers.

  - **more:** https://www.w3schools.com/js/js_es6.asp

#### Reviewing/Introducing important Ideas of ES6:

**A) Arrow Functions:**

You may try the following code by first writing them in a .js file (say, `week03.js` and run it by calling `node week03.js` from your command prompt)

- Note: VS Code has command prompt too. You can test it there.

```javascript
// => fat arrow
const sum = (a, b) => a + b;

console.log(sum(3, 2));
```

**B)Arrays and Objects:**

```javascript
// you may have seen this in the last lab
// declare arrays
let good = [10, 20, -50, 300, -18];

//single variable
let allGood = 0;

//iterate through the list/array using a for loop
for (i = 0; i < good.length; i++) {
  allGood += good[i];
}

console.log("All Good: ", allGood);

//declare objects
let p = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
let q = { name: "France", foul: 10, cardY: 2, cardR: 1 };

// an array of objects
let arrObjects = [
  { name: "x", foul: 1 },
  { name: "y", foul: 1 },
  { name: "x", foul: 1 },
  { name: "xxx", foul: 12, img_src: "xx" },
];

arrObjects.push({ name: "d" });
```

**C) Maps, Filter, Reduce: The primary way to render lists of data in React:**

- **Maps:**
  In JavaScript, the map() method is an iterative function used to transform an array into a new one by applying a specific operation to every element

```javascript
const doubleASeries = (series) => {
  return series.map((s, index) => s * 2);
};
console.log(doubleASeries([1, 2, 3, 4]));
// sample output: [ 2, 4, 6, 8 ]
```

- Why Use map() instead of a for loop?
  - **Readability:** It clearly signals your intent is to "transform" data, making the code easier for others to follow.
  - **Functional Programming:** It allows for chaining. Since map() returns a new array, you can immediately call .filter() or .sort() on the result.
  - **React Integration:** In React, map() is the standard way to convert an array of data into a list of UI components.
