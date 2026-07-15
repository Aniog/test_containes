import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = React.useState(false);

  const firstImage = product.images[0];

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-hairline overflow-hidden">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={firstImage.id}
          data-strk-img={`[bestseller-${product.id}-title]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: hovered ? 0 : 1 }}
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          data-strk-img-id={product.hoverImage.id}
          data-strk-img={`[bestseller-${product.id}-title]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        />

        {/* Quick add */}
        <div
          className="absolute bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants[0] || 'gold', 1);
            }}
            className="w-full bg-gold text-white font-sans text-[11px] uppercase tracking-widest py-2.5 hover:bg-gold-hover transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`bestseller-${product.id}-title`}
            className="font-serif text-sm uppercase tracking-widest-plus text-text-primary hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="font-sans text-[11px] text-text-muted">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm font-medium text-text-primary mt-1.5">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-cream">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary">Bestsellers</h2>
          <p className="font-sans text-sm text-text-secondary mt-3 max-w-md mx-auto">
            Our most-loved pieces, chosen by women around the world for their everyday elegance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
