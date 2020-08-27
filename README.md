# JavaScript 1 - Module 3

## Lesson Tasks 2 Questions

### Question 1

Give the below function's `name` parameter a default value of `"John"`

```js
function greet(name) {
  return `Hello ${name}!`;
}
```

### Question 2

Creating a reusable function that accepts two parameters, then returns a dynamic HTML \<div> element.  
The \<div> it creates should insert one of the parameters as a class, and the other as the actual value. Similar to the below HTML

```html
<div class="class">value</div>
```

### Question 3:

Convert the below API call to use the try-catch-finally statement. You can either call the `getFact()` function inside the try block, or move the API call inside and remove the function itself.

```js
async function getFact() {
  const response = await fetch("https://cat-fact.herokuapp.com/facts");
  const results = await response.json();
  const facts = results.all;
  console.log(facts[8].text);
}
```
