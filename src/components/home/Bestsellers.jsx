import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getBestsellers } from '../../data/products';
import StarRating from '../ui/StarRating';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart();
  const bestsellers = getBestsellers();

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-sans font-semibold tracking-ultra-wide text-champagne uppercase mb-3">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-obsidian">
            Our Bestsellers
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.slice(0, 5).map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-velvet-100 rounded overflow-hidden mb-4">
                <img
                  src={product.images[hoveredId === product.id && product.images[1] ? 1 : 0].src}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Quick Add Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className={`absolute bottom-3 right-3 p-3 bg-cream rounded-full shadow-lg transition-all duration-300 hover:bg-champagne hover:text-obsidian ${
                    hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  aria-label="Add to cart"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div>
                <StarRating rating={product.rating} reviews={product.reviews} size="sm" />
                <h3 className="product-name text-xs mt-2 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-velvet-600">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center font-sans text-sm text-obsidian border-b border-obsidian pb-0.5 hover:text-champagne hover:border-champagne transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
