import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product, onQuickAdd }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
          <img
            src={product.images[isHovered ? 1 : 0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickAdd(product);
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-cream/95 text-velmora-charcoal text-xs tracking-widest uppercase transition-all duration-300 hover:bg-velmora-gold ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Quick Add
          </button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-velmora-taupe">{product.rating} ({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm font-medium">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 lg:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-ultra uppercase text-velmora-taupe">Curated Selection</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 text-velmora-charcoal">Bestsellers</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickAdd={(p) => addToCart(p, 'gold', 1)}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-velmora-charcoal text-velmora-charcoal text-sm tracking-widest uppercase hover:bg-velmora-charcoal hover:text-velmora-cream transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}