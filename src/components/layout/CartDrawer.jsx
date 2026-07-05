import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { toast } from "sonner";

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    clearCart,
  } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  const handleCheckout = () => {
    toast.success(
      "Checkout coming soon — this is a demo storefront. Your cart is saved."
    );
  };

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[70] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background text-foreground shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-serif text-2xl">
            Your Cart
            <span className="ml-2 text-sm text-muted-foreground">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="-mr-2 p-2 transition-opacity hover:opacity-70"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag
              size={36}
              strokeWidth={1.2}
              className="text-muted-foreground"
            />
            <p className="mt-6 font-serif text-2xl">Your cart is empty</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Discover demi-fine pieces designed to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-flex items-center justify-center gap-2 border border-ink px-8 py-4 text-[11px] font-medium uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-border">
                {items.map((item) => {
                  const { product, variant, quantity, lineTotal } = item;
                  const Art = product.images[0];
                  return (
                    <li
                      key={`${product.id}__${variant.id}`}
                      className="flex gap-4 py-5 animate-fade-in"
                    >
                      <Link
                        to={`/product/${product.id}`}
                        onClick={closeCart}
                        className="block h-24 w-20 flex-shrink-0 overflow-hidden bg-muted"
                      >
                        <Art className="h-full w-full" />
                      </Link>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between gap-2">
                          <div>
                            <Link
                              to={`/product/${product.id}`}
                              onClick={closeCart}
                              className="product-name hover:text-accent"
                            >
                              {product.name}
                            </Link>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {variant.name}
                            </p>
                          </div>
                          <p className="text-sm text-foreground">
                            {formatPrice(lineTotal)}
                          </p>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="inline-flex items-center border border-border">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  product.id,
                                  variant.id,
                                  quantity - 1
                                )
                              }
                              className="p-1.5 transition-colors hover:bg-muted"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} strokeWidth={1.5} />
                            </button>
                            <span className="min-w-[28px] text-center text-xs">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  product.id,
                                  variant.id,
                                  quantity + 1
                                )
                              }
                              className="p-1.5 transition-colors hover:bg-muted"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} strokeWidth={1.5} />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              removeItem(product.id, variant.id);
                              toast.info(`${product.name} removed from cart`);
                            }}
                            className="text-[11px] uppercase tracking-widest2 text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <button
                type="button"
                onClick={() => {
                  clearCart();
                  toast.info("Cart cleared");
                }}
                className="mt-2 text-[11px] uppercase tracking-widest2 text-muted-foreground hover:text-foreground"
              >
                Clear cart
              </button>
            </div>

            <div className="border-t border-border bg-cream px-6 py-6">
              <div className="flex items-center justify-between text-sm">
                <span className="uppercase tracking-widest2 text-muted-foreground">
                  Subtotal
                </span>
                <span className="font-serif text-2xl">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-widest2 text-muted-foreground">
                Shipping and taxes calculated at checkout
              </p>
              <PrimaryButton
                fullWidth
                size="lg"
                onClick={handleCheckout}
                className="mt-5"
              >
                Checkout
              </PrimaryButton>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center text-[11px] uppercase tracking-widest2 text-muted-foreground hover:text-foreground"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
        {mounted ? null : null}
      </aside>
    </div>
  );
};

export default CartDrawer;
