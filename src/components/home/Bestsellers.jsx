import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const bestsellers = products.filter((p) => p.isBestseller);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants.find((v) => v.inStock) || product.variants[0];
    addItem(product, defaultVariant.id);
  };

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="container-site">
        <h2 className="section-heading text-3xl md:text-4xl text-velvet-950 text-center mb-2">
          Bestsellers
        </h2>
        <p className="text-sm text-velvet-500 text-center font-sans font-light mb-12 md:mb-16">
          The pieces our community loves most
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product image */}
              <div className="relative aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden mb-4">
                <img
                  alt={product.name}
                  data-strk-img-id={`bestseller-${product.id}-a7f1`}
                  data-strk-img={`[bestseller-name-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Quick add button */}
                <div className={`absolute bottom-3 right-3 transition-all duration-300 ${hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-9 h-9 bg-velvet-950 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-velvet-800 transition-colors"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <p id={`bestseller-name-${product.id}`} className="product-name text-xs md:text-sm text-velvet-900">
                {product.name}
              </p>
              <div className="flex items-center gap-1 mt-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-velvet-300'}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-velvet-500 font-sans ml-1">
                  ({product.reviewCount})
                </span>
              </div>
              <p className="text-sm font-sans font-medium text-velvet-900 mt-1">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
