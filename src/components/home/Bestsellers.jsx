import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const bestsellers = PRODUCTS.slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink font-light uppercase tracking-wider">
            Bestsellers
          </h2>
          <p className="text-taupe text-sm mt-3 font-light max-w-md mx-auto">
            The pieces our customers reach for most
          </p>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <Link to={`/product/${product.id}`} className="block aspect-[3/4] bg-beige-light overflow-hidden relative">
                <img
                  src={hoveredId === product.id ? product.hoverImage : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-ink/5 transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`} />

                {/* Quick add */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product.id, product.name, product.price, product.images[0], 'gold', 1);
                  }}
                  className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-gold hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Quick add to cart"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </Link>

              {/* Info */}
              <div className="mt-3 space-y-1">
                <h3 className="font-serif text-xs uppercase tracking-widest text-ink">
                  {product.name}
                </h3>
                <p className="text-sm text-taupe font-medium">${product.price}</p>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span className="text-[11px] text-taupe">{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-widest text-gold hover:text-ink border-b border-gold hover:border-ink pb-1 transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}