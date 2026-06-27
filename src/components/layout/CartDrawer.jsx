import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart, formatPrice } from "@/context/CartContext";
import Button from "@/components/ui/Button";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PLACEHOLDER_SVG } from "@/lib/utils";

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, updateQuantity, removeItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, items.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-velmora-espresso/40 velmora-fade-in"
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl flex flex-col velmora-drawer-in"
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-velmora-line">
          <h2 className="font-serif text-2xl text-velmora-espresso font-light">
            Your Bag
            <span className="ml-2 text-velmora-mocha text-base">({items.length})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 text-velmora-espresso hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </header>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag size={32} strokeWidth={1} className="text-velmora-stone" />
              <p className="font-serif text-2xl text-velmora-espresso font-light">
                Your bag is empty.
              </p>
              <p className="text-sm text-velmora-mocha max-w-xs">
                Begin with a piece you'll wear for years.
              </p>
              <Button as={Link} to="/shop" onClick={closeCart} className="mt-2">
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((line) => (
                <li key={line.key} className="flex gap-4">
                  <Link
                    to={`/product/${line.slug}`}
                    onClick={closeCart}
                    className="w-24 h-28 flex-shrink-0 bg-velmora-bone overflow-hidden"
                  >
                    <img
                      alt={line.name}
                      data-strk-img-id={line.image?.id || line.productId}
                      data-strk-img={line.image?.q || `[${line.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="240"
                      src={PLACEHOLDER_SVG}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${line.slug}`}
                        onClick={closeCart}
                        className="font-sans text-[12px] uppercase tracking-[0.18em] text-velmora-espresso hover:text-velmora-gold"
                      >
                        {line.name}
                      </Link>
                      <button
                        onClick={() => removeItem(line.key)}
                        aria-label={`Remove ${line.name}`}
                        className="text-velmora-stone hover:text-velmora-espresso transition-colors"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-[12px] text-velmora-mocha mt-1">{line.variant}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-velmora-line">
                        <button
                          onClick={() => updateQuantity(line.key, line.quantity - 1)}
                          className="p-2 text-velmora-espresso hover:text-velmora-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="px-3 text-[12px] tabular-nums text-velmora-espresso">
                          {line.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(line.key, line.quantity + 1)}
                          className="p-2 text-velmora-espresso hover:text-velmora-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="font-serif text-lg text-velmora-espresso">
                        {formatPrice(line.price * line.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <footer className="border-t border-velmora-line px-6 py-5 flex flex-col gap-4 bg-velmora-ivory">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.24em] text-velmora-mocha">Subtotal</span>
              <span className="font-serif text-2xl text-velmora-espresso">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-[12px] text-velmora-mocha leading-relaxed">
              Shipping and taxes calculated at checkout. Complimentary worldwide shipping on orders over $100.
            </p>
            <Button size="block">Checkout</Button>
            <button
              onClick={closeCart}
              className="text-[11px] uppercase tracking-[0.24em] text-velmora-mocha hover:text-velmora-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
