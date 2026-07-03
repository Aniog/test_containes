import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[70] shadow-2xl transform transition-transform duration-500 ease-luxury ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
            <h2 className="font-serif text-lg tracking-widest">YOUR CART</h2>
            <button onClick={closeCart} aria-label="Close cart" className="p-1">
              <X className="w-5 h-5 text-velmora-espresso" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" />
                <p className="font-serif text-lg text-velmora-stone mb-2">Your cart is empty</p>
                <p className="font-sans text-sm text-velmora-taupe mb-6">
                  Discover our curated collection of demi-fine jewelry.
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-outline"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-velmora-ivory flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="font-serif text-sm tracking-widest uppercase text-velmora-espresso hover:text-velmora-golddark transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="p-1 -mr-1 text-velmora-stone hover:text-velmora-espresso transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-sans text-xs text-velmora-stone capitalize mb-3">
                        {item.variant}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-sand">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 text-velmora-stone hover:text-velmora-espresso transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-sans text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 text-velmora-stone hover:text-velmora-espresso transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-velmora-sand px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-velmora-stone">Subtotal</span>
                <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
              </div>
              <p className="font-sans text-xs text-velmora-stone mb-5">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="btn-primary w-full">Checkout</button>
              <button
                onClick={closeCart}
                className="btn-outline w-full mt-3"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
