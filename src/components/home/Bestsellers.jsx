import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const bestsellers = products.slice(0, 5);

const ProductCard = ({ product }) => {
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
      {/* Image container */}
      <div className="relative overflow-hidden bg-stone aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Tags */}
        {product.tags?.includes('new') && (
          <span className="absolute top-3 left-3 bg-gold text-espresso font-inter text-[9px] tracking-widest uppercase px-2 py-1">
            New
          </span>
        )}
        {product.tags?.includes('bestseller') && !product.tags?.includes('new') && (
          <span className="absolute top-3 left-3 bg-espresso text-cream font-inter text-[9px] tracking-widest uppercase px-2 py-1">
            Bestseller
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 bg-espresso text-cream font-inter text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <ShoppingBag className="w-3 h-3" />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      {/* Info */}
      <div className="pt-3 pb-1">
        <p
          id={product.titleId}
          className="font-cormorant text-sm font-medium tracking-widest uppercase text-charcoal leading-tight"
        >
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-2.5 h-2.5"
                style={{
                  color: i < Math.floor(product.rating) ? '#C9A96E' : '#E2D9CF',
                  fill: i < Math.floor(product.rating) ? '#C9A96E' : '#E2D9CF',
                }}
              />
            ))}
            <span className="font-inter text-[10px] text-warm-gray ml-1">({product.reviewCount})</span>
          </div>
          <p className="font-inter text-sm font-medium text-charcoal">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
              Our Favourites
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-inter text-xs tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
