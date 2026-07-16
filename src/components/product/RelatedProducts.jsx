import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function RelatedProducts({ currentProductId }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);

  const related = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">You May Also Like</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {related.map((product) => (
          <div
            key={product.id}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link to={`/product/${product.slug}`} className="block">
              <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {hoveredId === product.id && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, 'Gold', 1);
                    }}
                    className="absolute bottom-3 left-3 right-3 bg-velmora-charcoal/90 text-white text-[11px] font-medium tracking-wider uppercase py-2.5 text-center hover:bg-velmora-gold transition-colors"
                  >
                    Quick Add to Bag
                  </button>
                )}
              </div>
            </Link>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={product.titleId}
                className="product-name text-[11px] md:text-xs mb-1 hover:text-velmora-gold transition-colors"
              >
                {product.name}
              </h3>
            </Link>
            <p id={product.descId} className="sr-only">{product.description}</p>
            <p className="text-sm font-medium text-velmora-charcoal">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}