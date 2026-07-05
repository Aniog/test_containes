import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-portrait">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-obsidian/90 py-3 px-4">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full font-manrope text-[10px] tracking-widest uppercase text-parchment hover:text-gold transition-colors duration-200"
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4 pb-2">
        <span id={product.titleId} className="font-cormorant text-base uppercase tracking-widest2 text-ink block leading-tight">
          {product.name}
        </span>
        <span id={product.descId} className="sr-only">{product.shortDescription}</span>
        <div className="flex items-center justify-between mt-2">
          <span className="font-manrope text-sm font-medium text-ink">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-manrope text-[10px] text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-manrope text-[10px] tracking-widest uppercase text-gold mb-3">Curated for You</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300 border-b border-divider pb-0.5 self-start md:self-auto"
          >
            View All →
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
};

export default Bestsellers;
