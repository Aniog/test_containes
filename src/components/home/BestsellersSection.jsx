import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCartStore } from '../../store/cartStore';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#E8E2D9] rounded-sm overflow-hidden mb-4">
        {/* Primary image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#D4CFC7] to-[#E8E2D9]">
          <span className="text-muted-foreground text-xs tracking-wider">IMG</span>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#1A1714] text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#1A1714]/90 backdrop-blur-sm text-white py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1A1714] transition-colors rounded-sm"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="product-name text-sm text-foreground">{product.name}</h3>
        <div className="flex items-center gap-1">
          <Star size={12} className="fill-primary text-primary" />
          <span className="text-xs text-muted-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

const BestsellersSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-secondary">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
