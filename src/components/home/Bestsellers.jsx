import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const bestsellers = products.filter(p => p.bestseller);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Most Loved</p>
        <h2 className="serif-heading text-4xl lg:text-5xl">Bestsellers</h2>
        <div className="w-12 h-px bg-accent mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {bestsellers.map(product => (
          <div
            key={product.id}
            className="group"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4">
              <img
                data-strk-img-id={`best-${product.images[0].id}`}
                data-strk-img={`[${product.images[0].id}-title] [bestsellers]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.shortName}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <img
                data-strk-img-id={`best-${product.images[1].id}`}
                data-strk-img={`[${product.images[1].id}-title] [bestsellers]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.shortName}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Quick add */}
              <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
                hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                <button
                  onClick={() => addItem(product, product.variants[0])}
                  className="w-full bg-primary/90 backdrop-blur-sm text-primary-foreground py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-accent transition-colors"
                >
                  <ShoppingBag size={14} />
                  Add to Cart
                </button>
              </div>
            </div>

            <Link to={`/product/${product.id}`}>
              <h3 className="product-name text-xs lg:text-sm mb-1.5 group-hover:text-accent transition-colors">
                {product.shortName}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mb-1.5">
              <Star size={10} className="fill-accent text-accent" />
              <span className="text-xs text-muted-foreground">{product.rating}</span>
            </div>
            <p className="text-sm font-medium">${product.price}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline inline-block">
          View All Pieces
        </Link>
      </div>
    </section>
  );
}
