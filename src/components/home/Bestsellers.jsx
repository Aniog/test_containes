import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-border/30 mb-4">
        <img
          data-strk-img-id={product.images[0].id}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.shortName}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-dark text-velmora-dark-text text-xs tracking-wider uppercase px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick Add */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-dark/90 backdrop-blur-sm text-velmora-dark-text py-3 text-xs tracking-widest uppercase hover:bg-velmora-accent transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <Link to={`/product/${product.id}`}>
        <h3 id={`${product.id}-title`} className="font-serif text-lg tracking-wider uppercase text-velmora-text group-hover:text-velmora-accent transition-colors">
          {product.name}
        </h3>
        <p id={`${product.id}-desc`} className="text-xs text-velmora-muted mt-1 line-clamp-1">
          {product.description}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-velmora-accent text-velmora-accent" />
            <span className="text-xs text-velmora-secondary">{product.rating}</span>
          </div>
          <span className="text-xs text-velmora-muted">({product.reviews})</span>
        </div>
        <p className="text-velmora-text font-medium mt-1">${product.price}</p>
      </Link>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-velmora-text mb-3">
            Bestsellers
          </h2>
          <p className="text-velmora-secondary text-sm md:text-base max-w-md mx-auto">
            Our most loved pieces, chosen by women who know what matters.
          </p>
          <div className="w-12 h-px bg-velmora-border-thin mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-text text-velmora-text px-8 py-3 text-sm tracking-widest uppercase hover:bg-velmora-text hover:text-velmora-dark-text transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
