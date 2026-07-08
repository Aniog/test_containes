import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const cardRef = useRef(null);

  return (
    <article
      ref={cardRef}
      className="group relative bg-bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-bg-elevated">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover image overlay */}
        <img
          data-strk-img-id={product.imgIdHover}
          data-strk-img={`[${product.descId}] [${product.titleId}] detail close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full bg-bg-dark/90 backdrop-blur-sm text-text-inverse text-xs uppercase tracking-wider font-medium py-2.5 hover:bg-bg-accent transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-sm text-text hover:text-text-accent transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-text-accent font-medium mt-1">${product.price}</p>
      </div>
    </article>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-text mb-3">
            Bestsellers
          </h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Our most loved pieces, chosen by women who appreciate the beauty of fine craftsmanship.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/collection" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
