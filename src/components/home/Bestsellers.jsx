import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-cream-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src={product.images[1]}
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 bg-charcoal-800 text-cream-50 text-[10px] font-medium tracking-ultra-wide uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full flex items-center justify-center gap-2 bg-charcoal-800/90 backdrop-blur-sm text-cream-50 py-3 text-xs font-medium tracking-ultra-wide uppercase hover:bg-charcoal-900 transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-4 text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 className="product-name text-charcoal-800 hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1.5 mt-2">
          <Star size={12} className="fill-gold-400 text-gold-400" />
          <span className="text-xs text-charcoal-400">{product.rating}</span>
        </div>
        <p className="text-sm font-medium text-charcoal-700 mt-2">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-label text-gold-500 mb-4">Curated Selection</p>
          <h2 className="heading-section text-charcoal-800">Bestsellers</h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="btn-outline"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
