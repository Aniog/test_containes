import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';
import ImageLoader from '@/components/ImageLoader';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, count } = useCart();
  const location = useLocation();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') closeCart();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  useEffect(() => {
    if (isOpen) closeCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-cream shadow-lift transform transition-transform duration-300 ease-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl uppercase tracking-extra-wide text-espresso">
            Your Cart ({count})
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-taupe hover:text-espresso transition-colors">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="text-hairline mb-4" />
            <p className="font-serif text-lg text-espresso">Your cart is empty</p>
            <p className="text-sm text-taupe mt-2">Discover something treasured.</p>
            <button
              onClick={closeCart}
              className="mt-6 bg-espresso text-cream px-8 py-3 text-xs uppercase tracking-extra-wide hover:bg-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ImageLoader deps={[isOpen, items.length]} className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
                    <div className="w-20 h-24 bg-sand flex-shrink-0 overflow-hidden">
                      <img
                        data-strk-img-id={item.imgId}
                        data-strk-img={item.imageQuery}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src={PLACEHOLDER}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <p className="font-serif text-sm uppercase tracking-extra-wide text-espresso truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-taupe mt-1 capitalize">{item.tone} tone</p>
                      <p className="text-sm font-medium mt-1">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-hairline">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-2 hover:bg-sand transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-2 hover:bg-sand transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.cartItemId)}
                        className="text-taupe hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </ImageLoader>

            <div className="border-t border-hairline px-6 py-6 space-y-4">
              <div className="flex items-center justify-between text-espresso">
                <span className="text-sm">Subtotal</span>
                <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-taupe">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-gold text-cream py-4 text-xs uppercase tracking-extra-wide font-medium hover:bg-gold-hover transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-espresso text-espresso py-3 text-xs uppercase tracking-extra-wide hover:bg-espresso hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
