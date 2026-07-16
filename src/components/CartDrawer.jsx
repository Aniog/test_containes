import { useEffect } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-60 bg-black/40 transition-opacity duration-400 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#FDFCFA] z-70 shadow-2xl transform transition-transform duration-400 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/60">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-velmora-charcoal" />
              <span className="font-serif text-lg tracking-wider text-velmora-charcoal">
                Your Bag
              </span>
              <span className="text-sm text-velmora-taupe font-sans">
                ({items.length})
              </span>
            </div>
            <button
              onClick={closeDrawer}
              className="p-1 text-velmora-charcoal-light hover:text-velmora-charcoal transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-sand mb-4" />
                <p className="font-serif text-xl text-velmora-charcoal mb-2">Your bag is empty</p>
                <p className="text-sm text-velmora-taupe mb-6">Discover pieces you'll love.</p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="bg-velmora-charcoal text-white px-8 py-3 text-sm tracking-wider uppercase font-sans hover:bg-velmora-charcoal-light transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4 pb-5 border-b border-velmora-sand/40">
                    <div className="w-20 h-20 bg-velmora-sand/30 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-serif text-sm tracking-wider text-velmora-charcoal uppercase">
                            {item.name}
                          </h4>
                          {item.material && (
                            <p className="text-xs text-velmora-taupe mt-0.5 font-sans">
                              {item.material === "gold" ? "Gold Tone" : "Silver Tone"}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="p-0.5 text-velmora-taupe-light hover:text-velmora-charcoal transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-sand/60">
                          <button
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity - 1)
                            }
                            className="p-1.5 text-velmora-charcoal-light hover:text-velmora-charcoal transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm text-velmora-charcoal font-sans">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity + 1)
                            }
                            className="p-1.5 text-velmora-charcoal-light hover:text-velmora-charcoal transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-serif text-sm text-velmora-charcoal">
                          ${(item.price * item.quantity).toFixed(0)}
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
            <div className="border-t border-velmora-sand/60 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-sans text-velmora-charcoal-light">Subtotal</span>
                <span className="font-serif text-lg text-velmora-charcoal">
                  ${totalPrice.toFixed(0)}
                </span>
              </div>
              <p className="text-xs text-velmora-taupe">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full bg-velmora-charcoal text-white py-3.5 text-sm tracking-wider uppercase font-sans hover:bg-velmora-charcoal-light transition-colors">
                Checkout
              </button>
              <button
                onClick={closeDrawer}
                className="w-full text-sm tracking-wider uppercase font-sans text-velmora-charcoal-light hover:text-velmora-charcoal transition-colors py-2"
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