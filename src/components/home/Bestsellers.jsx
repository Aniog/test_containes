import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Plus } from 'lucide-react';
import products from '../../data/products';

const Bestsellers = () => {
  const { addItem } = useCart();
  const bestsellers = products.slice(0, 5);

  const handleQuickAdd = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      material: 'Gold',
      images: product.images,
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
        <p className="text-gray-600 tracking-wide">Our most loved pieces</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden bg-gray-100 mb-4">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              
              {/* Quick Add Button */}
              <button
                onClick={() => handleQuickAdd(product)}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-yellow-600 hover:text-white"
              >
                <Plus size={16} className="inline mr-1" />
                Add to Cart
              </button>
            </div>

            <Link to={`/product/${product.id}`} className="block">
              <h3 className="font-serif text-sm tracking-wide mb-2">{product.name}</h3>
              <p className="text-gray-700">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="border-2 border-black text-black px-8 py-3 tracking-wide hover:bg-black hover:text-white transition-colors inline-block"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
