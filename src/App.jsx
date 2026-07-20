import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout.jsx";
import { StorefrontProvider } from "./hooks/useStorefront.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <StorefrontProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </StorefrontProvider>
    </BrowserRouter>
  );
}

export default App;
