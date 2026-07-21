import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Journal from './pages/Journal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Collection />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="journal" element={<Journal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
