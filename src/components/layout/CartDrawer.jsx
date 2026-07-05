import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, total, itemCount, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/50 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-cream flex flex-col transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-manrope text-xs tracking-widest uppercase text-ink">
              Your Bag {itemCount > 0 && `(${itemCount})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-ink transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-divider" />
              <p className="font-cormorant text-xl text-muted italic">Your bag is empty</p>
              <p className="font-manrope text-xs text-whisper">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-manrope text-xs tracking-widest uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-divider last:border-0">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-parchment flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      data-strk-img-id={`cart-img-${item.key}`}
                      data-strk-img={`[cart-name-${item.key}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span id={`cart-name-${item.key}`} className="font-cormorant text-sm uppercase tracking-widest2 text-ink block leading-tight">
                      {item.product.name}
                    </span>
                    <span className="font-manrope text-xs text-muted mt-0.5 block">{item.variant}</span>
                    <span className="font-manrope text-sm font-medium text-ink mt-1 block">${item.product.price}</span>
                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-divider flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors duration-200"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-manrope text-xs w-4 text-center text-ink">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-divider flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors duration-200"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto font-manrope text-[10px] tracking-wider uppercase text-whisper hover:text-muted transition-colors duration-200"
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
          <div className="px-6 py-6 border-t border-divider bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs tracking-wider uppercase text-muted">Subtotal</span>
              <span className="font-cormorant text-xl text-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-[10px] text-whisper mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-obsidian font-manrope text-xs tracking-widest uppercase py-4 hover:bg-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 font-manrope text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-200 py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
