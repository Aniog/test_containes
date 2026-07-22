import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Journal from "@/pages/Journal";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route
          path="*"
          element={
            <div className="pt-32 text-center px-4">
              <h1 className="font-serif text-3xl mb-4">Page not found</h1>
              <p className="text-velmora-taupe">
                The page you are looking for does not exist.
              </p>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
