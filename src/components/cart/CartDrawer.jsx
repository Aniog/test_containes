import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isOpen, close, updateQty, removeItem, subtotal, itemCount } =
    useCart();
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const id = window.requestAnimationFrame(() => {
      if (panelRef.current) {
        ImageHelper.loadImages(strkImgConfig, panelRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [isOpen, items]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-onyx/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 h-full w-full sm:w-[440px] bg-ivory text-onyx shadow-xl flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl tracking-[0.18em] uppercase">
            Your Bag
            <span className="ml-2 text-taupe text-sm tracking-wider">
              ({itemCount})
            </span>
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="p-2 -mr-2 hover:text-gold transition-colors"
          >
            <X size={20} strokeWidth={1.25} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-8 py-20">
              <p className="font-serif text-2xl text-onyx mb-3">
                Your bag is empty
              </p>
              <p className="font-sans text-sm text-taupe mb-8 max-w-xs">
                A little gold goes a long way. Explore our bestsellers.
              </p>
              <Button as={Link} to="/shop" variant="primary" onClick={close}>
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((line) => (
                <li key={line.key} className="px-6 py-5 flex gap-4">
                  <div className="w-24 h-28 bg-bone overflow-hidden shrink-0">
                    <img
                      alt={line.name}
                      data-strk-img-id={line.imgId}
                      data-strk-img={`[${line.descId}] [${line.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${line.slug}`}
                      onClick={close}
                      className="font-serif uppercase tracking-[0.18em] text-sm text-onyx hover:text-gold transition-colors block leading-tight"
                    >
                      {line.name}
                    </Link>
                    <p className="font-sans text-xs text-taupe mt-1">
                      {line.variantLabel}
                    </p>
                    <p className="font-sans text-sm text-onyx mt-2">
                      {formatPrice(line.price)}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="p-2 hover:text-gold transition-colors"
                          onClick={() => updateQty(line.key, line.qty - 1)}
                        >
                          <Minus size={14} strokeWidth={1.5} />
                        </button>
                        <span className="px-3 font-sans text-sm tabular-nums">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="p-2 hover:text-gold transition-colors"
                          onClick={() => updateQty(line.key, line.qty + 1)}
                        >
                          <Plus size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label="Remove item"
                        className="text-taupe hover:text-onyx transition-colors p-2"
                        onClick={() => removeItem(line.key)}
                      >
                        <Trash2 size={16} strokeWidth={1.25} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-xs uppercase tracking-[0.22em] text-taupe">
                Subtotal
              </span>
              <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="font-sans text-xs text-taupe mb-5">
              Shipping & taxes calculated at checkout.
            </p>
            <Button variant="primary" size="block">
              Checkout
            </Button>
            <button
              type="button"
              onClick={close}
              className="mt-3 w-full text-center font-sans text-xs uppercase tracking-[0.22em] text-taupe hover:text-onyx transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
