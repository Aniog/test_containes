import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium mb-3">
          The Essentials
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl text-velvet-900 font-light">
          Bestsellers
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <Link
              to={`/product/${product.slug}`}
              className="block relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4"
            >
              {/* Primary image — warm gold gradient placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br from-gold-200/70 via-velvet-100 to-velvet-200/50 transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-0' : 'opacity-100'}`} />

              {/* Secondary image (hover) */}
              <div className={`absolute inset-0 bg-gradient-to-br from-gold-300/60 via-gold-100/50 to-velvet-300/40 transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`} />

              {/* Quick add button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    color: product.colors[0],
                  });
                }}
                className={`absolute bottom-0 left-0 right-0 py-3 bg-velvet-900/90 backdrop-blur-sm text-white text-xs tracking-wider uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 ${hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Cart
              </button>
            </Link>

            {/* Info */}
            <Link to={`/product/${product.slug}`} className="block">
              <h3 className="font-serif text-xs tracking-[0.2em] text-velvet-800 mb-1 truncate">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-velvet-300'}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-velvet-500">({product.reviews})</span>
              </div>
              <p className="text-sm font-medium text-velvet-900">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block text-[11px] tracking-[0.2em] uppercase text-gold-700 hover:text-gold-500 transition-colors font-medium underline underline-offset-8 decoration-gold-300 hover:decoration-gold-500"
        >
          View All Pieces
        </Link>
      </div>
    </section>
  );
}
