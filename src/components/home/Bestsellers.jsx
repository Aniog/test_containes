import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import { products } from '@/data/products';
import { ShoppingBag } from 'lucide-react';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
          {/* Main image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.titleId}] gold jewelry worn close up detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.tags.includes('bestseller') && (
              <span className="font-sans text-xs tracking-widest uppercase bg-gold text-white-warm px-2 py-0.5">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="font-sans text-xs tracking-widest uppercase bg-charcoal text-white-warm px-2 py-0.5">
                New
              </span>
            )}
          </div>

          {/* Quick add button */}
          <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <button
              onClick={handleAdd}
              className="w-full bg-charcoal/90 text-white-warm font-sans text-xs tracking-widest uppercase py-3 hover:bg-gold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3 h-3" />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="space-y-1.5">
          <p id={product.titleId} className="product-name text-xs text-charcoal group-hover:text-gold transition-colors duration-200">
            {product.name}
          </p>
          <p id={product.descId} className="font-sans text-xs text-muted-warm">
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-serif text-base text-charcoal">${product.price}</span>
            <div className="flex items-center gap-1">
              <StarRating rating={product.rating} />
              <span className="font-sans text-xs text-muted-warm">({product.reviewCount})</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase text-muted-warm hover:text-gold transition-colors duration-200 border-b border-divider hover:border-gold pb-1"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
