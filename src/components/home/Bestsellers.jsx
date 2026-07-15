import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const featuredProducts = products.filter(p => p.featured).slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-sm tracking-widest text-gold uppercase mb-3">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Our Bestsellers
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 stagger-children">
          {featuredProducts.map(product => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <div className="relative aspect-square bg-cream rounded-lg overflow-hidden mb-4">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover image */}
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} hover`}
                    className={cn(
                      'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </Link>

                {/* Quick add button */}
                <button
                  onClick={() => addItem(product)}
                  className={cn(
                    'absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center transition-all duration-300 hover:bg-goldDark',
                    hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  )}
                  aria-label="Add to cart"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>

              {/* Product info */}
              <div className="text-center">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-sm text-charcoal tracking-wide uppercase mb-1 group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-sans text-xs text-taupe mb-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-3 h-3',
                        i < Math.floor(product.rating)
                          ? 'text-gold fill-gold'
                          : 'text-sand'
                      )}
                    />
                  ))}
                  <span className="font-sans text-xs text-taupe ml-1">
                    ({product.reviews})
                  </span>
                </div>

                <p className="font-sans text-sm font-medium text-charcoal">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-sm text-charcoal hover:text-gold transition-colors group"
          >
            View All Products
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </Link>
        </div>
      </div>
    </section>
  );
}
