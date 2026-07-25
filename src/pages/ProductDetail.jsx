import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-text mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar />
      <CartDrawer />
      <main className="pt-24 md:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-xs uppercase tracking-widest text-brand-subtle">
            <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-brand-text">{product.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <ProductGallery images={product.images} name={product.name} />
            <ProductInfo product={product} />
          </div>
        </div>
        <RelatedProducts currentId={product.id} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
