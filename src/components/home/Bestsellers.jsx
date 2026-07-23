import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-cream-dark)] mb-4">
          <img
            src={product.images[isHovered ? 1 : 0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 'gold', 1);
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-[var(--color-cream)] text-[var(--color-charcoal)] text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } hover:bg-[var(--color-gold)] hover:text-white`}
          >
            Quick Add
          </button>
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="product-title">{product.name}</h3>
          <div className="flex items-center justify-center gap-1 mt-2">
            <Star className="w-3 h-3 fill-[var(--color-gold)] text-[var(--color-gold)]" />
            <span className="text-xs text-[var(--color-taupe)]">
              {product.rating} ({product.reviews})
            </span>
          </div>
          <p className="mt-2 text-sm font-medium">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-charcoal)] mb-4">
            Bestsellers
          </h2>
          <p className="text-[var(--color-taupe)] max-w-md mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-outline inline-flex"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}