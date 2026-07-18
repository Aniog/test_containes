import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl mb-4">Bestsellers</h2>
          <div className="w-16 h-px bg-[#B8860B] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/5] bg-[#E8E2DA] rounded-sm overflow-hidden mb-4">
                <img
                  alt={product.name}
                  data-strk-img-id={`bestseller-${product.id}-img1`}
                  data-strk-img={`[${product.id}-desc] [${product.id}-title] [bestsellers-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <img
                  alt={product.name}
                  data-strk-img-id={`bestseller-${product.id}-img2`}
                  data-strk-img={`[${product.id}-detail] [${product.id}-title] [bestsellers-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className={`absolute bottom-4 left-4 right-4 bg-white/95 text-[#1A1A1A] py-3 text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
              <h3 id={`${product.id}-title`} className="product-name text-sm mb-1">
                {product.name}
              </h3>
              <p id={`${product.id}-desc`} className="text-xs text-[#6B6560] mb-2">
                {product.description}
              </p>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-3 h-3 fill-[#D4A853] text-[#D4A853]" />
                <span className="text-xs">{product.rating}</span>
                <span className="text-xs text-[#6B6560]">({product.reviews})</span>
              </div>
              <p className="text-sm font-medium">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
