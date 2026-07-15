import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const bestsellers = products.slice(0, 5);

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-ink-400 mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-900 font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} addItem={addItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, addItem }) {
  const [hovered, setHovered] = useState(false);
  const [adding, setAdding] = useState(false);
  const productNameId = `bs-name-${product.id}`;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdding(true);
    addItem(product, '18K Gold', 1);
    setTimeout(() => setAdding(false), 1200);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-cream-100 overflow-hidden mb-3">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${productNameId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src={product.images[1] || product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-ink-900 py-2.5 text-xs tracking-wider uppercase font-sans flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          {adding ? 'Added!' : 'Quick Add'}
        </button>

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-gold-500 text-white text-[10px] tracking-widest uppercase px-2 py-1 font-sans">
            New
          </span>
        )}
      </div>

      {/* Product info */}
      <h3 id={productNameId} className="font-serif text-xs tracking-widest text-ink-900 uppercase">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mt-1">
        <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
        <span className="text-[11px] text-ink-500 font-sans">{product.rating}</span>
      </div>
      <p className="font-serif text-gold-600 text-sm mt-1">${product.price}</p>
    </Link>
  );
}