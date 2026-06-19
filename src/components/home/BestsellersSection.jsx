import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { Heart, ShoppingBag } from 'lucide-react';

const BestsellersSection = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">Bestsellers</h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative img-hover-zoom mb-4 bg-velmora-warm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                {/* Hover Image */}
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Quick Add Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product, 'Gold');
                  }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                           bg-white text-velmora-charcoal px-6 py-2 uppercase tracking-wider text-xs
                           opacity-0 group-hover:opacity-100 transition-all duration-300
                           hover:bg-velmora-charcoal hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag size={14} />
                    Add to Cart
                  </span>
                </button>
              </div>
            </Link>

            <div className="space-y-1">
              <h3 className="product-name text-sm">{product.name}</h3>
              <p className="text-xs text-velmora-stone uppercase tracking-wider">{product.category}</p>
              <p className="text-sm font-medium">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="btn-outline inline-block"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default BestsellersSection;
