import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-cream flex flex-col transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-light">
          <h2 className="font-cormorant text-xl font-light tracking-widest uppercase text-espresso">
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone-light" />
              <p className="font-cormorant text-xl text-stone">Your cart is empty</p>
              <p className="font-inter text-xs text-stone/70 uppercase tracking-widest">
                Discover our collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-gold text-cream font-inter text-xs uppercase tracking-widest px-8 py-3 hover:bg-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-stone-light/50">
                  {/* Product image thumbnail */}
                  <div className="w-20 h-24 bg-cream-dark flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-cream-dark to-stone-light/30 flex items-center justify-center">
                      <span className="font-cormorant text-2xl text-stone/40 select-none">
                        {item.product.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-cormorant text-sm uppercase tracking-widest text-espresso leading-tight">
                        {item.product.name}
                      </p>
                      <p className="font-inter text-xs text-stone mt-0.5">{item.variant}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-stone-light">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-inter text-xs text-espresso w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-inter text-sm font-medium text-espresso">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-stone/50 hover:text-espresso transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={14} />
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
          <div className="px-6 py-5 border-t border-stone-light bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-cormorant text-xl text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-stone/60 mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-cream font-inter text-xs uppercase tracking-widest py-4 hover:bg-gold-dark transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-stone-light text-espresso font-inter text-xs uppercase tracking-widest py-3 hover:border-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
