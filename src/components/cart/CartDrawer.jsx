import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getStrkImage } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-lg tracking-[0.15em] uppercase text-text-primary">
            Your Bag ({items.length})
          </h2>
          <button onClick={closeCart} className="text-text-secondary hover:text-text-primary transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-sans text-sm text-text-secondary">Your bag is empty</p>
              <button
                onClick={closeCart}
                className="mt-4 font-sans text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const itemSrc = getStrkImage(item.imgId);

                return (
                  <div key={item.key} className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0 bg-muted overflow-hidden">
                      <img
                        alt={item.name}
                        src={itemSrc || undefined}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        id={item.titleId}
                        className="font-serif text-xs tracking-[0.15em] uppercase text-text-primary truncate"
                      >
                        {item.name}
                      </h4>
                      <p
                        id={item.descId}
                        className="sr-only"
                      >
                        {item.description}
                      </p>
                      <p className="font-sans text-xs text-text-secondary mt-0.5">{item.variant}</p>
                      <p className="font-sans text-sm text-text-primary mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
                            aria-label="Decrease"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 h-7 flex items-center justify-center font-sans text-xs text-text-primary border-x border-border">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
                            aria-label="Increase"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="font-sans text-xs text-text-secondary hover:text-gold transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-[0.15em] uppercase text-text-secondary">Subtotal</span>
              <span className="font-serif text-lg text-text-primary">${totalPrice}</span>
            </div>
            <p className="font-sans text-xs text-text-secondary mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold hover:bg-gold-dark text-white font-sans text-xs tracking-[0.2em] uppercase py-4 transition-all duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
