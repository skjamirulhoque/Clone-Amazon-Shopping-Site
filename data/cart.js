//get deleted item from the local storage
export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 5
    }
  ] //In this cart array Store the product Id and the quantity from product.js file
}

//use local storage to save the deleted data
function saveTostorge(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function AddToCart(productId) {
  //This function fetch the data from the min site and save into the ad to cart section.
  let matchingItem;
  cart.forEach((item) => {
    if (productId == item.productId) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      //productName:productName,
      quantity: 1,
    });
  }
  saveTostorge();
}

export function removefromCart(productId){
  const newCart = [];
  cart.forEach((cartItem)=>{
    if(cartItem.productId!==productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveTostorge();
  
}
