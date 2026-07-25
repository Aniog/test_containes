import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [imageHover, setImageHover] = React.useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setImageHover(true)}
      onMouseLeave={() => setImageHover(false)}
    >
      {/* Image */}
      <Link to={`/products/${product.id}`} className="block aspect-[3/4] bg-ivory rounded-sm overflow-hidden relative">
        <img
          src={imageHover && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/10 transition-colors duration-500" />
      </Link>

      {/* Quick Add Button */}
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        <button
          onClick={() => addItem(product.id)}
          className="w-full py-2.5 bg-cream/95 backdrop-blur-sm text-ink-900 text-xs font-sans font-medium tracking-wider uppercase 
                     hover:bg-cream transition-all duration-300 shadow-lg"
        >
          Quick Add
        </button>
      </div>

      {/* Info */}
      <div className="mt-3 px-1">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-product-name group-hover:text-gold-600 transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
          <span className="text-[11px] text-ink-500">{product.rating}</span>
          <span className="text-[11px] text-ink-300">({product.reviews})</span>
        </div>
        <p className="text-price mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-subtitle">Curated for You</span>
          <h2 className="section-title mt-3">Bestsellers</h2>
          <p className="mt-3 text-sm text-ink-500 font-sans max-w-md mx-auto">
            Our most-loved pieces, chosen by women who value quality and design.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}