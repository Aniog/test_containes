import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.variants[0]?.value || 'gold';
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant,
      quantity: 1,
    });
  };

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-deep-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="section-subheading">CUSTOMER FAVORITES</p>
          <h2 className="section-heading mt-2">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group block"
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative overflow-hidden bg-cream-100 rounded-sm aspect-[3/4] mb-4">
                <img
                  data-strk-img-id={`bs-${product.id}-primary`}
                  data-strk-img={`[bs-name-${product.id}] fine gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hovered === product.id ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                  }`}
                />
                <img
                  data-strk-img-id={`bs-${product.id}-hover`}
                  data-strk-img={`[bs-name-${product.id}] jewelry worn model`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    hovered === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />

                {/* Quick add */}
                <button
                  onClick={(e) => handleAdd(e, product)}
                  className={`absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5 transition-all duration-300 ${
                    hovered === product.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5 mr-2" />
                  ADD TO BAG
                </button>
              </div>

              <span className="product-name block text-deep-900" id={`bs-name-${product.id}`}>
                {product.name}
              </span>

              <div className="flex items-center gap-2 mt-1">
                <span className="price-text">${product.price}</span>
                <span className="text-deep-300">·</span>
                <div className="flex items-center gap-0.5">
                  <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                  <span className="text-xs text-deep-500">{product.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
