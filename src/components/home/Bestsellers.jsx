import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.isBestseller);
  const { addItem } = useCart();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Bestsellers</h2>
        <p className="section-subtitle">
          Our most-loved pieces, curated for those who appreciate quiet luxury.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} addItem={addItem} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, addItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[4/5] bg-warm-100 overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100'
            }`}
          />
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0'
            }`}
            style={{ objectPosition: 'center 30%' }}
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-white/90 text-warm-900 text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 font-sans">
              New
            </span>
          )}
        </div>
      </Link>

      {/* Quick add button */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <button
          onClick={() => addItem(product)}
          className="w-full bg-white/95 backdrop-blur-sm text-warm-900 text-xs uppercase tracking-widest py-2.5 flex items-center justify-center gap-2 hover:bg-gold-300 hover:text-white transition-all duration-300 shadow-sm"
        >
          <ShoppingBag className="w-3 h-3" />
          Add to Cart
        </button>
      </div>

      <div className="mt-3 px-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-gold-300 text-gold-300" />
          <span className="text-warm-500 text-[11px]">{product.rating}</span>
        </div>
        <p className="product-price mt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}