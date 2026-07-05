import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 cart-overlay transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-50 bg-charcoal border-l border-mink/50 flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-mink/50">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="text-[11px] tracking-widest uppercase text-parchment font-medium">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-[10px] text-stone">({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-parchment transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-mink" />
              <p className="font-serif text-xl text-parchment/60 font-light">Your cart is empty</p>
              <p className="text-xs text-stone tracking-wide">Discover our collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-gold text-gold text-[10px] tracking-widest uppercase px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-mink/40">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-mink/30 flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      data-strk-img-id={`cart-item-${item.key}`}
                      data-strk-img={`[cart-item-name-${item.key}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      className="w-full h-full object-cover"
                    />
                    <span id={`cart-item-name-${item.key}`} className="sr-only">{item.product.name} gold jewelry</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest uppercase text-parchment font-medium mb-1 truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-stone mb-3">{item.variant}</p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-mink/60">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-parchment transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs text-parchment">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-parchment transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-sm text-parchment font-medium">
                          ${(item.product.price * item.quantity).toFixed(0)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-stone hover:text-gold transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-mink/50 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] tracking-widest uppercase text-stone">Subtotal</span>
              <span className="font-serif text-xl text-parchment">${subtotal.toFixed(0)}</span>
            </div>
            <p className="text-[10px] text-stone/70 tracking-wide">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-obsidian text-[10px] tracking-widest uppercase py-4 font-medium hover:bg-gold-light transition-all duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-mink/60 text-parchment/60 text-[10px] tracking-widest uppercase py-3 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
