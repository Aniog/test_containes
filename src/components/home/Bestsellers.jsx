import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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
        <div className="aspect-[3/4] overflow-hidden bg-brand-ivory rounded-sm">
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className={`absolute bottom-[88px] right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:bg-brand-gold hover:text-white ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingBag className="w-4 h-4" />
      </button>

      <div className="mt-4 text-center">
        <h3 className="text-xs tracking-product uppercase font-serif text-brand-charcoal">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm font-sans text-brand-muted">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-charcoal">
            Bestsellers
          </h2>
          <p className="mt-4 text-sm text-brand-muted font-sans">
            Our most-loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-brand-charcoal text-brand-charcoal px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-brand-charcoal hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
