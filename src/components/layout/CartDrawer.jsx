import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { products } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, count, updateQuantity, removeItem } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-base/40 z-50"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-velmora-cream z-50 transform transition-transform duration-300 ease-lux flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-velmora-hairline">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <h2 className="font-serif text-lg">Your Cart ({count})</h2>
          </div>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 hover:text-velmora-gold transition-colors">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-velmora-stone mb-4" />
            <p className="font-serif text-xl mb-2">Your cart is empty</p>
            <p className="text-velmora-taupe text-sm mb-6">
              Discover something beautiful to treasure.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="bg-velmora-gold text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-velmora-gold-dark transition-colors"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                return (
                  <div key={item.cartItemId} className="flex gap-4">
                    <Link
                      to={`/products/${item.slug}`}
                      onClick={closeCart}
                      className="w-20 h-24 bg-velmora-sand flex-shrink-0 overflow-hidden flex items-center justify-center"
                    >
                      <span className="font-serif text-xl text-velmora-gold">
                        V
                      </span>
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            to={`/products/${item.slug}`}
                            onClick={closeCart}
                            className="font-serif text-sm uppercase tracking-widest-custom line-clamp-1 hover:text-velmora-gold transition-colors"
                          >
                            {item.name}
                          </Link>
                          {item.variant && (
                            <p className="text-xs text-velmora-taupe mt-0.5">
                              {item.variant}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.cartItemId)}
                          className="text-velmora-stone hover:text-red-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <QuantitySelector
                          value={item.quantity}
                          onChange={(qty) => updateQuantity(item.cartItemId, qty)}
                          min={1}
                        />
                        <span className="font-medium text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-velmora-hairline p-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-velmora-taupe">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-taupe">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-velmora-gold text-white py-3.5 text-xs uppercase tracking-widest hover:bg-velmora-gold-dark transition-colors">
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-xs uppercase tracking-widest text-velmora-base hover:text-velmora-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
