import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-obsidian/40 z-50 transition-opacity duration-400 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-dark">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-text-primary" />
            <span className="font-sans text-xs tracking-widest uppercase text-text-primary">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-taupe-light" />
              <p className="font-serif text-xl text-text-secondary font-light">Your cart is empty</p>
              <p className="font-sans text-xs text-text-muted tracking-wide">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-3 hover:bg-gold-dark transition-colors duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-ivory-dark">
              {items.map(item => (
                <div key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      data-strk-img-id={`cart-item-${item.key}`}
                      data-strk-img={`[cart-item-name-${item.key}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span id={`cart-item-name-${item.key}`} className="font-serif text-sm uppercase tracking-widest text-text-primary block truncate">
                      {item.product.name}
                    </span>
                    {item.variant && (
                      <span className="font-sans text-xs text-text-muted mt-0.5 block">{item.variant}</span>
                    )}
                    <span className="font-sans text-sm text-gold font-medium mt-1 block">${item.product.price}</span>
                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-ivory-dark flex items-center justify-center text-text-secondary hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-sans text-xs text-text-primary w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-ivory-dark flex items-center justify-center text-text-secondary hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-text-muted hover:text-text-primary transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-ivory-dark px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs tracking-widest uppercase text-text-muted">Subtotal</span>
              <span className="font-serif text-xl text-text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-text-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4 hover:bg-obsidian-soft transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-ivory-dark text-text-secondary font-sans text-xs tracking-widest uppercase py-3 hover:border-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
