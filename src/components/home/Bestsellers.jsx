import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getBestsellers } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Tags */}
        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-obsidian text-cream font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
            New
          </span>
        )}
        {product.tags.includes('bestseller') && !product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
            Bestseller
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 bg-obsidian/90 text-cream font-manrope text-[10px] tracking-widest uppercase py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian"
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      <div className="pt-3 pb-1">
        {/* Hidden text for image query */}
        <span id={product.titleId} className="sr-only">{product.name}</span>
        <span id={product.descId} className="sr-only">{product.shortDescription}</span>

        <p className="font-cormorant text-base uppercase tracking-[0.12em] text-ink leading-tight">
          {product.name}
        </p>
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={9}
              className={i < Math.floor(product.rating) ? 'fill-current text-gold' : 'fill-current text-linen'}
            />
          ))}
          <span className="font-manrope text-[10px] text-ink-faint ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-manrope text-sm text-ink mt-1.5">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);
  const products = getBestsellers();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2">Curated for You</p>
            <h2 className="font-cormorant text-4xl md:text-5xl text-ink font-light">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs tracking-widest uppercase text-ink-muted border-b border-ink-muted pb-0.5 hover:text-gold hover:border-gold transition-colors self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
