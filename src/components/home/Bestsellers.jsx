import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={`/product/${product.id}`} className="block no-underline">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          />
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] [bestsellers-title] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          />
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => { e.preventDefault(); addItem(product); }}
        className={`absolute bottom-20 left-4 right-4 bg-white/95 backdrop-blur-sm text-charcoal text-xs uppercase tracking-btn font-medium py-2.5 border border-sand hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 cursor-pointer ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        Add to Cart
      </button>

      <div className="pt-4">
        <h3 id={product.titleId} className="text-product text-sm font-serif text-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="text-sm text-stone mt-1">${product.price}</p>
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
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-charcoal">
          Bestsellers
        </h2>
        <p className="text-stone text-sm mt-3">Our most-loved pieces, chosen by you</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block text-xs uppercase tracking-btn font-medium px-8 py-3 transition-all duration-300 no-underline"
          style={{ border: '1px solid #B8860B', color: '#B8860B' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B8860B'; e.currentTarget.style.color = '#ffffff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#B8860B'; }}
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
