import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import { StockImage } from '@/components/ui/StockImage';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function BestsellersSection() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);
  const sectionRef = useRevealOnScroll();

  const bestsellers = products.filter(p => p.badge === 'Bestseller' || p.rating >= 4.7).slice(0, 5);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        // Images are handled by StockImage component
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <section className="section-padding bg-background" ref={sectionRef}>
      <div className="container-padding">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-3">Bestsellers</h2>
          <p className="text-sm text-muted-foreground tracking-wide">Our most loved pieces, chosen by you</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className={`group cursor-pointer reveal reveal-delay-${Math.min(index + 1, 4)}`}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                <StockImage
                  imgId={`bestseller-${product.images[0].id}`}
                  query={product.images[0].query}
                  ratio="3x4"
                  width="400"
                  className="transition-opacity duration-500"
                  alt={product.name}
                />
                {/* Second image on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <StockImage
                    imgId={`bestseller-hover-${product.images[1]?.id || product.images[0].id}`}
                    query={product.images[1]?.query || product.images[0].query}
                    ratio="3x4"
                    width="400"
                    alt={product.name}
                  />
                </div>

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#1a1714] text-white text-[10px] uppercase tracking-widest px-2.5 py-1">
                    {product.badge}
                  </span>
                )}

                {/* Quick Add */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addItem(product, 'gold', 1);
                  }}
                  className="absolute bottom-3 left-3 right-3 bg-[#1a1714] text-white text-[10px] uppercase tracking-widest py-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#c9a96e] hover:text-[#1a1714]"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </div>

              {/* Info */}
              <Link to={`/product/${product.id}`}>
                <h3 className="product-name text-xs md:text-sm mb-1.5 group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-1.5">
                  <StarRating rating={product.rating} />
                  <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
                </div>
                <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12 reveal">
          <Link to="/shop" className="btn-outline inline-block">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
