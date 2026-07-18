import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Bestsellers({ products }) {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Bestsellers</h2>
        <p className="text-velmora-warm-gray text-sm uppercase tracking-wider">Our most loved pieces</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden bg-velmora-cream aspect-square mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
            </Link>

            <div className="space-y-2">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-sm uppercase tracking-wider font-medium hover:opacity-70 transition-opacity">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                <span className="text-sm text-velmora-warm-gray">{product.rating}</span>
              </div>
              <p className="text-lg font-light">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-velmora-black text-white py-3 text-sm uppercase tracking-wider font-medium hover:bg-velmora-charcoal transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}