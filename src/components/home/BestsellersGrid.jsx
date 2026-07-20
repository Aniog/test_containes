import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-background overflow-hidden mb-4">
        <img
          data-strk-img-id={`bestseller-${product.images[0].id}`}
          data-strk-img={product.images[0].query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.shortName}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        {/* Second image on hover */}
        <img
          data-strk-img-id={`bestseller-hover-${product.images[1].id}`}
          data-strk-img={product.images[1].query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.shortName}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-accent text-white text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        {/* Quick add */}
        <button
          onClick={() => onAddToCart(product)}
          className={`absolute bottom-3 left-3 right-3 bg-dark/90 text-dark-text py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Bag
        </button>
      </div>

      {/* Info */}
      <Link to={`/product/${product.id}`} className="block">
        <h3 className="text-sm tracking-widest uppercase text-text-primary group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-accent text-accent" />
          <span className="text-xs text-text-secondary">{product.rating}</span>
          <span className="text-xs text-text-muted">({product.reviews})</span>
        </div>
        <p className="text-sm text-text-primary mt-1">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
};

const BestsellersGrid = () => {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const handleAddToCart = (product) => {
    addItem(product, 'gold');
  };

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-3">Bestsellers</h2>
          <div className="w-12 h-px bg-accent mx-auto mb-4" />
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know that everyday luxury matters.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-text-primary text-text-primary px-8 py-3 text-sm tracking-widest uppercase hover:bg-text-primary hover:text-dark-text transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersGrid;
