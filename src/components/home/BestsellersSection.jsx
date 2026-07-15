import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const bestsellers = products;

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-gold fill-gold' : 'text-warm-border'}`}
        />
      ))}
      <span className="text-[10px] text-taupe ml-1">({rating.toFixed(1)})</span>
    </div>
  );
}

export default function BestsellersSection() {
  const containerRef = useRef(null);
  const { addItem, setCartOpen } = useCart();
  const [addingId, setAddingId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (product) => {
    setAddingId(product.id);
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      material: 'gold',
      quantity: 1,
      image: product.images[0].id,
    });
    setTimeout(() => {
      setAddingId(null);
      setCartOpen(true);
    }, 400);
  };

  const formatPrice = (price) => `$${price.toFixed(0)}`;

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Bestsellers</h2>
          <p className="mt-3 text-taupe text-sm md:text-base font-light max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate refined craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group relative">
              {/* Image */}
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-warm-light overflow-hidden">
                <img
                  data-strk-img-id={`bestseller-${product.id}-front`}
                  data-strk-img={`[product-name-${product.id}] [bestsellers-heading]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 absolute inset-0"
                />
                <img
                  data-strk-img-id={`bestseller-${product.id}-hover`}
                  data-strk-img={`[product-name-${product.id}] alternative view jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} worn`}
                  className="w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 absolute inset-0"
                />
              </Link>

              {/* Quick Add */}
              <button
                onClick={() => handleAddToCart(product)}
                disabled={addingId === product.id}
                className={`absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-ink text-[10px] uppercase tracking-[0.15em] py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 flex items-center justify-center gap-2 ${
                  addingId === product.id ? 'pointer-events-none' : ''
                }`}
              >
                {addingId === product.id ? (
                  <span className="flex items-center gap-1.5">
                    <svg className="animate-spin w-3 h-3" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                    Adding...
                  </span>
                ) : (
                  <>
                    <ShoppingBag className="w-3 h-3" />
                    Quick Add
                  </>
                )}
              </button>

              {/* Info */}
              <div className="mt-3 px-0.5">
                <h3 id={`product-name-${product.id}`} className="text-product-name text-ink truncate">
                  {product.name}
                </h3>
                <StarRating rating={product.rating} />
                <p className="font-serif italic text-base text-ink mt-1">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center border border-gold text-gold text-[11px] uppercase tracking-[0.2em] px-8 py-3.5 hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}