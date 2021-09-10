const inputField = document.getElementById('input-field');
/*
const displayLocalStorageCart = () =>{
    const cart = getCartItem();
    //cart object
    for (const addProduct of cart){
        showItem(addProduct);
    }
}
*/

const addItem = () =>{

    const addProduct = inputField.value;

    if(!addProduct){
        return
    }
   //display te dekhabe
   showItem(addProduct)

   //local storage 
   addProductToCart(addProduct);

   

    //clear input field
    inputField.value = '';


}

const showItem = addProduct => {
    const ul = document.getElementById('products');
    const li = document.createElement('li')
    li.innerText = addProduct;
    ul.appendChild(li);
}
const getCartItem = () => {
    
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
    cartObj = {};
    }
    return cartObj;

}

const addProductToCart = addProduct => {
    const cart =getCartItem();
    /*
    eta jehetu object tai
    cart.addProduct 
    er poriborte
    cart[addProduct] use hoyeche 
    kaj aktai 
    */
    if(cart[addProduct]){     
        cart[addProduct] = cart[addProduct] + 1;
    }
    else{
        cart[addProduct] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const placeOrder =() =>{
    document.getElementById('products').textContent = "";
    localStorage.removeItem('cart');
}

//displayLocalStorageCart();