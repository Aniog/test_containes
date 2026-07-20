import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { getBestsellers, formatPrice, generateStars } from '@/lib/utils';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const stars = generateStars(product.rating);

  return (
    <div className="group relative">
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velvet-100 aspect-[4/5]">
        <img
          data-strk-img-id={`bestseller-${product.id}-main`}
          data-strk-img={`[bestseller-name-${product.id}] [bestseller-desc-${product.id}] gold jewelry dark background`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
        />
        {/* Second image on hover */}
        <img
          data-strk-img-id={`bestseller-${product.id}-hover`}
          data-strk-img={`[bestseller-name-${product.id}] gold jewelry worn closeup`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} - detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product, product.variants[0].value);
          }}
          className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-velvet-900 py-2.5 text-overline tracking-widest flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </Link>

      {/* Info */}
      <div className="mt-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-product-name text-velvet-900 text-sm hover:text-gilded-700 transition-colors">
            <span id={`bestseller-name-${product.id}`}>{product.name}</span>
          </h3>
        </Link>
        <p id={`bestseller-desc-${product.id}`} className="sr-only">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1.5">
          {[...Array(stars.full)].map((_, i) => (
            <Star key={`full-${i}`} className="w-3 h-3 fill-gilded-500 text-gilded-500" />
          ))}
          {[...Array(stars.half)].map((_, i) => (
            <Star key={`half-${i}`} className="w-3 h-3 fill-gilded-500/50 text-gilded-500" />
          ))}
          <span className="text-xs text-velvet-500 ml-1">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <p className="font-serif text-lg text-velvet-950 mt-1">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter(p => p.bestseller);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-overline text-gilded-600 mb-3">Curated Selection</p>
          <h2 className="text-heading text-velvet-950">Our Bestsellers</h2>
          <p className="text-body text-velvet-500 mt-3 max-w-md mx-auto">
            The pieces our customers love most — timeless designs that sell out again and again.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
