import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, openDrawer } = useCart();

  const handleAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    openDrawer();
  };

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-ink">
          Bestsellers
        </h2>
        <p className="text-velmora-stone text-sm mt-3 max-w-md mx-auto">
          The pieces our community loves most
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group block"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div className="relative aspect-square bg-velmora-sand/30 overflow-hidden mb-4">
              <div
                className="absolute inset-0 bg-velmora-sand/50 flex items-center justify-center transition-opacity duration-500"
                style={{ opacity: hoveredId === product.id ? 0 : 1 }}
              >
                <span className="text-velmora-stone/40 text-[10px] tracking-wider">
                  {product.name.slice(0, 3).toUpperCase()}
                </span>
              </div>

              {/* Hover image (second mock) */}
              <div
                className="absolute inset-0 bg-velmora-rose/20 flex items-center justify-center transition-opacity duration-500"
                style={{ opacity: hoveredId === product.id ? 1 : 0 }}
              >
                <span className="text-velmora-stone/40 text-[10px] tracking-wider">
                  ALT
                </span>
              </div>

              {/* Quick add button */}
              <button
                onClick={(e) => handleAdd(e, product)}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 text-velmora-ink px-4 py-2 text-xs tracking-wider uppercase shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold hover:text-white flex items-center gap-2"
              >
                <ShoppingBag size={12} />
                Add to Cart
              </button>
            </div>

            {/* Info */}
            <h3 className="product-name text-velmora-ink group-hover:text-velmora-gold transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={
                    i < Math.floor(product.rating)
                      ? 'fill-velmora-gold text-velmora-gold'
                      : 'text-velmora-sand'
                  }
                />
              ))}
              <span className="text-[10px] text-velmora-stone ml-1">
                ({product.reviewCount})
              </span>
            </div>
            <p className="text-sm text-velmora-gold mt-1">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}