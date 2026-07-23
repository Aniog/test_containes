import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import ProductPDP from './pages/ProductPDP';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collections" element={<Collections />} />
        <Route path="product/:id" element={<ProductPDP />} />
      </Route>
    </Routes>
  );
}

export default App;
