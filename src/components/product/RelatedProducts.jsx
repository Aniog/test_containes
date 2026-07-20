import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/data';
import { useCartDispatch } from '@/lib/CartContext';

export default function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const dispatch = useCartDispatch();
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', product, variant: 'Gold', quantity: 1 });
    dispatch({ type: 'OPEN_DRAWER' });
  };

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
      <h2 className="serif-heading text-2xl md:text-3xl text-espresso mb-10 text-center">
        You May Also Like
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group block">
            <div className="relative aspect-square bg-sand overflow-hidden mb-4">
              <img
                alt={product.name}
                data-strk-img-id={`related-${product.id}`}
                data-strk-img={`[related-name-${product.id}]`}
                data-strk-img-ratio={product.imageRatio}
                data-strk-img-width={product.imageWidth}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="sr-only" id={`related-name-${product.id}`}>
                {product.name} demi-fine jewelry
              </span>
              <div className="absolute top-3 right-3 flex items-center gap-0.5 bg-cream/90 backdrop-blur-sm px-2 py-1 rounded-sm">
                <Star className="w-2.5 h-2.5 fill-gold text-gold" />
                <span className="text-[10px] font-medium text-espresso">{product.rating}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-espresso/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="w-full bg-cream text-espresso text-xs tracking-widest uppercase py-2 font-medium hover:bg-gold hover:text-white transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <h3 className="font-serif text-xs tracking-widest uppercase text-espresso truncate">
              {product.name}
            </h3>
            <p className="text-sm text-espresso font-medium mt-1">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
