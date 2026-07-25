import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import ProductCard from '@/components/home/ProductCard';
import { products, categories } from '@/data/products';

const Collections = () => {
  const { id } = useParams();
  const category = categories.find((item) => item.id === id);
  const filtered = category
    ? products.filter((product) => product.category === category.id)
    : products;

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar />
      <CartDrawer />
      <main className="container-editorial py-10 md:py-16">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-brand-muted">
          <Link to="/shop" className="hover:text-brand-ink transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-brand-ink">{category ? category.label : 'All'}</span>
        </div>

        <h1 className="mt-6 section-title">{category ? category.label : 'All Collections'}</h1>
        <p className="mt-2 text-sm text-brand-muted">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </p>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
