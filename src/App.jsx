import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'sonner';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="bottom-right" richColors />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
