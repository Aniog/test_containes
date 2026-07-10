import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Star } from 'lucide-react';
import products from '../../data/products';

export default function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellers = products.filter(product => product.featured).slice(0, 5);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Bestsellers</h2>
          <p className="font-sans text-gray-warm max-w-2xl mx-auto">
            Our most loved pieces, cherished by the Velmora community
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block">
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-light overflow-hidden mb-4 img-hover-zoom">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Quick Add Button - Appears on Hover */}
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-charcoal text-cream 
                             px-6 py-2 font-sans text-xs tracking-wider uppercase
                             opacity-0 group-hover:opacity-100 transition-all duration-300
                             hover:bg-gold-dark"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingBag size={14} className="inline-block mr-2" />
                    Quick Add
                  </button>
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="product-name text-sm mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      <Star size={14} className="text-gold fill-gold" />
                      <span className="font-sans text-xs text-gray-warm ml-1">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <p className="font-serif text-base font-medium">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-secondary inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}