const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
const removeButton = document.getElementById('remove-product'); 
let totalPrice = 0;
 
/*addProductButton.addEventListener('click',( ) =>{
  let productName = productNameInput.value;
  let productPrice = productPriceInput.value;
  console.log(productName,productPrice)
  const li= document.createElement("li")
  li.textContent = `${productName}- $${productPrice}`

//create a button give it text and append it to li


  cart.append(li)
})`````
*/



// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += Number(amount);
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
} 

// Get references to DOM elements
// ref: mdn web docs // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

// Function to update total price
// ref: mdn web docs // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

//from the assignments
// ref: mdn web docs // https://developer.mozilla.org/en-US/docs/Web/API/Event/target
 // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 // https://developer.mozilla.org/en-US/docs/Web/API/Node/remove
 // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
// Function to remove an item
 function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
// i  added a product to the cart // main function
// ref: mdn web docs // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
// i  added a product to the cart // ref: mdn web docs // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function addProduct() { // main function
  const name = productNameInput.value; // get product name
  const price = Number(productPriceInput.value); // convert string to number
  // input validation // if name is empty string or price is not a number
  // we alert the user and return early// return
  //https://www.shecodes.io/athena/549-how-to-use-an-alert-prompt-with-the-if-statement-in-javascript
  // https://stackoverflow.com/questions/24449471/javascript-alert-when-customer-fill-in-the-wrong-price
  // name validation // if name is empty string
  // ref: mdn web docs // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
  //
  if (name === "") {
    alert("Put product name");
    return;
  }
  // price validation // if price is NaN or less than or equal to 0
  if (!price) {
    alert("Need a valid price.");
    return;
  }
  // Create list item // li element// ref : mdn web docs // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 // https://developer.mozilla.org/en-US/docs/Web/API/Element/dataset
  const item = document.createElement("li");
  item.className = "cart-item";
  item.dataset.price = price;
  item.innerHTML = name + " — $" + price.toFixed(2); // toFixed(2) method to format number to 2 decimal places
// we create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
item.appendChild(removeBtn);
// we add item to cart
  cart.appendChild(item); // add item to cart
  updateTotalPrice(price); // update total price
  productNameInput.value = ""; // clear input fields
  productPriceInput.value = ""; // clear input fields
  productNameInput.focus();// set focus back to product name input
  // When user clicks "Remove" button // we call removeItem function
  removeBtn.onclick = removeItem;
}
// When user clicks "Add Product" button // we call addProduct function // ref: mdn web docs // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onclick
addProductButton.onclick = addProduct; // we call addProduct function
// When user clicks "Remove" button // we call removeItem function

/*MDN Web DocsMDN Web Docs
Document: getElementById() method - Web APIs | MDN
The getElementById() method of the Document interface returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

/*MDN Web DocsMDN Web Docs
Document Object Model (DOM) - Web APIs | MDN
The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

MDN Web DocsMDN Web Docs
Number.prototype.toFixed() - JavaScript | MDN
The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places. (24 kB)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

MDN Web DocsMDN Web Docs
Event: target property - Web APIs | MDN
The read-only target property of the
Event interface is a reference to the object onto which the event was
dispatched. It is different from Event.currentTarget when the event
handler is called during the bubbling or capturing phase of the event. (24 kB)
https://developer.mozilla.org/en-US/docs/Web/API/Event/target

MDN Web DocsMDN Web Docs
Element: closest() method - Web APIs | MDN
The closest() method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector. (24 kB)*/
