import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Rating from '@/components/ui/Rating';

const RelatedProducts = ({ currentProductId }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart();
  
  const relatedProducts = products
    .filter(p => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="group product-card"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.slug}`}>
                {/* Image */}
                <div className="relative aspect-square bg-parchment rounded overflow-hidden mb-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: hoveredId === product.id ? 0 : 1 }}
                  />
                  <img
                    src={product.images[1]}
                    alt={`${product.name} alternate`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 product-image-secondary"
                    style={{ opacity: hoveredId === product.id ? 1 : 0 }}
                  />
                  
                  {/* Quick Add */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-sm transition-all duration-300 ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product, 1, product.variants[0]);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 text-white font-sans text-sm"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </Link>

              <div className="text-center">
                <Link to={`/product/${product.slug}`}>
                  <h3 className="product-name text-charcoal text-xs mb-1 hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-serif text-gold text-sm">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
