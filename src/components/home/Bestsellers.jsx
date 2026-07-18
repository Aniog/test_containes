import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem, openDrawer } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const bestsellers = products.slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    openDrawer();
  };

  return (
    <section ref={containerRef} className="section-padding py-16 md:py-24">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
          Our Bestsellers
        </h2>
        <p className="mt-3 text-sm text-velmora-warmgray max-w-md mx-auto">
          The pieces our community returns to — crafted in 18K gold plate, designed for the everyday and the extraordinary.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map(product => {
          const isHovered = hoveredId === product.id;
          return (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
                <img
                  alt={product.shortName}
                  data-strk-img-id={`bestseller-${product.id}-${isHovered ? product.imgId2 : product.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="hidden" id={product.titleId}>{product.shortName}</span>
                <span className="hidden" id={product.descId}>{product.description}</span>

                {/* Hover overlay - Add to Cart */}
                <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full bg-velmora-charcoal/90 backdrop-blur-sm text-white py-2.5 flex items-center justify-center gap-2 text-[11px] tracking-widest uppercase hover:bg-velmora-gold transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="mt-3 md:mt-4 text-center">
                <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-velmora-charcoal leading-tight">
                  {product.shortName}
                </h3>
                <div className="flex items-center justify-center gap-1 mt-1.5">
                  <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                  <span className="text-xs text-velmora-warmgray">{product.rating} ({product.reviewCount})</span>
                </div>
                <p className="mt-1 text-sm font-medium text-velmora-charcoal">${product.price}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <Link to="/shop" className="btn-outline">
          View All
        </Link>
      </div>
    </section>
  );
}
