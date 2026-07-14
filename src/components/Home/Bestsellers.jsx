import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Plus, ShoppingBag } from 'lucide-react';
import products from '../../data/products';

export default function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 px-4">
      <div className="container-velmora">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Bestsellers
          </h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="product-card group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden bg-velmora-cream mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />

                  {/* Quick Add Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="quick-add absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-velmora-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-velmora-charcoal transition-all duration-300 whitespace-nowrap"
                  >
                    <span className="flex items-center gap-2">
                      <ShoppingBag size={16} />
                      Add to Cart
                    </span>
                  </button>
                </div>
              </Link>

              <div className="text-center px-2">
                <h3 className="product-name text-sm mb-2 text-velmora-black">
                  {product.name}
                </h3>
                <p className="text-sm text-velmora-charcoal mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex text-velmora-gold">
                    {'★'.repeat(Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-velmora-charcoal">
                    ({product.reviews})
                  </span>
                </div>
                <p className="text-lg font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

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