import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 z-50"
          onClick={(e) => { e.stopPropagation(); closeCart(); }}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 transform transition-transform duration-500 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b hairline">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button
              onClick={(e) => { e.stopPropagation(); closeCart(); }}
              aria-label="Close cart"
              className="hover:opacity-60 transition-opacity p-1"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="font-serif text-xl text-warmgray mb-2">Your cart is empty</p>
                <p className="text-sm text-lightgray mb-6">Discover our collection and find something you love.</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="inline-block bg-charcoal text-cream px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-espresso transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                      <img
                        data-strk-img-id={`cart-${item.image.id}`}
                        data-strk-img={`[cart-${item.id}-name]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <span id={`cart-${item.id}-name`} className="sr-only">{item.name}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-serif text-base leading-tight">{item.name}</p>
                          <p className="text-xs text-lightgray capitalize mt-0.5">{item.variant} tone</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          aria-label="Remove item"
                          className="text-lightgray hover:text-charcoal transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border hairline">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-parchment transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-sm font-medium min-w-[1.5rem] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-parchment transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-medium text-sm">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t hairline px-6 py-5">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm text-warmgray">Subtotal</span>
                <span className="font-serif text-xl">${subtotal}</span>
              </div>
              <p className="text-xs text-lightgray mb-4">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-gold text-white py-3.5 text-sm font-medium tracking-wide uppercase hover:bg-golddark transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 border border-charcoal text-charcoal py-3.5 text-sm font-medium tracking-wide uppercase hover:bg-charcoal hover:text-cream transition-colors"
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
