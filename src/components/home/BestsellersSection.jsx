import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4">
        <img
          data-strk-img-id={`bestseller-${product.images[0].id}`}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        {/* Second image on hover */}
        <img
          data-strk-img-id={`bestseller-hover-${product.images[1].id}`}
          data-strk-img={`[${product.id}-detail] [${product.id}-title] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Quick add button */}
        <button
          onClick={() => addToCart(product, product.variants[0])}
          className={`absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
      <Link to={`/product/${product.id}`}>
        <h3 className="product-name text-sm mb-1 group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
      </Link>
      <p className="text-xs text-muted-foreground mb-2">{product.description}</p>
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'
            }`}
          />
        ))}
        <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </div>
  );
}

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 id="bestsellers-title" className="serif-heading text-3xl md:text-4xl font-light mb-3">
          Bestsellers
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Our most loved pieces, chosen by women who know what matters.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline inline-block">
          View All
        </Link>
      </div>
    </section>
  );
}
