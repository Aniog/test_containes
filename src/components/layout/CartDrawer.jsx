import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-obsidian/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[80] bg-cream flex flex-col transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ boxShadow: '-8px 0 40px rgba(28,20,16,0.15)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-obsidian" />
            <span className="font-inter text-xs uppercase tracking-widest text-obsidian">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-border" />
              <p className="font-cormorant text-xl text-taupe">Your cart is empty</p>
              <p className="font-inter text-xs text-stone">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-inter text-xs uppercase tracking-widest text-obsidian border border-obsidian px-6 py-3 hover:bg-obsidian hover:text-cream transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-border last:border-0">
                  {/* Product image — styled placeholder with product initial */}
                  <div
                    className="w-20 h-20 bg-ivory flex-shrink-0 overflow-hidden flex items-center justify-center border border-border"
                    aria-hidden="true"
                  >
                    <span className="font-cormorant text-2xl text-gold select-none">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="font-cormorant text-sm uppercase tracking-widest text-obsidian leading-tight"
                    >
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="font-inter text-xs text-stone mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-inter text-sm font-medium text-obsidian mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-taupe hover:text-obsidian transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-inter text-xs text-obsidian w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-taupe hover:text-obsidian transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone hover:text-obsidian transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-border bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-widest text-taupe">Subtotal</span>
              <span className="font-cormorant text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-stone mb-5">Shipping & taxes calculated at checkout</p>

            <button className="w-full bg-obsidian text-cream font-inter text-xs uppercase tracking-widest py-4 hover:bg-gold hover:text-obsidian transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-border text-taupe font-inter text-xs uppercase tracking-widest py-3 hover:border-obsidian hover:text-obsidian transition-colors duration-300"
            >
              Continue Shopping
            </button>

            <div className="flex items-center justify-center gap-4 mt-5">
              {['visa', 'mc', 'amex', 'paypal'].map(card => (
                <div key={card} className="w-8 h-5 bg-ivory border border-border rounded-sm flex items-center justify-center">
                  <span className="font-inter text-[7px] text-stone uppercase">{card}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
