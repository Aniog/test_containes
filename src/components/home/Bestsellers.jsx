import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-stone-pale overflow-hidden mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-charcoal text-ivory text-[9px] uppercase tracking-widest font-sans px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-gold text-charcoal text-[9px] uppercase tracking-widest font-sans px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-charcoal/90 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-widest font-sans py-3 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors duration-200"
          >
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <p
          id={product.titleId}
          className="font-serif text-xs uppercase tracking-widest text-charcoal group-hover:text-gold transition-colors duration-300"
        >
          {product.name}
        </p>
        <p id={product.descId} className="text-xs text-stone font-sans">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-sans text-sm text-charcoal font-medium">${product.price}</p>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-2.5 h-2.5 ${
                    i < Math.floor(product.rating)
                      ? 'text-gold fill-gold'
                      : 'text-stone-light'
                  }`}
                  strokeWidth={0}
                />
              ))}
            </div>
            <span className="text-[10px] text-stone font-sans">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">
            Our Favourites
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-widest font-sans text-charcoal border border-charcoal px-10 py-3.5 hover:bg-charcoal hover:text-ivory transition-all duration-300"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
