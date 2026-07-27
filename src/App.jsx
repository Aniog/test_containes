import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import HomePage from './pages/Home.jsx';
import ServicesPage from './pages/Services.jsx';
import HowItWorksPage from './pages/HowItWorks.jsx';
import ProductsPage from './pages/Products.jsx';
import CaseStudiesPage from './pages/CaseStudies.jsx';
import BlogPage from './pages/Blog.jsx';
import ContactPage from './pages/Contact.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
