import { useEffect } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import ResolvedImage from "./ResolvedImage";

export default function CartDrawer() {
  const { isOpen, setIsOpen, items, updateQuantity, removeFromCart, subtotal, count } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[70] bg-charcoal/40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-parchment shadow-2xl transition-transform duration-300 flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between p-5 border-b border-soft-taupe">
          <h2 className="font-serif text-2xl tracking-wide">Your Cart ({count})</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-warm-gray">
              <ShoppingBag size={40} className="mb-4" />
              <p className="font-serif text-xl text-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm">Discover something beautiful today.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                <div className="w-20 h-24 bg-cream flex-shrink-0">
                  <ResolvedImage
                    imgId={`cart-${item.product.id}-${item.variant}-main`}
                    configId={`card-${item.product.id}-main`}
                    query={`[cart-title-${item.product.id}]`}
                    ratio="3x4"
                    width="160"
                    alt={item.product.name}
                    className="w-full h-full"
                  >
                    <span
                      id={`cart-title-${item.product.id}`}
                      className="sr-only"
                      aria-hidden="true"
                    >
                      {item.product.name} {item.product.material}
                    </span>
                  </ResolvedImage>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-sm uppercase tracking-widest text-charcoal">
                      {item.product.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.variant)}
                      className="text-warm-gray hover:text-charcoal"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-warm-gray mt-1">{item.variant}</p>
                  <p className="text-sm text-charcoal mt-1">{formatPrice(item.product.price)}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                      className="w-7 h-7 border border-soft-taupe flex items-center justify-center hover:border-bronze transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                      className="w-7 h-7 border border-soft-taupe flex items-center justify-center hover:border-bronze transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-soft-taupe bg-cream">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm uppercase tracking-widest text-warm-gray">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-warm-gray mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-bronze text-white py-3.5 text-xs uppercase tracking-widest hover:bg-bronze-hover transition-colors">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
