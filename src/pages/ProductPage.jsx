import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import RelatedProducts from '../components/product/RelatedProducts';

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="section-container py-24 text-center">
        <h1 className="font-serif text-3xl text-ink">Product not found</h1>
        <Link to="/shop" className="btn-outline mt-6">Back to Shop</Link>
      </div>
    );
  }

  return (
    <main>
      <div className="section-container py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-secondary">
          <Link to="/" className="transition-colors hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="transition-colors hover:text-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <ProductGallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>
      <RelatedProducts currentSlug={product.slug} />
    </main>
  );
};

export default ProductPage;
