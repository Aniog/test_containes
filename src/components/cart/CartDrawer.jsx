import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warmgray-muted">
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <button onClick={closeCart} className="p-2 hover:text-gold transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <ShoppingBag className="w-12 h-12 text-warmgray-light" />
                <p className="text-warmgray font-medium">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="inline-block px-6 py-2.5 bg-charcoal text-white text-sm tracking-widest uppercase font-medium hover:bg-charcoal-soft transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-parchment rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-warmgray uppercase tracking-wider">IMG</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm tracking-widest uppercase truncate">{item.name}</p>
                        <p className="text-xs text-warmgray mt-0.5 capitalize">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-warmgray-light hover:text-charcoal transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-warmgray-muted">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-parchment transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-sm font-medium min-w-[1.5rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-parchment transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-medium text-sm">${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-warmgray-muted bg-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-warmgray">Subtotal</span>
                <span className="font-serif text-lg">${subtotal}</span>
              </div>
              <p className="text-xs text-warmgray mb-4">Shipping & taxes calculated at checkout.</p>
              <button className="w-full py-3.5 bg-gold text-white text-sm tracking-widest uppercase font-semibold hover:bg-gold-dark transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-3 mt-2 border border-charcoal text-charcoal text-sm tracking-widest uppercase font-medium hover:bg-charcoal hover:text-white transition-colors"
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
