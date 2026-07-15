import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product, index }) {
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <button
            onClick={handleQuickAdd}
            className="w-full flex items-center justify-center gap-2 bg-velmora-charcoal/90 backdrop-blur-sm text-velmora-white py-3 text-caption uppercase tracking-widest-xl hover:bg-velmora-charcoal transition-colors"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="text-center">
        <h3 className="product-name text-[13px] md:text-sm text-velmora-charcoal mb-1.5 group-hover:text-velmora-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-body-sm text-velmora-muted">${product.price}</p>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={11}
              className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-light'}
              strokeWidth={1.5}
            />
          ))}
          <span className="text-[10px] text-velmora-muted ml-1">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-velmora-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-caption uppercase tracking-widest-2xl text-velmora-gold mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-heading-xl md:text-[3.5rem] text-velmora-charcoal">
            Bestsellers
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12 md:mt-16">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
