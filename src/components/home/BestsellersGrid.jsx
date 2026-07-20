import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="product-card group">
      <div className="product-card-image">
        <img
          data-strk-img-id={product.images[0].id}
          data-strk-img={`[${product.images[0].id}-text] [${product.id}-name] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <div className="product-card-overlay">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants[0]);
            }}
            className="bg-white text-velmora-black px-6 py-2 text-xs tracking-widest uppercase flex items-center gap-2 hover:bg-velmora-gold hover:text-white transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 id={`${product.id}-name`} className="font-sans text-xs tracking-widest uppercase text-velmora-black">
          {product.name}
        </h3>
        <p className="font-sans text-xs text-velmora-gray-dark mt-1">{product.description}</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-gray'}`}
            />
          ))}
          <span className="text-[10px] text-velmora-gray-dark ml-1">({product.reviews})</span>
        </div>
        <p className="font-sans text-sm mt-2 text-velmora-black">${product.price}</p>
      </div>
    </Link>
  );
};

const BestsellersGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="bestsellers-title" className="section-title">Bestsellers</h2>
        <p className="section-subtitle">Our most loved pieces, chosen by you</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/collection" className="btn-outline inline-block">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersGrid;
