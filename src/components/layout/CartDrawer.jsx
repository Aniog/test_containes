import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col animate-slide-in-right shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-sand">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-display text-lg tracking-widest uppercase text-obsidian">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-xs font-sans text-muted">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-ink transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-whisper" />
              <p className="font-display text-xl text-muted italic">Your cart is empty</p>
              <p className="text-xs font-sans text-whisper tracking-wide">
                Discover our collection and add something beautiful.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-xs tracking-widest uppercase font-sans font-medium text-gold border border-gold px-8 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 pb-6 border-b border-sand last:border-0">
                  {/* Product thumbnail — styled placeholder, no stock image needed in cart */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 flex items-center justify-center">
                    <span className="font-display text-2xl text-gold/60 select-none">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="product-name text-xs text-obsidian leading-tight mb-1">
                      {item.product.name}
                    </p>
                    <p className="text-xs font-sans text-muted mb-3">{item.variant}</p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-3 border border-sand">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-sans text-ink w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-sans text-sm font-medium text-obsidian">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-whisper hover:text-muted transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={14} />
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
          <div className="px-8 py-6 border-t border-sand bg-linen">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-sans tracking-widest uppercase text-muted">Subtotal</span>
              <span className="font-display text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs font-sans text-whisper mb-6">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-ivory text-xs tracking-widest uppercase font-sans font-medium py-4 hover:bg-charcoal transition-colors duration-300 mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-sand text-ink text-xs tracking-widest uppercase font-sans font-medium py-3 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
