import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="collections" element={<ShopPage />} />
          <Route
            path="about"
            element={
              <div className="pt-20 pb-20 px-4 text-center">
                <h1 className="font-serif text-4xl mb-4">Our Story</h1>
                <p className="text-velmora-gray-500">About page coming soon</p>
              </div>
            }
          />
          <Route
            path="journal"
            element={
              <div className="pt-20 pb-20 px-4 text-center">
                <h1 className="font-serif text-4xl mb-4">Journal</h1>
                <p className="text-velmora-gray-500">Journal page coming soon</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
