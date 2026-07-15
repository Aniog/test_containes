import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { Plus } from 'lucide-react';

const Bestsellers = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, setCartOpen } = useCart();
  const bestsellers = products.filter((p) => p.bestseller);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
    setCartOpen(true);
  };

  return (
    <section className="py-20 md:py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">Bestsellers</h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Our most-loved pieces, chosen by you. Timeless designs that become part of your everyday story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[3/4] bg-brand-warm relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-brand-muted uppercase tracking-wider">Image</span>
                </div>
                {hoveredId === product.id && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300">
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="bg-white text-brand-charcoal p-3 rounded-full shadow-lg hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="product-name text-sm mb-1">{product.name}</h3>
                <p className="text-sm text-brand-muted">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
