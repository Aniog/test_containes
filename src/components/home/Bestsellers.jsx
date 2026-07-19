import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import products from '../../data/products';

export default function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
        <div className="w-24 h-0.5 bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellerProducts.map((product) => (
          <div key={product.id} className="product-card group cursor-pointer">
            <Link to={`/product/${product.id}`}>
              <div className="relative overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="w-full aspect-square object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal px-6 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </Link>

            <div className="text-center">
              <Link to={`/product/${product.id}`}>
                <h3 className="product-name mb-2">{product.name}</h3>
              </Link>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star size={14} className="text-velmora-gold fill-velmora-gold" />
                <span className="text-sm">{product.rating}</span>
                <span className="text-xs text-gray-600">({product.reviews})</span>
              </div>
              <p className="font-serif text-xl">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-secondary">
          View All Products
        </Link>
      </div>
    </section>
  );
}
