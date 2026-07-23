import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart, isLoading } = useCart();

  const bestsellers = products.slice(0, 5);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <section className="section-spacing bg-[var(--color-ivory)]">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] mb-3">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-3/4 bg-[var(--color-cream)] mb-4 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                {/* Hover image */}
                <img
                  src={product.images[1] || product.images[0]}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Quick add overlay */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    disabled={isLoading}
                    className="w-full bg-[var(--color-ivory)] text-[var(--color-charcoal)] py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product info */}
              <div>
                <h3 className="product-name text-xs md:text-sm mb-1 group-hover:text-[var(--color-gold)] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <p className="text-sm font-medium">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
