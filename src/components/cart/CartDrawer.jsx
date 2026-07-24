import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 cart-overlay z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-light">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-espresso" />
            <span className="font-inter text-xs uppercase tracking-widest text-espresso">
              Your Bag ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-espresso transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone-light" />
              <p className="font-cormorant text-xl text-espresso-light">Your bag is empty</p>
              <p className="font-inter text-xs text-stone">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-widest text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-ivory transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-stone-light last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-stone-pale flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-cormorant text-2xl text-stone-light font-light">
                      {item.product.name[0]}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="font-cormorant text-sm uppercase tracking-widest text-espresso leading-tight mb-1"
                    >
                      {item.product.name}
                    </p>
                    <p className="font-inter text-xs text-stone mb-3">{item.variant}</p>

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
                          className="text-stone-light hover:text-stone transition-colors"
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
          <div className="px-6 py-5 border-t border-stone-light">
            <div className="flex justify-between items-center mb-4">
              <span className="font-inter text-xs uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-cormorant text-xl text-espresso">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-stone text-center mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-espresso text-ivory font-inter text-xs uppercase tracking-widest py-4 hover:bg-espresso-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-stone-light text-stone font-inter text-xs uppercase tracking-widest py-3 hover:border-espresso hover:text-espresso transition-colors duration-300"
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
