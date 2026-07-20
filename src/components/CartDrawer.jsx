import { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();
  const [render, setRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setRender(true);
  }, [isOpen]);

  const onTransitionEnd = () => {
    if (!isOpen) setRender(false);
  };

  if (!render) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-velmora-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        onTransitionEnd={onTransitionEnd}
        className={`fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-velmora-cream shadow-2xl transition-transform duration-500 ease-velmora ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-velmora-sand px-6">
          <h2 className="font-serif text-lg uppercase tracking-widest text-velmora-charcoal">
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-velmora-taupe transition-colors hover:text-velmora-charcoal"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
            <ShoppingBag size={40} strokeWidth={1} className="text-velmora-warm" />
            <p className="font-sans text-sm text-velmora-taupe">Your cart is empty</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-velmora-espresso px-8 py-3 font-sans text-xs uppercase tracking-widest text-velmora-cream transition-colors hover:bg-velmora-charcoal"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className="h-24 w-20 flex-shrink-0 overflow-hidden bg-velmora-sand"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col justify-between py-1">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          onClick={() => setIsOpen(false)}
                        >
                          <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="mt-0.5 text-xs capitalize text-velmora-taupe">
                          {item.variant}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-velmora-sand">
                          <button
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity - 1)
                            }
                            className="px-2 py-1 text-velmora-taupe transition-colors hover:text-velmora-charcoal"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="min-w-[1rem] text-center text-sm text-velmora-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity + 1)
                            }
                            className="px-2 py-1 text-velmora-taupe transition-colors hover:text-velmora-charcoal"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-velmora-charcoal">
                            ${item.price * item.quantity}
                          </span>
                          <button
                            onClick={() => removeItem(item.cartId)}
                            className="text-velmora-taupe transition-colors hover:text-velmora-charcoal"
                            aria-label="Remove item"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-velmora-sand px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-sans text-sm uppercase tracking-widest text-velmora-taupe">
                  Subtotal
                </span>
                <span className="font-sans text-lg font-medium text-velmora-charcoal">
                  ${totalPrice}
                </span>
              </div>
              <p className="mb-4 text-xs text-velmora-taupe">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-velmora-espresso py-4 font-sans text-xs uppercase tracking-widest text-velmora-cream transition-colors hover:bg-velmora-charcoal">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-3 w-full py-2 font-sans text-xs uppercase tracking-widest text-velmora-taupe transition-colors hover:text-velmora-charcoal"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}