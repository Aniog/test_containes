import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import RelatedProducts from '../components/product/RelatedProducts';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>
      <RelatedProducts productId={product.id} />
    </main>
  );
}
