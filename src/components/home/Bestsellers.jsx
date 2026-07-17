import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getBestsellers } from '@/data/products';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart, isLoading } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-cream rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0].primary}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[0].secondary ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[0].secondary && (
          <img
            src={product.images[0].secondary}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-velvet text-ivory text-xs px-2 py-1 tracking-wider">
              NEW
            </span>
          )}
          {product.isGiftSet && (
            <span className="bg-champagne text-velvet text-xs px-2 py-1 tracking-wider">
              GIFT SET
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          disabled={isLoading}
          className={`absolute bottom-0 left-0 right-0 py-3 bg-velvet/90 text-ivory text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 hover:bg-velvet ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          {isLoading ? 'Adding...' : 'Quick Add'}
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'star-filled fill-current'
                  : 'star-empty'
              }`}
            />
          ))}
          <span className="text-xs text-taupe ml-1">({product.reviewCount})</span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-product text-velvet">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-mocha font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

const Bestsellers = () => {
  const bestsellers = getBestsellers();

  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-4">
            Customer Favorites
          </p>
          <h2 className="font-serif text-section text-velvet mb-4">
            Our Bestsellers
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
