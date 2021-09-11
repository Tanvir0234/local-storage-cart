const inputField = document.getElementById('input-field');
//Etar kaj ki bujtesi na 
/*
const displayLocalStorageCart = () =>{
    const cart = getCartItem();
    //cart object
    for (const itemName of cart){
        showItem(itemName);
    }
}
*/

const addItem = () =>{

    const itemName = inputField.value;

    if(!itemName){
        return
    }
   //display te dekhabe
   showItem(itemName)

   //local storage 
   addProductToCart(itemName);

   

    //clear input field
    inputField.value = '';


}

const showItem = itemName => {
    const ul = document.getElementById('products');
    const li = document.createElement('li')
    li.innerText = itemName;
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

const addProductToCart = itemName => {
    const cart =getCartItem();
    /*
    eta jehetu object tai
    cart.itemName 
    er poriborte
    cart[itemName] use hoyeche 
    kaj aktai 
    */
    if(cart[itemName]){     
        cart[itemName] = cart[itemName] + 1;
    }
    else{
        cart[itemName] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const placeOrder =() =>{
    document.getElementById('products').textContent = "";
    localStorage.removeItem('cart');
}

//displayLocalStorageCart();