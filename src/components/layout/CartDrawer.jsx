import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-light">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-espresso" />
            <span className="font-inter text-xs uppercase tracking-widest text-espresso">
              Your Cart ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-espresso transition-colors duration-200"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-stone-light" />
              <p className="font-cormorant text-xl text-espresso">Your cart is empty</p>
              <p className="font-inter text-xs text-stone">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-widest text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-espresso transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  {/* Product image thumbnail */}
                  <div className="w-20 h-24 bg-ivory-dark flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-stone-light" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p
                        className="font-cormorant text-sm uppercase tracking-widest text-espresso leading-tight"
                      >
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
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-inter text-xs text-espresso w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-inter text-sm font-medium text-espresso">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-stone hover:text-espresso transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
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
          <div className="px-6 py-6 border-t border-stone-light">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-cormorant text-xl text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-stone mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-espresso text-ivory font-inter text-xs uppercase tracking-widest py-4 hover:bg-espresso-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-stone-light text-espresso font-inter text-xs uppercase tracking-widest py-3.5 hover:border-espresso transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
