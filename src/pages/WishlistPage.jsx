import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function WishlistPage() {
  const containerRef = useRef(null);
  const { wishlist, toggleWishlist, addToCart } = useCart();
  const wishlisted = products.filter(p => wishlist.includes(p.id));

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [wishlist]);

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20" ref={containerRef}>
      <div className="py-16 md:py-24 px-6 md:px-10 text-center border-b border-cream-dark">
        <p className="label-caps text-gold mb-4">Saved</p>
        <h1
          className="font-serif text-5xl md:text-6xl text-ink font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Your Wishlist
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        {wishlisted.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={32} strokeWidth={1} className="text-gold mx-auto mb-6" />
            <p className="font-serif text-2xl text-ink/40 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Nothing saved yet
            </p>
            <p className="label-caps text-muted mb-8">The hours are waiting</p>
            <Link to="/shop" className="btn-primary">
              Explore the Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {wishlisted.map(product => (
              <div key={product.id} className="group relative">
                <Link to={`/products/${product.slug}`} className="block">
                  <div className="overflow-hidden bg-cream-dark aspect-[3/4]">
                    <img
                      data-strk-img-id={`wish-${product.imgId}`}
                      data-strk-img={`[wish-${product.id}-desc] [wish-${product.id}-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover img-hover"
                    />
                  </div>
                  <p
                    id={`wish-${product.id}-title`}
                    className="font-serif text-lg text-ink mt-3 font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {product.name}
                  </p>
                  <p id={`wish-${product.id}-desc`} className="label-caps text-muted mt-1" style={{ fontSize: '10px' }}>
                    ${product.price}
                  </p>
                </Link>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => addToCart(product, product.sizes?.[0])}
                    className="btn-primary flex-1 text-xs py-2"
                    style={{ padding: '10px 16px', fontSize: '10px' }}
                  >
                    Add to Bag
                  </button>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="w-10 h-10 border border-ink/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
                    aria-label="Remove from wishlist"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
