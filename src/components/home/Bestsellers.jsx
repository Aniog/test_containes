import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import products from '../../data/products';

const Bestsellers = () => {
  const { addToCart } = useCart();
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif mb-4">Bestsellers</h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellerProducts.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-premium hover:shadow-premium-lg transition-shadow"
          >
            {/* Product Image */}
            <div className="relative img-hover-zoom aspect-square">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay with quick add */}
              <div className="absolute inset-0 bg-velmora-charcoal/0 group-hover:bg-velmora-charcoal/20 transition-colors flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-velmora-ivory text-velmora-charcoal px-6 py-2 text-sm uppercase tracking-wider hover:bg-velmora-gold hover:text-velmora-ivory transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="product-name text-sm mb-2 hover:text-velmora-gold">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-velmora-stone mb-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">${product.price}</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-velmora-stone">
                    {product.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
