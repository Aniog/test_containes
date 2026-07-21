import React from 'react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  const handleQuickAdd = (product) => {
    addToCart(product, 1, 'Gold');
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Bestsellers</h2>
      <p className="text-center text-gray-600 mb-12 tracking-wide">Our most loved pieces</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <div key={product.id} className="group relative">
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden mb-4 aspect-square bg-amber-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="font-serif text-2xl uppercase tracking-wider text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm uppercase tracking-wider font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-sm font-medium">${product.price}</p>
              </div>
            </Link>

            {/* Quick Add Button */}
            <button
              onClick={() => handleQuickAdd(product)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center 
                         opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#B8860B] hover:text-white
                         shadow-lg"
            >
              <Plus size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
