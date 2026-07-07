import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductDetail from '../components/product/ProductDetail';
import RelatedProducts from '../components/product/RelatedProducts';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="section-padding text-center">
        <h2 className="serif-heading text-3xl mb-4">Product Not Found</h2>
        <p className="text-[var(--velmora-text-muted)]">The piece you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <main>
      <ProductDetail product={product} />
      <RelatedProducts currentProductId={product.id} category={product.category} />
    </main>
  );
}
