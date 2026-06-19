import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { getBestsellers } from '../../data/products';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsAdding(true);
    addToCart(product, 1, product.variants?.[0] || null);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-product bg-charcoal-100 overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Secondary Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 bg-charcoal-800 text-cream-50 py-3 font-sans text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-charcoal-900`}
        >
          {isAdding ? 'Added!' : 'Quick Add'}
        </button>

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <span className="absolute top-4 left-4 bg-gold-500 text-charcoal-900 px-3 py-1 font-sans text-xs font-medium tracking-wider uppercase">
            Bestseller
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-serif text-sm uppercase tracking-extra-wide text-charcoal-800 mb-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star size={12} className="text-gold-500 fill-gold-500" />
          <span className="font-sans text-xs text-charcoal-600">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="font-serif text-base text-charcoal-900">${product.price}</p>
      </div>
    </Link>
  );
};

const Bestsellers = () => {
  const bestsellers = getBestsellers().slice(0, 5);

  return (
    <section className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-extra-wide uppercase text-gold-600 mb-3">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 mb-4">
            Our Bestsellers
          </h2>
          <p className="font-sans text-sm text-charcoal-600 max-w-lg mx-auto">
            The pieces our community reaches for every day. Timeless designs 
            crafted with exceptional quality.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border-b border-charcoal-800 pb-1 font-sans text-sm text-charcoal-800 hover:text-gold-600 hover:border-gold-600 transition-colors duration-200"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
