import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag, Gem } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { products } from '@/data/products';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-espresso/50 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={cn(
          'fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-sand-50 shadow-2xl transition-transform duration-500 ease-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-espresso/10">
          <h2 className="font-serif text-xl tracking-wide text-espresso">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 text-espresso/50 hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-espresso/20 mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-espresso/50 mb-2">Your bag is empty</p>
              <p className="text-sm text-espresso/30">Discover something beautiful.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                return (
                  <li key={item.key} className="flex gap-4 py-4 border-b border-espresso/5 last:border-0">
                    {/* Product thumbnail */}
                    <div className="w-20 h-20 bg-sand-200 flex-shrink-0 flex items-center justify-center">
                      <Gem className="w-8 h-8 text-gold/40" strokeWidth={1} />
                    </div>

                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <p className="font-serif text-sm tracking-wider uppercase text-espresso truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-espresso/40 mt-0.5 capitalize">{item.variant}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity */}
                        <div className="flex items-center border border-espresso/15">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="p-1.5 text-espresso/50 hover:text-espresso transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-medium text-espresso tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="p-1.5 text-espresso/50 hover:text-espresso transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-espresso">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.key)}
                      className="self-start p-1 text-espresso/30 hover:text-espresso transition-colors"
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
          <div className="border-t border-espresso/10 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-espresso/60 tracking-wide uppercase">Subtotal</span>
              <span className="font-serif text-xl text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-espresso/40">Shipping & taxes calculated at checkout.</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
