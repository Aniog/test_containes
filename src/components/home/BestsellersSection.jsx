import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      {/* Image container */}
      <div className="relative overflow-hidden bg-velmora-linen aspect-portrait">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="font-inter text-[10px] font-medium uppercase tracking-widest bg-velmora-obsidian text-velmora-white px-2.5 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-inter text-[10px] font-medium uppercase tracking-widest bg-velmora-gold text-velmora-obsidian px-2.5 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-white font-inter text-xs font-medium uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        <p
          id={product.titleId}
          className="font-cormorant text-base font-medium uppercase tracking-widest text-velmora-obsidian leading-tight mb-1 group-hover:text-velmora-gold-dark transition-colors duration-300"
        >
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="font-inter text-sm font-light text-velmora-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" strokeWidth={0} />
            <span className="font-inter text-xs text-velmora-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-cormorant font-light text-4xl md:text-5xl text-velmora-obsidian">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block font-inter text-xs font-medium uppercase tracking-widest border border-velmora-obsidian text-velmora-obsidian px-10 py-4 hover:bg-velmora-obsidian hover:text-velmora-white transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
