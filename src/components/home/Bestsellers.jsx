import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Heart, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getFeaturedProducts } from '../../data/products';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1, 'Gold');
  };

  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div 
          className="relative aspect-[3/4] overflow-hidden bg-cream"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-charcoal px-6 py-2 font-sans text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-charcoal hover:text-white"
          >
            Add to Cart
          </button>

          {/* Wishlist Button */}
          <button
            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-charcoal hover:text-white"
            aria-label="Add to wishlist"
          >
            <Heart size={14} />
          </button>
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-1">
          <h3 className="font-serif text-sm uppercase tracking-wider text-charcoal">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex text-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? 'text-gold' : 'text-gray-300'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-warmgray">({product.reviews})</span>
          </div>
          <p className="font-serif text-lg">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

const Bestsellers = () => {
  const products = getFeaturedProducts();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 border-b-2 border-charcoal pb-1 font-sans text-sm tracking-wider hover:border-gold transition-colors"
        >
          View All Collections
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
