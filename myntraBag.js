let cartQuantity= 0;
let addCart = document.getElementById('addCart')
let addWishCart = document.getElementById('addWishCart')
let addSaleCart = document.getElementById('addSaleCart')
let removeCart = document.getElementById('removeCart')

addCart.addEventListener('click', function(){
  cartQuantity++;
  updateValue();
})

addWishCart.addEventListener('click', function(){
  cartQuantity--;
  updateValue();
})

addSaleCart.addEventListener('click', function(){
  cartQuantity += 2;
  updateValue();
})

removeCart.addEventListener('click', function(){
  cartQuantity--;
  updateValue();
})

function updateValue(){
  if(cartQuantity >= 0){
  document.getElementById('cart-summary').innerHTML = `Your Bag has ${cartQuantity} items`
}
}