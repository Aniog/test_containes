import { useRef, useEffect, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

export function Bestsellers() {
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-3">Bestsellers</h2>
          <p className="text-sm text-muted-foreground tracking-wide">Our most loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`${product.id}-main`}
                    data-strk-img={`[${product.id}-desc] [${product.id}-title] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    data-strk-img-id={`${product.id}-hover`}
                    data-strk-img={`[${product.id}-desc-hover] [${product.id}-title] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-2 py-1">
                      {product.badge}
                    </span>
                  )}

                  {/* Quick Add */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, product.variants[0]);
                      toast.success(`${product.name} added to cart`);
                    }}
                    className="absolute bottom-0 left-0 right-0 bg-foreground/90 text-background py-3 text-xs tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    Add to Cart
                  </button>
                </div>
              </Link>

              <h3 id={`${product.id}-title`} className="product-name text-xs md:text-sm mb-1">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h3>
              <p id={`${product.id}-desc`} className="text-xs text-muted-foreground mb-1 line-clamp-1">{product.shortDescription}</p>
              <div className="flex items-center gap-1 mb-1">
                <Star className="h-3 w-3 fill-primary text-primary" />
                <span className="text-xs">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
              <p className="text-sm font-medium">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
