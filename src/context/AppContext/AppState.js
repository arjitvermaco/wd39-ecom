import { useState } from "react";
import AppContext from "./AppContext";
import toast from "react-hot-toast";
export default function AppState({ children }) {
  let appName = "My New Ecommerce";
  let currentYear = 2023;
  let [cartItems, setCartItems] = useState([]);

  let addProductToCart = (product) => {
    // console.log(product)
    // setCartItems([...cartItems,product])
    // toast.success("Product Added Successfully")
    const exisitingProduct = cartItems.find((p) => p.id === product.id);
    if (exisitingProduct) {
      const updatedCart = cartItems.map((p) =>
        p.id === product.id ? { ...p, quantity: Number(p.quantity) + 1 } : p
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  let handleQuantityChange = (productId,newQuantity)=>{
    const updatedCart = cartItems.map(product=>
    product.id === productId? {...product,quantity:newQuantity}:product
        )
    setCartItems(updatedCart)
    toast.success("Product Quantity Changed")
  }

  let removeProductFromCart = (product) => {
    let updatedCartItems = cartItems.filter((item) => {
      return item.id !== product.id;
    });
    setCartItems(updatedCartItems);
    toast.success("Item Removed From Cart");
  };

  function greetUser() {
    console.log("Hey!! How are you??");
  }
  return (
    <AppContext.Provider
      value={{
        appName,
        cartItems,
        currentYear,
        greetUser,
        addProductToCart,
        removeProductFromCart,
        handleQuantityChange
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
