import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2, Lock } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { StrkImage } from "@/components/ui/StrkMedia";
import Button from "@/components/ui/Button";
import strkImgConfig from "@/strk-img-config.json";

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, updateQty, removeItem } =
    useCart();
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // The drawer lives at the Layout level, outside any page's image-loading
  // container, so it must populate its own thumbnails when it opens.
  useEffect(() => {
    if (!isOpen) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, panelRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, items]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <button
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in"
      />

      {/* Panel */}
      <aside ref={panelRef} className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-drawer animate-slide-in-right">
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h3 className="font-display text-2xl text-ink">Your Bag</h3>
          <button
            onClick={closeCart}
            aria-label="Close"
            className="p-1 text-inkSoft transition-colors hover:text-ink"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="font-display text-2xl text-ink">Your bag is empty</p>
            <p className="text-sm text-inkSoft">
              Discover pieces crafted to be treasured.
            </p>
            <Button variant="solid" size="sm" to="/shop" onClick={closeCart}>
              Shop the Collection
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <ul className="flex flex-col gap-6">
                {items.map((item) => (
                  <li
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 border-b border-line pb-6 last:border-0"
                  >
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-sand">
                      <StrkImage
                        imgId={item.product.imgId}
                        query={item.product.query}
                        ratio="3x4"
                        width={200}
                        alt={item.product.name}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="font-display text-base font-semibold uppercase tracking-luxe text-ink hover:text-gold"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          aria-label="Remove"
                          className="text-inkSoft transition-colors hover:text-gold"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="mt-0.5 text-xs uppercase tracking-widest text-inkSoft">
                        {item.variant}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-line">
                          <button
                            aria-label="Decrease"
                            className="px-2 py-1 text-inkSoft hover:text-ink"
                            onClick={() =>
                              updateQty(item.id, item.variant, item.qty - 1)
                            }
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold text-ink">
                            {item.qty}
                          </span>
                          <button
                            aria-label="Increase"
                            className="px-2 py-1 text-inkSoft hover:text-ink"
                            onClick={() =>
                              updateQty(item.id, item.variant, item.qty + 1)
                            }
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-semibold text-ink">
                          {formatPrice(item.product.price * item.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line bg-sand/60 px-6 py-5">
              <div className="mb-1 flex items-center justify-between">
                <span className="font-sans text-sm uppercase tracking-luxe text-inkSoft">
                  Subtotal
                </span>
                <span className="font-display text-xl font-semibold text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mb-4 text-xs text-inkSoft">
                Shipping &amp; taxes calculated at checkout.
              </p>
              <Button variant="solid" size="full">
                <Lock size={14} /> Checkout
              </Button>
              <button
                onClick={closeCart}
                className="mt-3 w-full text-center text-xs uppercase tracking-luxe text-inkSoft underline-offset-4 hover:underline"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
