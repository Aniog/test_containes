import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const bestsellers = products.filter((p) => p.isBestSeller);

export default function BestsellersSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-black">
            Bestsellers
          </h2>
          <p className="font-sans text-sm text-warm-muted mt-3 max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate timeless design.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-warm-beige/30">
          <img
            src={hovered && product.hoverImage ? product.hoverImage : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-white/90 text-warm-black text-[10px] uppercase tracking-widest font-sans font-medium px-2.5 py-1">
              New
            </span>
          )}
          {/* Quick Add overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="bg-white/90 backdrop-blur-sm text-warm-black text-[11px] uppercase tracking-wider font-sans font-medium px-5 py-2.5 flex items-center gap-2 shadow-sm hover:bg-white transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-3 px-0.5">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xs uppercase tracking-wide text-warm-black hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="font-sans text-[11px] text-warm-muted">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <p className="font-sans text-sm font-medium text-warm-black mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  );
}