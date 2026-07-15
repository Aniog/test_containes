import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function BestsellersGrid() {
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding py-16 lg:py-24">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="serif-heading text-3xl sm:text-4xl lg:text-5xl mb-3">Bestsellers</h2>
          <p className="text-sm text-muted-foreground tracking-wide">Our most loved pieces</p>
        </div>

        {/* Hidden text elements for stock image queries */}
        <div className="sr-only">
          {products.map((product) => (
            <div key={`hidden-${product.id}`}>
              <p id={`${product.id}-name`}>gold {product.category} jewelry</p>
              <p id={`${product.id}-desc`}>18K gold plated {product.category} for women</p>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
                <img
                  alt={product.name}
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={`[${product.id}-desc] [${product.id}-name] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] tracking-widest uppercase px-3 py-1.5">
                    {product.badge}
                  </span>
                )}

                {/* Quick Add */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem(product, product.variants[0]);
                    }}
                    className="w-full bg-white/95 backdrop-blur-sm text-foreground text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-foreground hover:text-white transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <h3 className="product-name text-xs sm:text-sm mb-1.5 truncate">{product.name}</h3>
              <p className="text-sm text-muted-foreground">${product.price}</p>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
