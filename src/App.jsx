import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import './App.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
