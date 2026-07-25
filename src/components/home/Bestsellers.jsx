import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Heart } from 'lucide-react';
import products from '../../data/products';

const Bestsellers = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
          Best sellers
        </h2>
        <div className="w-16 h-px bg-accent mx-auto" />
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {/* Product Image */}
            <div className="relative overflow-hidden bg-cream aspect-square mb-4">
              <img 
                src={hoveredProduct === product.id ? product.images[1] : product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Quick Add Button - Shows on Hover */}
              <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                <button className="bg-white text-gray-900 px-6 py-3 text-sm font-medium tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-colors whitespace-nowrap">
                  <Plus size={16} className="inline-block mr-2" />
                  Add to Cart
                </button>
              </div>
              
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110">
                <Heart size={18} className="text-gray-700" />
              </button>
            </div>
            
            {/* Product Info */}
            <Link to={`/product/${product.id}`} className="block">
              <h3 className="product-name text-sm mb-2 text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-1">{product.material}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">${product.price}</span>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-accent mr-1">★</span>
                  {product.rating}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {/* View All Link */}
      <div className="text-center mt-12">
        <Link 
          to="/shop"
          className="btn-outline inline-block"
        >
          View All Collections
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
