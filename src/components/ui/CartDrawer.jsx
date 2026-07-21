import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, count } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-velmora-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-velmora-cream shadow-soft-lg transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-taupe/30">
            <h2 className="font-serif text-xl tracking-widest uppercase text-velmora-espresso">
              Your Cart ({count})
            </h2>
            <button
              type="button"
              onClick={closeCart}
              className="p-2 -mr-2 text-velmora-coffee hover:text-velmora-espresso transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="text-velmora-taupe mb-4" strokeWidth={1} />
              <p className="font-serif text-xl text-velmora-espresso mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-warm-gray mb-6">
                Discover pieces crafted to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block bg-velmora-espresso text-velmora-cream px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-velmora-gold hover:text-velmora-espresso transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <Link
                      to={`/products/${item.id}`}
                      onClick={closeCart}
                      className="w-20 h-24 flex-shrink-0 bg-velmora-sand overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <Link
                          to={`/products/${item.id}`}
                          onClick={closeCart}
                          className="font-serif text-sm uppercase tracking-widest text-velmora-espresso hover:text-velmora-gold transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velmora-warm-gray hover:text-velmora-espresso transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-velmora-warm-gray mt-1 capitalize">
                        {item.variant} tone
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-taupe/50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-velmora-coffee hover:text-velmora-espresso transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-7 h-7 flex items-center justify-center text-xs text-velmora-espresso">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-velmora-coffee hover:text-velmora-espresso transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-velmora-espresso">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-velmora-taupe/30 px-6 py-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-velmora-coffee">Subtotal</span>
                  <span className="font-serif text-xl text-velmora-espresso">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-velmora-warm-gray">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  type="button"
                  className="w-full bg-velmora-espresso text-velmora-cream py-4 text-xs uppercase tracking-widest font-medium hover:bg-velmora-gold hover:text-velmora-espresso transition-colors"
                >
                  Checkout
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full border border-velmora-espresso text-velmora-espresso py-3 text-xs uppercase tracking-widest font-medium hover:bg-velmora-espresso hover:text-velmora-cream transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
