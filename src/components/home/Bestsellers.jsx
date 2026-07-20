import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[3/4] bg-linen">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 flex items-center justify-center gap-2 uppercase tracking-widest text-[10px] font-medium transition-all duration-300 hover:bg-gold hover:text-white ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </Link>

      {/* Info */}
      <div className="mt-3">
        <h3 id={product.titleId} className="text-xs uppercase tracking-product font-medium text-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="text-sm text-stone mt-1">${product.price}</p>
      </div>
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-charcoal">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-stone">Our most-loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-gold hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
