import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Collection from './pages/Collection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="collection" element={<Collection />} />
          {/* Catch-all route to redirect back to home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
