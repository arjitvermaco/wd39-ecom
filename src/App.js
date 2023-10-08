import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import CartComponent from "./components/CartComponent";
import { useState } from "react";
import WishlistComponent from "./components/WishlistComponent";
import { Toaster } from "react-hot-toast";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  return (
    <>
    <Toaster/>
      <CartComponent openCart={openCart} setOpenCart={setOpenCart} />
      <WishlistComponent
        openWishList={openWishList}
        setOpenWishList={setOpenWishList}
      />
      <HeaderComponent
        setOpenCart={setOpenCart}
        setOpenWishList={setOpenWishList}
      />

      <div className="pt-20">
        <Routes>
          <Route index exact element={<HomePage />} />
          <Route path="category/:id" element={<CategoryPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
