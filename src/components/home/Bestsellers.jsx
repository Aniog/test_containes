import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem, openCart } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id: product.id, name: product.name, price: product.price, variant: product.variants[0] });
    setAddedId(product.id);
    openCart();
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="font-sans text-xs tracking-widest uppercase text-taupe text-center mb-3">
          Most Loved
        </p>
        <h2 className="serif-heading text-3xl md:text-4xl text-center text-espresso mb-14">
          Bestsellers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <div className="relative aspect-[3/4] bg-sand rounded-sm overflow-hidden mb-4">
                <img
                  alt={product.name}
                  data-strk-img-id={`bestseller-${product.id}-primary`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="w-full h-full object-cover absolute inset-0"
                />
                {/* Hover second image */}
                <img
                  alt={`${product.name} alternate`}
                  data-strk-img-id={`bestseller-${product.id}-hover`}
                  data-strk-img={`[${product.titleId}] model wearing gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Quick add button */}
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className={`absolute bottom-3 left-3 right-3 py-2.5 bg-cream/95 backdrop-blur-sm text-espresso font-sans text-[11px] tracking-wider uppercase transition-all duration-300 ${
                    hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <ShoppingBag className="w-3 h-3" />
                    {addedId === product.id ? 'Added!' : 'Add to Cart'}
                  </span>
                </button>
              </div>

              {/* Product info */}
              <p id={product.titleId} className="product-name mb-1">{product.name}</p>
              <div className="flex items-center justify-between">
                <span className="product-price">${product.price}</span>
                <span className="flex items-center gap-1 text-[11px] text-taupe font-sans">
                  <Star className="w-3 h-3 fill-warmgold text-warmgold" />
                  {product.rating}
                </span>
              </div>
              <p id={product.descId} className="sr-only">{product.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
