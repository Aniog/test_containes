import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart, useCartActions } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, drawerOpen } = useCart();
  const { removeItem, updateQuantity, closeDrawer, subtotal } = useCartActions();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity duration-400 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-velmora-cream shadow-2xl transform transition-transform duration-500 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone/60">
            <h2 className="font-serif text-lg tracking-wide text-velmora-charcoal">
              Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
            <button onClick={closeDrawer} className="p-1 text-velmora-warmgray hover:text-velmora-charcoal transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-velmora-warmgray">
                <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
                <p className="text-sm">Your bag is empty.</p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="mt-4 text-sm font-medium text-velmora-gold hover:text-velmora-golddark underline underline-offset-4 transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4 py-3 border-b border-velmora-stone/30 last:border-0">
                    <div className="w-20 h-24 flex-shrink-0 bg-velmora-sand rounded-sm overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-[11px] mb-1">{item.name}</h3>
                      <p className="text-xs text-velmora-warmgray mb-2">{item.variant} tone</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-stone/60 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:text-velmora-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:text-velmora-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-velmora-charcoal">${(item.price * item.quantity).toFixed(0)}</p>
                          <button
                            onClick={() => removeItem(item.productId, item.variant)}
                            className="text-[10px] text-velmora-warmgray hover:text-velmora-rose underline underline-offset-2 transition-colors mt-0.5"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-stone/60 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-velmora-warmgray">Subtotal</span>
                <span className="font-serif text-lg text-velmora-charcoal">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-[11px] text-velmora-warmgray/70">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={closeDrawer}
                className="w-full text-center text-xs text-velmora-warmgray hover:text-velmora-charcoal underline underline-offset-4 transition-colors"
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
