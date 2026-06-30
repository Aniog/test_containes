import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';
import { products } from '../../data/products';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-cream-200 aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.id}-name] gold jewelry elegant dark background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover product-img-zoom"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal-800 text-cream-50 text-2xs tracking-widest-xl uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Hover add to cart */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, 'gold');
            }}
            className="w-full py-2.5 bg-charcoal-800/90 backdrop-blur-sm text-cream-50 text-2xs tracking-widest-xl uppercase font-medium hover:bg-charcoal-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4 text-center">
        <p
          id={`${product.id}-name`}
          className="font-serif text-sm tracking-widest-xl uppercase text-charcoal-800 mb-1"
        >
          {product.name}
        </p>
        <p className="text-sm text-charcoal-500 font-sans">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest-xl uppercase text-gold-500 mb-3 font-medium">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800" style={{ fontWeight: 400 }}>
            Bestsellers
          </h2>
          <div className="hairline max-w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-charcoal-800 text-charcoal-800 text-xs tracking-widest-xl uppercase font-medium px-8 py-3 hover:bg-charcoal-800 hover:text-cream-50 transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
