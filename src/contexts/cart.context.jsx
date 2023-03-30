
import { useState, createContext } from "react";


const addCartItem = (cartItems, productToAdd) = {
   
}

export const CartContext = createContext({
  isCartOpen: false, 
  setIsCartOpen: () => {},
  cartItems: [],
  addItem: () => {}

});


export const CartProvider = ({ children }) => {
const [isCartOpen, setIsCartOpen] = useState(false);
const [cartItems, setCartItems] = useState([]);

const addItemToCart = (productToAdd) => {}

const value = { isCartOpen, setIsCartOpen};

  return (
    <CartContext.Provider value={value}> {children}</CartContext.Provider>
  );
};