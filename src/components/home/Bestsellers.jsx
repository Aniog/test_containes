import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      variant: 'gold',
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-5">
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          hovered ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="w-full h-full bg-gradient-to-br from-velmora-gold/25 to-velmora-gold/5" />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-full h-full bg-gradient-to-tl from-velmora-gold/30 to-velmora-charcoal/5" />
        </div>

        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-4 left-4 right-4 z-10 py-3 text-center text-xs tracking-wider uppercase transition-all duration-300 ${
            added
              ? 'bg-green-700 text-white'
              : 'bg-velmora-charcoal/90 text-white opacity-0 group-hover:opacity-100 hover:bg-velmora-charcoal'
          }`}
        >
          {added ? 'Added ✓' : 'Quick Add'}
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-sm md:text-base tracking-[0.12em] uppercase leading-tight text-velmora-charcoal">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'text-velmora-mist/30'
              }`}
            />
          ))}
          <span className="text-[11px] text-velmora-stone ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-velmora-charcoal">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14 md:mb-16">
          <p className="caption mb-3">Curated for You</p>
          <h2 className="heading-lg text-velmora-charcoal">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
