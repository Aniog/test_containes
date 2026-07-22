import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
