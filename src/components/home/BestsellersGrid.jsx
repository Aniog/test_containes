import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function BestsellersGrid() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding bg-[#FAF8F5]">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#9B9590] mb-3">Curated for You</p>
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-[#B8956A] mx-auto mt-6" />
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
              {/* Image */}
              <Link to={`/product/${product.id}`} className="block aspect-[3/4] bg-[#F3F0EB] overflow-hidden relative">
                <img
                  src={hoveredId === product.id ? product.images[1] : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#2C2420] text-white text-[10px] tracking-wider uppercase px-2 py-1">
                    {product.badge}
                  </span>
                )}

                {/* Quick add overlay */}
                <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, product.variants[0]);
                    }}
                    className="w-full bg-[#2C2420]/90 backdrop-blur-sm text-white py-2.5 text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#2C2420] transition-colors"
                  >
                    <ShoppingBag size={14} />
                    Add to Cart
                  </button>
                </div>
              </Link>

              {/* Product info */}
              <div className="mt-3 md:mt-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name text-xs md:text-sm text-[#1A1A1A] group-hover:text-[#B8956A] transition-colors truncate">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={10} className="text-[#C9A96E] fill-[#C9A96E]" />
                  <span className="text-xs text-[#6B6560]">{product.rating}</span>
                  <span className="text-xs text-[#9B9590]">({product.reviews})</span>
                </div>
                <p className="text-sm font-medium mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
