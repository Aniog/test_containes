import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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
      <div className="relative overflow-hidden bg-velmora-stone aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] worn jewelry model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-velmora-obsidian text-white text-[9px] uppercase tracking-widest font-sans px-2 py-1">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velmora-gold text-velmora-obsidian text-[9px] uppercase tracking-widest font-sans px-2 py-1">New</span>
          )}
        </div>
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-sans font-semibold py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-200"
          >
            <ShoppingBag size={13} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>
      <div>
        <h3
          id={`shop-${product.titleId}`}
          className="font-serif text-sm uppercase tracking-widest text-velmora-ink group-hover:text-velmora-gold transition-colors duration-200 mb-1"
        >
          {product.name}
        </h3>
        <p id={`shop-${product.descId}`} className="text-xs text-velmora-muted font-sans mb-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm font-semibold text-velmora-ink">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={11} className="text-velmora-gold" fill="currentColor" />
            <span className="text-xs text-velmora-muted font-sans">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest-xl font-sans text-velmora-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink mb-4">Bestsellers</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-ink text-velmora-ink text-xs uppercase tracking-widest font-semibold px-10 py-4 hover:bg-velmora-ink hover:text-white transition-all duration-200"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
