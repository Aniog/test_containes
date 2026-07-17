import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import ShopPage from "./pages/ShopPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/product/:id"} element={<ProductDetail />} />
            <Route path={"/shop"} element={<ShopPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
