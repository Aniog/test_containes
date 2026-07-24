import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { PRODUCTS, useCart } from '../../context/CartContext';

const bestsellerIds = [
  'vivid-aura-jewels',
  'majestic-flora-nectar',
  'golden-sphere-huggies',
  'amber-lace-earrings',
  'royal-heirloom-set',
];

export default function Bestsellers() {
  const bestsellers = bestsellerIds.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  const { addItem, toggleCart } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.defaultVariant);
    toggleCart();
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide section-padding">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-sand-500 mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet-800 font-light tracking-wide">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-sand-100 rounded-sm overflow-hidden mb-4">
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                    hoveredId === product.id ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                  }`}
                  style={{
                    backgroundColor: '#d4cdbd',
                    backgroundImage: `linear-gradient(135deg, #c4a06a 0%, #8a5c3c 100%)`,
                  }}
                />
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                    hoveredId === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  style={{
                    backgroundColor: '#bfb59f',
                    backgroundImage: `linear-gradient(135deg, #d4b98e 0%, #a67445 100%)`,
                  }}
                />

                {/* Quick add overlay */}
                <div className={`absolute inset-0 bg-black/5 flex items-end justify-center pb-4 transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="btn-primary text-[10px] md:text-xs py-2.5 px-5 shadow-lg"
                  >
                    <Plus className="w-3 h-3 mr-2" />
                    Add to Bag
                  </button>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-serif text-xs md:text-sm tracking-wider uppercase text-velvet-800 mb-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2.5 h-2.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-velvet-500 text-velvet-500'
                          : 'fill-sand-200 text-sand-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-sand-500">({product.reviewCount})</span>
              </div>
              <p className="font-sans text-sm font-medium text-velvet-700">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
