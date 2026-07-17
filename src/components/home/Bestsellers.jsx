import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

export default function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'Gold');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Bestsellers</h2>
        <div className="divider-hairline w-16 mx-auto" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <div key={product.id} className="group relative">
            <Link to={`/product/${product.id}`} className="block">
              {/* Image Container */}
              <div className="relative img-hover-zoom bg-[#F5F0EB] aspect-square mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
                />
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-[#1A1A1A] px-4 py-2 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#C9A96E] hover:text-white"
                >
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="product-name text-[#1A1A1A] mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-[#8A8580] mb-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">${product.price}</span>
                  <div className="flex items-center text-sm text-[#8A8580]">
                    <svg className="w-4 h-4 text-[#C9A96E] mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {product.rating}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center mt-12">
        <Link to="/shop" className="btn-premium-outline inline-block">
          View All Products
        </Link>
      </div>
    </section>
  );
}
