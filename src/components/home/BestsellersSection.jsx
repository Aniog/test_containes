import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold');
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f3f0eb] mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#2c2825] text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick Add */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white/95 backdrop-blur-sm text-[#2c2825] py-3 text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-[#2c2825] hover:text-white transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? 'text-[#d4a853] fill-[#d4a853]' : 'text-[#e8e4df]'
              }`}
            />
          ))}
          <span className="text-xs text-[#9a9490] ml-1">({product.reviews})</span>
        </div>
        <h3 className="velmora-product-name text-sm tracking-[0.1em] mb-1 group-hover:text-[#b8860b] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-[#6b6560]">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export { ProductCard };

const BestsellersSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">Most Loved</p>
          <h2 className="velmora-heading text-3xl sm:text-4xl tracking-[0.1em]">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
