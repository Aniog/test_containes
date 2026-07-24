import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-[var(--color-cream-dark)] overflow-hidden mb-4">
          <img
            src={product.images[isHovered ? 1 : 0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-[var(--color-cream)] text-[var(--color-charcoal)] text-xs font-sans font-medium tracking-wider uppercase transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } hover:bg-[var(--color-warm-gold)]`}
          >
            Quick Add
          </button>
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="product-name text-[var(--color-charcoal)]">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1 mt-2">
            <Star size={12} fill="var(--color-warm-gold)" stroke="var(--color-warm-gold)" />
            <span className="text-xs text-[var(--color-stone)]">
              {product.rating} ({product.reviews})
            </span>
          </div>
          <p className="mt-2 font-sans text-sm text-[var(--color-charcoal)]">
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-charcoal)]">
            Bestsellers
          </h2>
          <p className="mt-4 text-[var(--color-stone)] max-w-md mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block btn-outline"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}