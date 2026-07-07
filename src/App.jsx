import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Collections from './pages/Collections';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="collections" element={<Collections />} />
          <Route path="collections/:category" element={<Collections />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
