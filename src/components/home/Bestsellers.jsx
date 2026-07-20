import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, ArrowRight, Gem } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.bestseller).slice(0, 5);
  const { addToCart } = useCart();

  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="section-subheading mb-3">Curated Selection</p>
          <h2 className="section-heading">Bestsellers</h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-ultra-wide uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, addToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-velmora-cream rounded-sm overflow-hidden mb-4">
          {/* Placeholder gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-velmora-sand via-velmora-cream to-velmora-sand" />

          {/* Product silhouette */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-velmora-gold/20 to-velmora-gold/5 flex items-center justify-center">
              <Gem className="w-8 h-8 md:w-12 md:h-12 text-velmora-gold/40" />
            </div>
          </div>

          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-velmora-charcoal/10 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 'gold');
            }}
            className={`absolute bottom-3 left-3 right-3 bg-velmora-charcoal text-white py-2.5 font-sans text-xs tracking-ultra-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-sm md:text-base">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1.5 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}`}
            />
          ))}
          <span className="font-sans text-xs text-velmora-warm-gray ml-1">({product.reviewCount})</span>
        </div>
        <p className="price-text text-base mt-2">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
