import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-hairline/30 aspect-[3/4]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-strk-img-id={product.imageId}
          data-strk-img={`[product-name-${product.id}] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        {/* Hover overlay with quick add */}
        <div className={`absolute inset-0 bg-charcoal/20 flex items-end justify-center pb-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants[0]?.value);
            }}
            className="bg-white text-charcoal px-6 py-2.5 text-xs font-medium tracking-ultra-wide uppercase flex items-center gap-2 hover:bg-accent hover:text-white transition-colors duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-white text-charcoal text-[10px] font-medium tracking-wide uppercase px-2 py-1">
            New
          </span>
        )}
      </Link>
      <div className="mt-4 text-center">
        <h3 id={`product-name-${product.id}`} className="font-serif text-sm uppercase tracking-ultra-wide text-charcoal">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1.5 mt-1.5">
          <Star className="w-3.5 h-3.5 fill-accent text-accent" />
          <span className="text-xs text-warm-gray">{product.rating}</span>
          <span className="text-xs text-light-gray">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium mt-1.5 text-charcoal">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-warm-gray">Our most loved pieces, chosen by you.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
