import { useEffect } from "react";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import { ProductImage } from "./ProductImage";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { isOpen, setIsOpen, items, updateQuantity, removeItem, subtotal, shipping, total, count } =
    useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-espresso/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-md bg-cream shadow-2xl transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
            <h2 className="font-serif text-2xl uppercase tracking-widest">Your Bag</h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-warm-gray transition-colors hover:text-espresso"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="mb-4 text-hairline" />
              <p className="font-serif text-xl">Your bag is empty</p>
              <p className="mt-2 text-sm text-warm-gray">
                Discover something beautiful today.
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-espresso px-8 py-3 text-xs uppercase tracking-widest text-cream transition-colors hover:bg-gold hover:text-espresso"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <p className="mb-4 text-sm text-warm-gray">
                  {count} {count === 1 ? "item" : "items"}
                </p>
                <ul className="space-y-6">
                  {items.map((item) => {
                    const product = { id: item.id, name: item.name, description: item.description || "", category: item.category || "", imageRatio: item.imageRatio };
                    return (
                      <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                        <Link
                          to={`/products/${item.id}`}
                          onClick={() => setIsOpen(false)}
                          className="h-24 w-20 flex-shrink-0 overflow-hidden bg-linen"
                        >
                          <ProductImage
                            product={product}
                            ratio={item.imageRatio || "1x1"}
                            width={160}
                            suffix="card-main"
                            className="h-full w-full"
                            alt={item.name}
                          />
                        </Link>
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <Link
                              to={`/products/${item.id}`}
                              onClick={() => setIsOpen(false)}
                              className="font-serif text-sm uppercase tracking-widest hover:text-gold"
                            >
                              {item.name}
                            </Link>
                            <p className="mt-0.5 text-xs capitalize text-warm-gray">
                              {item.variant} tone
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-hairline">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                                className="px-2 py-1 text-warm-gray hover:text-espresso"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="min-w-[1.5rem] px-1 text-center text-sm">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                                className="px-2 py-1 text-warm-gray hover:text-espresso"
                                aria-label="Increase quantity"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="text-sm font-medium">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="self-start text-warm-gray transition-colors hover:text-red-600"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="border-t border-hairline px-6 py-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-warm-gray">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-warm-gray">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between pt-2 text-base font-semibold text-espresso">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-6 w-full bg-espresso py-4 text-xs uppercase tracking-widest text-cream transition-colors hover:bg-gold hover:text-espresso"
                >
                  Checkout
                </button>
                <p className="mt-3 text-center text-xs text-warm-gray">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
