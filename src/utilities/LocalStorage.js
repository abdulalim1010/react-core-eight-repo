//1to get something from local storage you will get as it is string
//convert this to javascript object /array
const getCartFromLocalStorage = () => {
  const storegeCartString = localStorage.getItem('cart')
  if (storegeCartString) {
    const storedCart = JSON.parse(storegeCartString);
    return storedCart
  }
  return [];

}
const saveCartTolocalStorage = cart => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
}
const addItemToCartLocalStorage = id => {
  const cart = getCartFromLocalStorage()
  const newCart=[...cart,id]
saveCartTolocalStorage(newCart)
}
export {
  getCartFromLocalStorage as getStoreCart,addItemToCartLocalStorage as addToStorCart
}