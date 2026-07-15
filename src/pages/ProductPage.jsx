import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="velmora-heading text-3xl text-[var(--velmora-text)] mb-4">Product Not Found</h1>
        <Link to="/shop" className="velmora-btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-xs text-[var(--velmora-text-muted)]">
          <Link to="/" className="hover:text-[var(--velmora-text)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[var(--velmora-text)] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--velmora-text)]">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 sm:py-24 bg-[var(--velmora-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="velmora-heading text-3xl text-[var(--velmora-text)]">
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-[var(--velmora-accent)] mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/product/${related.id}`}
                  className="product-card group"
                >
                  <div className="relative aspect-[3/4] bg-[var(--velmora-border)] overflow-hidden mb-4">
                    <img
                      src={related.images.primary}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="velmora-heading-uppercase text-xs tracking-wider text-[var(--velmora-text)] truncate">
                    {related.name}
                  </h3>
                  <p className="text-sm font-medium mt-1">${related.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
