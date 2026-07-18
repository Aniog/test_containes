import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product, onAddToCart, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative reveal reveal-delay-${Math.min(index + 1, 5)}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Quick add overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-brand-espresso/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-brand-gold" />
            <span className="font-sans text-xs tracking-super-wide uppercase text-brand-ivory">
              Add to Cart
            </span>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <h3 id={product.titleId} className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="font-sans text-sm text-brand-muted mt-1">${product.price}</p>
      </div>
      {/* Mobile add to cart */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onAddToCart(product);
        }}
        className="md:hidden mt-2 w-full border border-brand-gold text-brand-gold py-2 font-sans text-xs tracking-super-wide uppercase hover:bg-brand-gold hover:text-brand-ivory transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default function Bestsellers() {
  const sectionRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (sectionRef.current) {
      ImageHelper.loadImages(strkImgConfig, sectionRef.current);
    }
  }, []);

  const handleAddToCart = (product) => {
    addItem(product, product.tone[0], 1);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            Bestsellers
          </h2>
          <div className="reveal reveal-delay-1 w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              index={i}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="reveal inline-block border border-brand-gold text-brand-gold px-8 py-3 font-sans text-xs tracking-super-wide uppercase hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
