import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

export default function Bestsellers() {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const bestsellerProducts = products.slice(0, 5);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Bestsellers</h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellerProducts.map((product) => (
          <div
            key={product.id}
            className="group relative"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <Link to={`/product/${product.id}`} className="block">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-velmora-ivory mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Image */}
                {hoveredProduct === product.id && product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                )}

                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-velmora-charcoal text-white px-6 py-3 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold flex items-center gap-2"
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="product-name text-sm mb-2">
                  {product.name}
                </h3>
                <p className="text-velmora-stone text-sm">
                  ${product.price}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs ${
                        i < Math.floor(product.rating)
                          ? 'text-velmora-gold'
                          : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-xs text-velmora-stone ml-1">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 border-b-2 border-velmora-gold text-velmora-charcoal hover:text-velmora-gold transition-colors duration-300 pb-1"
        >
          View All Products
          <Plus size={16} />
        </Link>
      </div>
    </section>
  );
}
