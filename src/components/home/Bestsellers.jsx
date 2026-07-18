import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Star } from 'lucide-react';
import { getBestsellers } from '../../data/products';

const Bestsellers = () => {
  const { addToCart } = useCart();
  const bestsellers = getBestsellers();

  const handleQuickAdd = (product) => {
    addToCart(product, 1, 'gold');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mb-4 tracking-wide">
          Bestsellers
        </h2>
        <div className="w-24 h-0.5 bg-[#C9A96E] mx-auto mb-6" />
        <p className="text-[#8A8580] max-w-2xl mx-auto">
          Our most loved pieces, chosen by women who appreciate timeless elegance and everyday luxury.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <div key={product.id} className="group relative">
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden mb-4 bg-[#F5F3F0]">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Second Image */}
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="absolute inset-0 w-full aspect-square object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Quick Add Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickAdd(product);
                  }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-[#2C2C2C] px-6 py-2 text-sm uppercase tracking-wider font-medium 
                           opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#C9A96E] hover:text-white"
                >
                  <ShoppingBag size={16} className="inline mr-2" />
                  Add to Cart
                </button>
              </div>
            </Link>

            <div className="text-center">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-['Cormorant_Garamond'] uppercase tracking-[0.15em] text-sm mb-2 hover:text-[#C9A96E] transition-colors">
                  {product.name}
                </h3>
              </Link>
              
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-[#C9A96E] text-[#C9A96E]' : 'text-gray-300'}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
              </div>
              
              <p className="text-[#C9A96E] font-medium">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-secondary inline-block">
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
