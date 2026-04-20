import React, { useState } from 'react';
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

function AppContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        onCartOpen={() => setCartOpen(true)}
        onSearch={handleSearch}
      />

      <HeroSection onProductClick={setSelectedProduct} />

      <CategoriesSection
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <ProductListing
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onProductClick={setSelectedProduct}
      />

      <TestimonialsSection />

      <NewsletterSection />

      <Footer />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Cart Sidebar */}
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
