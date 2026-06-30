import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 cart-overlay"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-ivory shadow-drawer animate-slideInRight flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-text-secondary" />
            <span className="font-manrope text-xs tracking-[0.14em] uppercase text-text-primary">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-secondary hover:text-velvet transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-cormorant text-2xl text-text-secondary font-light">Your cart is empty</p>
              <p className="font-manrope text-xs text-text-tertiary">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs tracking-[0.12em] uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-velvet transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-linen">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cream to-linen flex items-center justify-center">
                      <span className="font-cormorant text-2xl text-gold opacity-60">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-cormorant text-sm uppercase tracking-[0.1em] text-velvet leading-tight">
                          {item.product.name}
                        </p>
                        <p className="font-manrope text-[11px] text-text-tertiary mt-0.5">{item.variant} Tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-text-tertiary hover:text-velvet transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-velvet transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-velvet">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-velvet transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <p className="font-cormorant text-base text-velvet">
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
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs tracking-[0.1em] uppercase text-text-secondary">Subtotal</span>
              <span className="font-cormorant text-xl text-velvet">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-[11px] text-text-tertiary">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velvet text-ivory font-manrope text-xs tracking-[0.14em] uppercase py-4 hover:bg-gold hover:text-velvet transition-all duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-text-secondary font-manrope text-xs tracking-[0.12em] uppercase py-3 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
