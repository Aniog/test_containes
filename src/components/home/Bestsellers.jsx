import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-obsidian/90 text-parchment text-[11px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-200"
          >
            <ShoppingBag size={13} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {/* Tags */}
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-gold text-obsidian text-[10px] tracking-widest uppercase px-2 py-1 font-semibold">
            Bestseller
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <p id={product.titleId} className="text-xs tracking-widest uppercase font-medium text-ink group-hover:text-gold transition-colors duration-200">
          {product.name}
        </p>
        <p id={product.descId} className="text-xs text-ink-faint mt-1 line-clamp-1">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-serif text-lg text-ink">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={11} className="text-gold fill-gold" />
            <span className="text-xs text-ink-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-gold mb-3 font-sans">Curated for You</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">Bestsellers</h2>
          <div className="w-10 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink text-xs tracking-widest uppercase px-10 py-3 hover:bg-ink hover:text-parchment transition-all duration-250"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
