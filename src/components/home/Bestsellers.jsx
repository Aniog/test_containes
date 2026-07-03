import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Bestsellers</h2>
          <p className="mt-3 text-sm text-warm-500 font-sans max-w-lg mx-auto">
            Our most-loved pieces, chosen by women who refuse to compromise on quality or style.
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
            className="inline-block border border-ink text-ink px-8 py-3 text-sm tracking-wide-xl uppercase font-sans hover:bg-ink hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-warm-200 overflow-hidden rounded-sm">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      </Link>

      {/* Quick add button */}
      <button
        onClick={() => addItem(product)}
        className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm hover:bg-gold-400 hover:text-white"
        aria-label="Quick add to cart"
      >
        <ShoppingBag className="w-4 h-4" />
      </button>

      <div className="mt-3 space-y-1">
        <h3 className="text-[11px] md:text-xs tracking-wide-lg uppercase font-sans font-medium text-ink">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
          <span className="text-[10px] text-warm-500">{product.rating}</span>
        </div>
        <p className="text-sm font-medium text-ink">${product.price}</p>
      </div>
    </div>
  );
}