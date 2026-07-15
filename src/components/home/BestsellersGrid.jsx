import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function BestsellersGrid() {
  const { addItem, setIsCartOpen } = useCart();

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    addItem(product, 'gold');
    setIsCartOpen(true);
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">
            Most Loved
          </p>
          <h2 className="velmora-heading text-3xl sm:text-4xl text-[var(--velmora-text)]">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-[var(--velmora-accent)] mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card group"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-[var(--velmora-border)] overflow-hidden mb-4">
                <img
                  src={product.images.primary}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <img
                  src={product.images.secondary}
                  alt={product.name}
                  className="product-card-secondary w-full h-full object-cover"
                />

                {/* Quick Add */}
                <div className="quick-add">
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="w-full py-3 bg-[var(--velmora-bg-dark)] text-white text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2 hover:bg-[var(--velmora-accent)] hover:text-[var(--velmora-bg-dark)] transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="px-1">
                <h3 className="velmora-heading-uppercase text-xs tracking-wider text-[var(--velmora-text)] truncate">
                  {product.name}
                </h3>
                <p className="text-xs text-[var(--velmora-text-muted)] mt-1 truncate">
                  {product.subtitle}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-medium">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[var(--velmora-accent)] text-[var(--velmora-accent)]" />
                    <span className="text-xs text-[var(--velmora-text-muted)]">{product.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
