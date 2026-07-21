import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Star, Plus } from 'lucide-react';

export default function Bestsellers({ products }) {
  const { addToCart } = useCart();

  return (
    <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">BestSellers</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-secondary">
          View All Collections
        </Link>
      </div>
    </section>
  );
}

function ProductCard({ product, addToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-velmora-beige">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className="quick-add"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="product-name text-sm">{product.name}</h3>

        <div className="flex items-center space-x-2">
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="font-sans text-xs text-velmora-muted">({product.reviews})</span>
        </div>

        <p className="font-serif text-lg">${product.price}</p>
      </div>
    </Link>
  );
}
