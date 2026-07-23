import React from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { getProductImageUrl } from "@/lib/strkImages";
import AccentButton from "@/components/ui/AccentButton";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, setQty, removeItem, clear } = useCart();

  const handleCheckout = () => {
    toast.success("This is a design preview — checkout will be connected soon.");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-50 bg-espresso/50 backdrop-blur-sm transition-opacity duration-400",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!isOpen}
      />

      {/* Panel */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory shadow-soft transition-transform duration-500 ease-luxe",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={18} className="text-gold-deep" />
            <h2 className="font-display text-xl tracking-widest2 text-espresso uppercase">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-full text-espresso transition-colors hover:bg-sand"
          >
            <X size={20} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand">
              <ShoppingBag size={24} className="text-gold-deep" />
            </div>
            <p className="font-display text-2xl text-espresso">Your cart is empty</p>
            <p className="max-w-xs font-body text-sm text-cocoa/70">
              Discover pieces crafted to be treasured — from everyday huggies to heirloom gifts.
            </p>
            <AccentButton as={Link} to="/shop" variant="espresso" onClick={closeCart} className="mt-2">
              Shop the Collection
            </AccentButton>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <ul className="flex flex-col gap-6">
                {lines.map((line) => (
                  <li key={line.key} className="flex gap-4">
                    <Link
                      to={`/product/${line.id}`}
                      onClick={closeCart}
                      className="h-24 w-20 shrink-0 overflow-hidden bg-sand"
                    >
                      <img
                        src={getProductImageUrl(line.id)}
                        alt={line.product.name}
                        className="block h-full w-full object-cover"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-display text-base uppercase tracking-widest2 text-espresso leading-tight">
                            {line.product.name}
                          </p>
                          <p className="mt-0.5 font-body text-[11px] uppercase tracking-widest2 text-gold-deep">
                            {line.tone} tone
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(line.key)}
                          aria-label="Remove item"
                          className="text-cocoa/50 transition-colors hover:text-espresso"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-line">
                          <button
                            type="button"
                            onClick={() => setQty(line.key, line.qty - 1)}
                            aria-label="Decrease quantity"
                            className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-sand"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-body text-sm font-semibold text-espresso">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(line.key, line.qty + 1)}
                            aria-label="Increase quantity"
                            className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-sand"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-body text-sm font-semibold text-espresso">
                          {formatPrice(line.lineTotal)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line bg-cream px-6 py-5">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="font-body text-sm text-cocoa/80">Subtotal</span>
                <span className="font-display text-xl font-semibold text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mb-4 font-body text-[11px] text-cocoa/60">
                Shipping &amp; taxes calculated at checkout. Free worldwide shipping over $75.
              </p>
              <AccentButton onClick={handleCheckout} className="w-full">
                Checkout
              </AccentButton>
              <button
                type="button"
                onClick={clear}
                className="mt-3 w-full text-center font-body text-[11px] uppercase tracking-widest2 text-cocoa/60 transition-colors hover:text-espresso"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
