import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    drawerOpen,
    closeDrawer,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
  } = useCart();

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-ink/40 backdrop-blur-sm"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/50">
            <h2 className="font-serif text-lg tracking-wide">
              Your Bag ({itemCount})
            </h2>
            <button
              onClick={closeDrawer}
              className="text-velmora-stone hover:text-velmora-ink transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
              <ShoppingBag size={40} className="text-velmora-sand mb-4" />
              <p className="text-velmora-stone text-sm">Your bag is empty.</p>
              <Link
                to="/shop"
                className="btn-outline mt-6"
                onClick={closeDrawer}
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 py-4 border-b border-velmora-sand/30"
                  >
                    {/* Image placeholder */}
                    <div className="w-20 h-20 flex-shrink-0 bg-velmora-sand/50 flex items-center justify-center">
                      <span className="text-velmora-stone text-[10px] tracking-wider">
                        {item.name.slice(0, 3).toUpperCase()}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-xs">{item.name}</h3>
                      <p className="text-sm text-velmora-gold mt-1">
                        ${item.price}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-sand">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1.5 text-velmora-stone hover:text-velmora-ink transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1.5 text-velmora-stone hover:text-velmora-ink transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-velmora-stone hover:text-velmora-ink underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-velmora-sand/50 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-velmora-stone">Subtotal</span>
                  <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-velmora-stone">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="btn-primary w-full">Checkout</button>
                <button
                  onClick={closeDrawer}
                  className="btn-ghost w-full text-xs"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}