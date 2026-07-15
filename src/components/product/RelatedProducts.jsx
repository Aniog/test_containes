import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const { addItem, openCart } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id: product.id, name: product.name, price: product.price, variant: product.variants[0] });
    openCart();
  };

  if (related.length === 0) return null;

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="serif-heading text-2xl md:text-3xl text-center text-espresso mb-10">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] bg-stone rounded-sm overflow-hidden mb-3">
                <img
                  alt={product.name}
                  data-strk-img-id={`related-${product.id}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className={`absolute bottom-2 left-2 right-2 py-2 bg-cream/95 text-espresso font-sans text-[10px] tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <ShoppingBag className="w-3 h-3" />
                  Quick Add
                </button>
              </div>
              <p className="product-name text-xs mb-1">{product.name}</p>
              <div className="flex items-center justify-between">
                <span className="product-price text-xs">${product.price}</span>
                <span className="flex items-center gap-1 text-[10px] text-taupe font-sans">
                  <Star className="w-2.5 h-2.5 fill-warmgold text-warmgold" />
                  {product.rating}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
