import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem, toggleDrawer } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: 'Gold',
      quantity: 1,
    });
    toggleDrawer(true);
  };

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl italic text-[#1A1514] tracking-wide">
          Bestsellers
        </h2>
        <p className="text-sm text-[#7A7268] mt-3 tracking-[0.1em] uppercase">
          Pieces our customers adore
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div className="relative aspect-square bg-[#F5F0EB] overflow-hidden mb-4">
              <img
                alt={product.name}
                data-strk-img-id={`bestseller-${product.id}`}
                data-strk-img={`[bestseller-name-${product.id}] gold jewelry demi-fine`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Quick add button */}
              <button
                onClick={(e) => handleQuickAdd(product, e)}
                className={`absolute bottom-3 right-3 w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                aria-label={`Add ${product.name} to cart`}
              >
                <Plus className="w-4 h-4 text-[#1A1514]" />
              </button>
            </div>

            {/* Info */}
            <div>
              <h3
                id={`bestseller-name-${product.id}`}
                className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-[#1A1514] leading-snug"
              >
                {product.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating) ? 'fill-[#C8A96E] text-[#C8A96E]' : 'text-[#E5DDD3]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-[#7A7268]">({product.reviewCount})</span>
              </div>
              <p className="text-sm text-[#C8A96E] mt-1 font-medium">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
