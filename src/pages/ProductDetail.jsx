import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-dark mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-brand-gold hover:text-brand-gold-dark transition-colors text-sm tracking-widest uppercase font-sans">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-brand-bg pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-sm text-brand-muted hover:text-brand-gold transition-colors font-sans mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <ProductGallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </main>
  );
}