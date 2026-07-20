import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';

// Placeholder components for routing
const About = () => <div className="pt-24 min-h-screen text-center"><h1 className="text-4xl mt-12">About (Coming Soon)</h1></div>;
const Journal = () => <div className="pt-24 min-h-screen text-center"><h1 className="text-4xl mt-12">Journal (Coming Soon)</h1></div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
