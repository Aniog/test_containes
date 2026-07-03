import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getBestsellers } from '../../data/products';

export default function ProductGrid() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart();
  const bestsellers = getBestsellers();

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <section className="section bg-[#FAF8F5]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="label-uppercase text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--color-gold)' }}>
            Customer Favorites
          </p>
          <h2 className="heading-2" style={{ color: 'var(--color-text)' }}>
            Our Bestsellers
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-[#F5F2ED] overflow-hidden mb-4">
                {/* Primary Image */}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id && product.images[1] ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                
                {/* Secondary Image (hover) */}
                {product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt={`${product.name} - alternate view`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}

                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-[#2D2926] px-4 py-2 text-xs uppercase tracking-wider font-medium flex items-center gap-2 transition-all duration-300 hover:bg-[#C9A962] hover:text-white ${
                    hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <Plus className="w-3 h-3" />
                  Quick Add
                </button>

                {/* Bestseller Badge */}
                {product.isBestseller && (
                  <div className="absolute top-3 left-3 bg-[#2D2926] text-white text-[9px] uppercase tracking-wider px-2 py-1">
                    Bestseller
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="product-name text-[11px] mb-1 group-hover:text-[#C9A962] transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3"
                      fill={i < Math.floor(product.rating) ? '#C9A962' : 'none'}
                      stroke={i < Math.floor(product.rating) ? '#C9A962' : '#D5D0C8'}
                    />
                  ))}
                  <span className="text-[10px] text-[#9A9590] ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <p className="font-medium text-[#2D2926]">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link 
            to="/shop"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-medium border-b border-[#2D2926] pb-1 hover:border-[#C9A962] hover:text-[#C9A962] transition-colors"
            style={{ color: 'var(--color-text)' }}
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
