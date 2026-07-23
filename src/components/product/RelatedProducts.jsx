import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const RelatedProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants?.[0] || null);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square bg-sand/30 overflow-hidden mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick Add */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-0 left-0 right-0 py-3 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
            isAdded
              ? 'bg-green-600 text-white'
              : 'bg-charcoal/90 text-ivory opacity-0 group-hover:opacity-100'
          }`}
        >
          {isAdded ? 'Added!' : (
            <>
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </>
          )}
        </button>
      </div>

      {/* Info */}
      <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-charcoal mb-1">
        {product.name}
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-xs text-warm-gray">{product.rating}</span>
        </div>
        <p className="text-sm font-semibold text-charcoal">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

const RelatedProducts = ({ currentProductId }) => {
  const relatedProducts = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <section className="py-16 bg-sand/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
            You May Also Love
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
            <RelatedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
