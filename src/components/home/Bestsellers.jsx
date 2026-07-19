import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet-900 font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-velvet-100">
                  <img
                    src={hoveredId === product.id && product.hoverImage ? product.hoverImage : product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-gold text-white text-[10px] tracking-[0.15em] uppercase px-2.5 py-1">
                      New
                    </span>
                  )}
                </div>
              </Link>

              {/* Quick add to cart */}
              <button
                onClick={() => addItem(product)}
                className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm hover:bg-gold hover:text-white"
                aria-label="Quick add to cart"
              >
                <ShoppingBag className="w-4 h-4" />
              </button>

              {/* Product info */}
              <div className="mt-3 md:mt-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] text-velvet-900 uppercase">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <span className="text-xs text-velvet-500">{product.rating}</span>
                </div>
                <p className="text-sm text-velvet-700 mt-1 font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold px-10 py-3 text-sm tracking-[0.15em] uppercase hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}