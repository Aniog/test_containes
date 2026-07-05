import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus, Star } from 'lucide-react';

const Bestsellers = ({ products }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (product) => {
    addToCart(product, 1, 'Gold');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
        <div className="w-16 h-0.5 bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden bg-cream aspect-square mb-4">
                <img 
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Quick Add Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickAdd(product);
                  }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-charcoal px-4 py-2 text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold hover:text-white"
                >
                  <Plus size={16} className="inline mr-2" />
                  Quick Add
                </button>

                {/* Bestseller Badge */}
                {product.bestseller && (
                  <div className="absolute top-4 left-4 bg-gold text-white text-xs px-3 py-1 tracking-wide">
                    Bestseller
                  </div>
                )}
              </div>
            </Link>

            <div className="space-y-2">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-serif text-lg uppercase tracking-wider hover:text-gold transition-colors">
                  {product.name}
                </h3>
              </Link>
              
              <p className="text-sm text-stone">{product.description}</p>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-xs text-stone">({product.reviews})</span>
              </div>
              
              <p className="font-medium">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          to="/shop"
          className="inline-block border border-charcoal px-8 py-3 text-sm tracking-wider uppercase hover:bg-charcoal hover:text-white transition-colors"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;