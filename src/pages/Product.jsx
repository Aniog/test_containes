import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductAccordion from '@/components/product/ProductAccordion';
import RelatedProducts from '@/components/product/RelatedProducts';
import { products } from '@/data/products';

const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-bg">
        <Navbar />
        <CartDrawer />
        <main className="container-editorial py-24 text-center">
          <p className="font-serif text-2xl text-brand-ink">Product not found</p>
          <Link to="/shop" className="mt-4 inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-ink">
            <ArrowLeft className="h-4 w-4" />
            Back to shop
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar />
      <CartDrawer />
      <main>
        <div className="container-editorial py-10 md:py-16">
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-muted hover:text-brand-ink">
            <ArrowLeft className="h-4 w-4" />
            Back to shop
          </Link>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ProductGallery images={product.images} material={product.material} />
            <ProductInfo product={product} />
          </div>

          <ProductAccordion product={product} />
        </div>

        <RelatedProducts currentId={product.id} />
      </main>
      <Footer />
    </div>
  );
};

export default Product;
