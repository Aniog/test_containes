import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, product.variants[0].id);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-velvet-surface mb-4">
        <div className="aspect-[3/4]">
          <img
            data-strk-img-id={`grid-${product.id}-main`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            data-strk-img-id={`grid-${product.id}-hover`}
            data-strk-img={`[${product.descId}] [${product.titleId}] alternate view`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 bg-velvet-card p-2.5 rounded-full shadow-md transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-velvet-accent hover:text-white`}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Info */}
      <h3 id={product.titleId} className="font-serif text-xs uppercase tracking-[.12em] text-velvet-base mb-1">
        {product.name}
      </h3>
      <p id={product.descId} className="hidden">{product.description}</p>
      <div className="flex items-center gap-1.5 mb-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-velvet-accent text-velvet-accent'
                  : 'fill-velvet-border text-velvet-border'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-velvet-muted">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium tabular-nums">${product.price}</p>
    </Link>
  );
}

export default function BestsellersGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-velvet-card">
      <div className="container-wide">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-base mb-3">Bestsellers</h2>
          <p className="text-velvet-muted text-sm max-w-md mx-auto">The pieces our community reaches for every day.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
