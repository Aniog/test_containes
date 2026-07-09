import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

export default function Bestsellers() {
  const { addItem } = useCart();
  const bestsellers = products.slice(0, 5);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Best sellers</h2>
        <div className="divider-hairline w-24 mx-auto my-6" />
        <p className="text-charcoal-600 max-w-xl mx-auto">
          Our most loved pieces, worn and cherished by women around the world.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <div key={product.id} className="group relative">
            <Link to={`/product/${product.id}`} className="block">
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-cream-100">
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
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-charcoal-900 px-4 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-charcoal-900 hover:text-white flex items-center gap-2"
                >
                  <Plus size={16} />
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-4 space-y-1">
                <h3 className="product-name text-sm text-charcoal-900">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < Math.floor(product.rating) ? 'star-filled fill-current' : 'star-empty'}
                    />
                  ))}
                  <span className="text-xs text-charcoal-600 ml-1">({product.reviews})</span>
                </div>
                <p className="text-charcoal-900 font-medium">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="btn-premium btn-premium-outline"
        >
          View All Collections
        </Link>
      </div>
    </section>
  );
}
