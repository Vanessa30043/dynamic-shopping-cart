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
