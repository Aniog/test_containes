import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CollectionPage from './pages/CollectionPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="journal" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
