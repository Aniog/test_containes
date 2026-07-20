import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart, useCartDispatch } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, drawerOpen, subtotal, itemCount } = useCart();
  const { toggleDrawer, updateQuantity, removeItem } = useCartDispatch();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal/30 backdrop-blur-sm z-[60] transition-opacity duration-400 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl transition-transform duration-500 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
            <h2 className="font-serif text-lg tracking-wide">
              Your Bag ({itemCount})
            </h2>
            <button onClick={toggleDrawer} className="p-1" aria-label="Close cart">
              <X className="w-5 h-5 text-charcoal" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-taupe/40 mb-4" />
                <p className="text-taupe text-sm">Your bag is empty.</p>
                <Link
                  to="/shop"
                  onClick={toggleDrawer}
                  className="mt-4 btn-outline text-xs"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 py-3 border-b border-sand/50">
                    <div className="w-20 h-20 flex-shrink-0 bg-sand/30 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gold/20 to-rose/10" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-xs tracking-widest uppercase text-charcoal truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium text-charcoal mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-0.5 border border-sand rounded-sm"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-0.5 border border-sand rounded-sm"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-taupe underline hover:text-rose transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-sand px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-taupe">Subtotal</span>
                <span className="font-medium text-charcoal">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe">Shipping & taxes calculated at checkout</p>
              <button
                className="btn-primary w-full"
                onClick={() => alert('Checkout coming soon — this is a frontend preview.')}
              >
                Checkout
              </button>
              <button
                onClick={toggleDrawer}
                className="block w-full text-center text-xs text-taupe underline hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
