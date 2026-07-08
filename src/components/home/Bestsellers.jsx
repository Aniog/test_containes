import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Star } from 'lucide-react';

const Bestsellers = ({ products }) => {
  const { addItem } = useCart();
  
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Bestsellers</h2>
        <div className="w-16 h-px bg-gray-300 mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <Link to={`/product/${product.id}`}>
              <div className="relative overflow-hidden mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full aspect-square object-cover group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="w-full aspect-square object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Quick Add Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product);
                  }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
                >
                  <ShoppingBag size={14} className="inline mr-2" />
                  ADD TO CART
                </button>
              </div>
            </Link>

            <div className="text-center">
              <h3 className="text-xs tracking-widest uppercase mb-2 font-medium">
                {product.name}
              </h3>
              <div className="flex items-center justify-center mb-2">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs text-gray-600 ml-1">
                  {product.rating} ({product.reviews})
                </span>
              </div>
              <p className="text-sm">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;