import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3">Curated for You</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-beige-light">
                  <img
                    src={hoveredId === product.id ? product.hoverImage : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-charcoal/80 text-white text-[10px] px-2.5 py-1 tracking-wider uppercase">
                      {product.badge}
                    </span>
                  )}
                  {/* Quick add overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem(product, 1, 'Gold');
                      }}
                      className="w-full py-2.5 bg-charcoal/90 hover:bg-charcoal text-white text-[11px] tracking-widest uppercase font-medium flex items-center justify-center gap-2 transition-colors duration-300"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </Link>
              <div className="mt-3 md:mt-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xs md:text-sm tracking-widest uppercase text-charcoal font-medium hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold-light fill-gold-light' : 'text-beige'}`}
                    />
                  ))}
                  <span className="text-[10px] text-charcoal-muted ml-1">({product.reviews})</span>
                </div>
                <p className="font-serif italic text-sm md:text-base text-charcoal mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-white text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}