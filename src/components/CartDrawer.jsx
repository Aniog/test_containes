import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-base/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[60] bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-2xl">Your Bag</h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-hairline mb-4" />
              <p className="font-serif text-xl mb-2">Your bag is empty</p>
              <p className="text-muted text-sm mb-6">Discover our collection and find something you love.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block bg-gold text-white px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gold-hover transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <li key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                      <img
                        src={`https://image.pollinations.ai/prompt/${encodeURIComponent(product?.imageQuery || 'gold jewelry')}?width=200&height=240&nologo=true`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <p className="font-serif text-base leading-tight">{item.name}</p>
                        <p className="text-xs text-muted mt-1 uppercase tracking-wider">
                          {item.variant} Tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-hairline">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.cartId)}
                      className="self-start p-1 text-muted hover:text-base transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-widest text-muted">Subtotal</span>
              <span className="font-serif text-xl">${subtotal}</span>
            </div>
            <p className="text-xs text-muted mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-gold text-white py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-gold-hover transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 border border-hairline text-base py-3.5 text-xs uppercase tracking-widest font-medium hover:border-gold hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
