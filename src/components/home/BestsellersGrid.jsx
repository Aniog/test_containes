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
        {/* Image */}
        <div className="relative aspect-[3/4] bg-linen overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-widest text-taupe">Image</span>
          </div>
          {/* Hover overlay with second image placeholder */}
          <div
            className={`absolute inset-0 bg-velvet/5 transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Tag */}
          {product.tag && (
            <span className="absolute top-3 left-3 px-2.5 py-1 bg-cream text-[10px] uppercase tracking-[0.15em] text-velvet font-medium">
              {product.tag}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="mt-4 text-center">
          <h3 className="font-serif text-sm md:text-base tracking-[0.15em] uppercase font-medium text-velvet">
            {product.name}
          </h3>
          <p className="mt-1.5 text-sm text-taupe font-light">${product.price}</p>
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product, 'gold', 1);
        }}
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 bg-cream text-velvet text-[10px] uppercase tracking-[0.15em] font-medium shadow-md transition-all duration-300 hover:bg-gold hover:text-velvet ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Quick Add
      </button>
    </div>
  );
}

export default function BestsellersGrid() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet font-medium">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-taupe font-light">
            Our most-loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3.5 border border-linen text-velvet text-xs uppercase tracking-[0.2em] font-medium hover:bg-linen transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
