import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function RelatedProducts({ currentProductId, category }) {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { addToCart } = useCart();

  const relatedProducts = products
    .filter(p => p.id !== currentProductId && p.category === category)
    .slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentProductId]);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  if (relatedProducts.length === 0) return null;

  return (
    <section ref={containerRef}>
      <div className="text-center mb-12">
        <h2 className="serif-heading text-3xl md:text-4xl mb-4">You May Also Like</h2>
        <div className="w-16 h-px bg-[#B8860B] mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {relatedProducts.map((product, index) => (
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
                data-strk-img-id={`related-${product.id}-img`}
                data-strk-img={`[${product.id}-desc] [${product.id}-title] [related-products-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-opacity duration-300"
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
            <h3 className="product-name text-sm mb-1">{product.name}</h3>
            <p className="text-sm font-medium">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
