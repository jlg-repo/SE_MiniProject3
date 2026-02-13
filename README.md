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
  In JavaScript, the `map()` method is an iterative function used to transform an array into a new one by applying a specific operation to every element

```javascript
const doubleASeries = (series) => {
  return series.map((s) => s * 2);
};
console.log(doubleASeries([1, 2, 3, 4]));
// sample output: [ 2, 4, 6, 8 ]
```

- **Why Use map() instead of a for loop?**
  - **Readability:** It clearly signals your intent is to "transform" data, making the code easier for others to follow.

  - **Functional Programming:** It allows for chaining. Since `map()` returns a new array, you can immediately call .filter() or .sort() on the result.

  - **React Integration:** In React, map() is the standard way to convert an array of data into a list of UI components.

- **Common Use Cases:**
  - **Extracting Data:** Getting a list of specific properties (like just names) from an array of objects.

  - **Formatting:** Converting strings to lowercase or numbers to formatted currency.

  - **UI Components:** Wrapping raw data in HTML or JSX tags

- **Filter:**

  In JavaScript, the `filter()` method is used to select specific elements from an array based on a condition you define.

```javascript
const getMeTheOdds = (myList) => {
  return myList.filter((m) => m % 2 !== 0);
};
//note: % stands for modulo operation
console.log(getMeTheOdds([1, 2, 3, 4, 5, 7, 20, 12, 55]));

// sample output: [1, 3, 5, 7, 55];
```

- **Key Characteristics:**
  - **Returns a New Array:** It produces a new array containing only the items that passed the test.
  - **Variable Length:** Unlike map(), the new array is usually shorter than the original.
  - **Non-Mutating:** The original array remains completely untouched.

- **Why use filter()?**
  - **Declarative Logic:** Instead of writing a complex for loop with an if statement and a manual .push(), you simply describe what you want to keep.
  - **Immutability:** In frameworks like React, you should never modify state directly. `filter()` is the perfect way to "delete" an item from a list by creating a new version of the list without that item.

- **Common Use Cases:**
  - **Search Bars:** Filtering a list of products based on what the user typed.

  - **Deleting Items:** Removing a specific ID from an array (e.g., `list.filter(item => item.id !== deletedId))`.

  - **Data Cleanup:** Stripping out null or undefined values from a dataset.

- **Reduce:**

While `map` and `filter` return new arrays, `reduce()` is used to distill an entire array down to a single value (like a sum, a total, or even a single object).

```javascript
const getTotal = (series) => {
  const summation = series.reduce((total, s) => {
    return total + s;
  }, 0);
  return summation;
};

console.log(getTotal([1, 2, 3, 4, 5]));

// output: 15
```

- **Why use reduce()?**
  - **Versatility:** It can technically do anything `map` and `filter` can do.

  - **Efficiency:** It allows you to perform complex calculations in a single pass through the data.

  - **State Management:** In React, the `useReducer hook` is based on this exact pattern to manage complex state transitions.

**D) Spread/Rest Operator:**

- These operators are frequently used to pass props or update state immutably.

- **Spread:**
  - **Combining Arrays:**

    The spread operator provides a concise way to merge two or more arrays without using methods like `concat()`.

    ```javascript
    let fruitBasket1 = ["apples", "oranges", "pears"];
    let fruitBasket2 = ["strawberries", "pineapples", "dates"];

    let largerBasket = [...fruitBasket1, ...fruitBasket2];
    console.log(largerBasket);

    //output: [ 'apples', 'oranges', 'pears', 'strawberries', 'pineapples', 'dates' ]
    ```
