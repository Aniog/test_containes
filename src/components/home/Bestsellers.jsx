import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  return (
    <Link
      to={`/products/${product.slug}`}
      className="product-card group block"
    >
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-cream-50 text-xs tracking-wider uppercase text-charcoal-700">
          {product.badge}
        </span>
      )}

      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden bg-warm-100">
        {/* Primary Image */}
        <img
          src={product.images.primary}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Secondary Image (hover) */}
        <img
          src={product.images.secondary}
          alt={`${product.name} alternate view`}
          className="product-image-secondary w-full h-full object-cover"
        />
      </div>

      {/* Quick Add Button */}
      <button
        onClick={handleQuickAdd}
        className="quick-add flex items-center justify-center gap-2"
      >
        <ShoppingBag className="w-4 h-4" />
        Add to Bag
      </button>

      {/* Product Info */}
      <div className="pt-4 pb-2">
        <h3 className="text-product-name text-sm mb-1">{product.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
            <span className="text-xs text-charcoal-500">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
        <p className="font-serif text-lg">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-16 sm:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-ultra-wide uppercase text-gold-600 mb-3">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800">
            Our Bestsellers
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/collections/all"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-charcoal-600 hover:text-charcoal-800 border-b border-charcoal-300 hover:border-charcoal-800 pb-1 transition-colors"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}