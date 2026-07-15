import React from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, setQty, removeItem, count } = useCart();

  const lineItems = items
    .map((it) => {
      const product = getProductById(it.id);
      if (!product) return null;
      return { ...it, product };
    })
    .filter(Boolean);

  const subtotal = lineItems.reduce(
    (sum, it) => sum + it.product.price * it.qty,
    0
  );

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-300",
        drawerOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!drawerOpen}
    >
      <div
        className={cn(
          "absolute inset-0 bg-sable/45 transition-opacity duration-300",
          drawerOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeDrawer}
      />
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-ivory shadow-drawer transition-transform duration-500 ease-out flex flex-col",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-sable/10">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-xl text-sable">Your Cart</span>
            <span className="font-sans text-xs text-taupe">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeDrawer}
            className="p-2 -mr-2 text-sable hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {lineItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-ivory-200 flex items-center justify-center mb-5">
              <ShoppingBag className="w-7 h-7 text-taupe" />
            </div>
            <h3 className="font-serif text-2xl text-sable mb-2">Your cart is empty</h3>
            <p className="text-sm text-taupe mb-8 max-w-xs">
              Begin with a piece you can wear every day, or find the perfect gift.
            </p>
            <Link
              to="/shop"
              onClick={closeDrawer}
              className="btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-6">
                {lineItems.map((it) => (
                  <li key={it.key} className="flex gap-4">
                    <Link
                      to={`/product/${it.product.id}`}
                      onClick={closeDrawer}
                      className="block w-20 h-24 bg-ivory-200 flex-shrink-0 overflow-hidden"
                    >
                      <img
                        alt={it.product.name}
                        src={it.product.image}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <span className="sr-only">{it.product.name}</span>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/product/${it.product.id}`}
                          onClick={closeDrawer}
                          className="product-name hover:text-gold transition-colors truncate"
                        >
                          {it.product.name}
                        </Link>
                        <button
                          type="button"
                          aria-label="Remove"
                          onClick={() => removeItem(it.key)}
                          className="text-taupe hover:text-sable transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-taupe mt-1">{it.product.material}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="inline-flex items-center border border-sable/20">
                          <button
                            type="button"
                            aria-label="Decrease"
                            onClick={() => setQty(it.key, it.qty - 1)}
                            className="w-8 h-8 flex items-center justify-center text-sable hover:bg-ivory-200 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-sans">
                            {it.qty}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase"
                            onClick={() => setQty(it.key, it.qty + 1)}
                            className="w-8 h-8 flex items-center justify-center text-sable hover:bg-ivory-200 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-sans text-sable">
                          {formatPrice(it.product.price * it.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-sable/10 px-6 py-5 bg-ivory-50">
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-sans text-xs tracking-widest2 uppercase text-taupe">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-sable">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-taupe mb-5">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="btn-primary w-full"
                onClick={() => {
                  alert("Checkout is coming soon. Thank you for shopping with Velmora.");
                  closeDrawer();
                }}
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeDrawer}
                className="block w-full text-center mt-3 text-[11px] tracking-widest2 uppercase text-taupe hover:text-sable transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
