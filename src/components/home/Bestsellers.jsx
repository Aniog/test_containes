import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller);
  const { addToCart } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-warmgray-500 mb-3">Editor's Picks</p>
        <h2 className="font-serif text-3xl md:text-4xl text-noir">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
              {/* Image container */}
              <div className="aspect-[3/4] overflow-hidden bg-warmgray-100">
                <img
                  src={hoveredId === product.id && product.images[1] ? product.images[1] : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Quick add overlay */}
              <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product, 'gold');
                  }}
                  className="w-full py-2.5 bg-noir text-cream text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-warmgray-800 transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </div>
            </Link>

            {/* Info */}
            <div className="mt-3 text-center">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-serif text-xs md:text-sm tracking-wider uppercase text-noir leading-snug">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-warmgray-600 mt-1">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline text-xs">
          View All Products
        </Link>
      </div>
    </section>
  );
}