import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden mb-4">
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className={`absolute bottom-4 left-4 right-4 bg-velmora-cream text-velmora-charcoal py-3 text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 className="product-name text-xs mb-1 group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
            />
          ))}
        </div>
        <span className="text-xs text-velmora-warm-gray">({product.reviews})</span>
      </div>
      <p className="text-sm mt-1">${product.price}</p>
    </div>
  );
}

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Bestsellers</h2>
          <p className="text-velmora-warm-gray max-w-xl mx-auto">
            Our most loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}