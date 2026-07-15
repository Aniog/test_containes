import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[#E8E2DA] overflow-hidden mb-4">
        <img
          data-strk-img-id={`bestseller-${product.id}`}
          data-strk-img={`[${product.id}-subtitle] [${product.id}-name] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.15em] px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick Add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product, selectedVariant);
            }}
            className="w-full bg-white/95 backdrop-blur-sm text-foreground text-xs uppercase tracking-[0.15em] py-3 flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <h3
          id={`${product.id}-name`}
          className="text-sm uppercase tracking-[0.2em] text-foreground mb-1"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {product.name}
        </h3>
        <p
          id={`${product.id}-subtitle`}
          className="text-xs text-muted-foreground mb-2"
        >
          {product.subtitle}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-[#D4A843] text-[#D4A843]" />
            <span className="text-xs text-muted-foreground">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BestsellersSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="bestsellers-title"
            className="section-title mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Bestsellers
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Our most loved pieces, chosen by women who know what matters.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link to="/shop" className="btn-outline inline-block">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
