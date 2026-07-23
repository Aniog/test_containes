import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-dusk/40 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-ivory flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-stone">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-dusk" />
            <span className="font-sans text-xs uppercase tracking-widest text-dusk font-semibold">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-umber hover:text-dusk transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone" />
              <p className="font-serif text-xl text-dusk font-light">Your cart is empty</p>
              <p className="font-sans text-sm text-umber">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-gold text-ivory px-8 py-3 font-sans uppercase tracking-widest text-xs font-semibold hover:bg-gold-dark transition-colors"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 pb-6 border-b border-stone last:border-0">
                  {/* Product thumbnail — styled placeholder */}
                  <div
                    className="w-20 h-20 flex-shrink-0 overflow-hidden flex items-center justify-center"
                    style={{ backgroundColor: 'rgb(232,224,212)' }}
                  >
                    <span
                      className="font-serif text-2xl font-light"
                      style={{ color: 'rgb(160,120,64)' }}
                    >
                      {item.product.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p
                          id={`cart-item-${item.key}-name`}
                          className="font-serif text-sm uppercase tracking-widest text-dusk leading-tight"
                        >
                          {item.product.name}
                        </p>
                        <p className="font-sans text-xs text-umber mt-1 capitalize">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-stone hover:text-dusk transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-3 border border-stone">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-umber hover:text-dusk transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={2} />
                        </button>
                        <span className="font-sans text-sm text-dusk w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-umber hover:text-dusk transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={2} />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-semibold text-dusk">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-8 py-6 border-t border-stone bg-parchment">
            <div className="flex justify-between items-center mb-2">
              <span className="font-sans text-xs uppercase tracking-widest text-umber">Subtotal</span>
              <span className="font-sans text-lg font-semibold text-dusk">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-umber mb-6">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-ivory py-4 font-sans uppercase tracking-widest text-xs font-semibold hover:bg-gold-dark transition-colors mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-dusk text-dusk py-3 font-sans uppercase tracking-widest text-xs font-semibold hover:bg-dusk hover:text-ivory transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
