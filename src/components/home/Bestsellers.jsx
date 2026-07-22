import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
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
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-3">
        <img
          data-strk-img-id={`bestseller-${product.id}-img`}
          data-strk-img={`[${product.id}-name] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`bestseller-${product.id}-img2`}
          data-strk-img={`[${product.id}-name] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-widest uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary/90 backdrop-blur-sm text-primary-foreground py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-accent transition-colors"
          >
            <ShoppingBag size={14} />
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Info */}
      <h3 className="product-name text-sm mb-1 group-hover:text-accent transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mb-1">
        <Star size={12} className="fill-accent text-accent" />
        <span className="text-xs text-muted-foreground">{product.rating}</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </Link>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="bestsellers-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-3">
            Bestsellers
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            The pieces our customers can't stop wearing
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
