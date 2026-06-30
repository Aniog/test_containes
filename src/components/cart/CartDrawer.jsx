import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, totalItems, totalPrice } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-obsidian/40 cart-overlay"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-cream flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-mink" />
            <h2 className="font-serif text-lg text-obsidian">
              Your Cart
              {totalItems > 0 && (
                <span className="font-sans text-sm text-stone ml-2">({totalItems})</span>
              )}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-stone hover:text-obsidian transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-velvet-300" />
              <p className="font-serif text-xl text-mink">Your cart is empty</p>
              <p className="font-sans text-sm text-stone">Discover our collection of fine jewelry.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-cream transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-velvet-100">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velvet-100 rounded flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.key}`}
                      data-strk-img={item.product.imgQuery}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-serif text-sm text-obsidian leading-tight">{item.product.name}</p>
                        <p className="font-sans text-xs text-stone mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-velvet-300 hover:text-obsidian transition-colors flex-shrink-0"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Qty */}
                      <div className="flex items-center border border-velvet-200">
                        <button
                          onClick={() => updateQty(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-mink hover:bg-velvet-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-mink hover:bg-velvet-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-serif text-sm text-obsidian">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-velvet-200 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-stone">Subtotal</span>
              <span className="font-serif text-lg text-obsidian">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-obsidian text-cream font-sans text-xs tracking-widest uppercase py-4 hover:bg-charcoal transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velvet-300 text-mink font-sans text-xs tracking-widest uppercase py-3 hover:border-obsidian hover:text-obsidian transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
