import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Plus, Star } from 'lucide-react';

const Bestsellers = ({ products }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl font-light mb-4 tracking-wide">BestSellers</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map(product => (
          <div key={product.id} className="product-card group cursor-pointer">
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden bg-cream mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />

                {/* Hover Image */}
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full aspect-square object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-charcoal text-cream px-6 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-charcoal"
                >
                  <Plus size={16} className="inline mr-2" />
                  Add to Cart
                </button>

                {/* New Badge */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-gold text-charcoal px-3 py-1 text-xs tracking-widest uppercase font-medium">
                    New
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="font-serif text-lg mb-2 tracking-widest">{product.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star size={14} className="fill-gold text-gold" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
                <p className="text-charcoal font-medium">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block border border-charcoal text-charcoal px-8 py-3 text-sm tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-colors"
        >
          View All Collections
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
