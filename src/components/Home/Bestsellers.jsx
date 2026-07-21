import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Plus, Star } from 'lucide-react';

const Bestsellers = ({ products }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants?.[0] || 'Gold', 1);
  };

  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Bestsellers
          </h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.id}`} className="block">
                {/* Product Image */}
                <div className="product-card-image relative aspect-[3/4] bg-velmora-light-gray mb-4 overflow-hidden">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                  {/* Second Image on Hover */}
                  {product.images?.[1] && (
                    <img
                      src={product.images[1]}
                      alt={product.name}
                      className="img-secondary w-full h-full object-cover absolute inset-0"
                    />
                  )}
                  {/* Quick Add Button */}
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-velmora-charcoal text-velmora-white px-6 py-3 text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold"
                  >
                    <Plus size={16} className="inline-block mr-2" />
                    Add to Cart
                  </button>
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="product-name text-sm mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star size={14} className="text-velmora-gold fill-velmora-gold" />
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                    <span className="text-xs text-velmora-warm-gray">
                      ({product.reviews})
                    </span>
                  </div>
                  <p className="font-serif text-lg">${product.price}.00</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-premium btn-premium-outline inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
