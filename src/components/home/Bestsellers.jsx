import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] mb-3 font-sans">Curated for You</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] font-serif">Bestsellers</h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mt-4" />
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
                <div className="relative aspect-[3/4] bg-[#1A1A1A] overflow-hidden rounded-sm">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === product.id ? 'opacity-0 scale-105' : 'opacity-100'
                    }`}
                  />
                  <img
                    src={product.images[1] || product.images[0]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === product.id ? 'opacity-100 scale-105' : 'opacity-0'
                    }`}
                  />

                  {/* Quick add button on hover */}
                  <div
                    className={`absolute inset-x-4 bottom-4 transition-all duration-300 ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addItem(product, 'Gold', 1);
                      }}
                      className="w-full bg-[#C9A96E] text-[#0F0F0F] py-2.5 text-[10px] tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 hover:bg-[#D4B87A] transition-all duration-300"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>

              <div className="mt-3 md:mt-4 text-center">
                <h3 className="text-[10px] md:text-xs tracking-widest uppercase text-[#F5F0EB] font-sans">
                  <Link to={`/product/${product.id}`} className="hover:text-[#C9A96E] transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-xs md:text-sm text-[#C9A96E] mt-1.5 font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}