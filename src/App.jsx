import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero/HeroSection';
import CategoriesSection from './components/products/CategoriesSection';
import ProductListing from './components/products/ProductListing';
import ProductDetail from './components/products/ProductDetail';
import CartSidebar from './components/cart/CartSidebar';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import { fetchProducts, fetchTestimonials } from './api/db';

function AppContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const [prods, tests] = await Promise.all([fetchProducts(), fetchTestimonials()]);
        setProducts(prods);
        setTestimonials(tests);
      } catch (err) {
        console.error('[App] failed to load data:', err);
        setError(err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSearchQuery('');
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setActiveCategory('all');
    if (query) {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-400 text-sm">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center space-y-3">
          <p className="text-red-400 font-semibold">Failed to load store data</p>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        onCartOpen={() => setCartOpen(true)}
        onSearch={handleSearch}
      />

      <HeroSection products={products} onProductClick={setSelectedProduct} />

      <CategoriesSection
        products={products}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <ProductListing
        products={products}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onProductClick={setSelectedProduct}
      />

      <TestimonialsSection testimonials={testimonials} />

      <NewsletterSection />

      <Footer />

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
