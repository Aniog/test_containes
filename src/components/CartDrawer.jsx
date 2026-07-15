import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-velmora-dark/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className="fixed right-0 top-0 z-[70] h-full w-full max-w-md animate-slide-in-right bg-velmora-cream shadow-2xl"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-velmora-hairline px-6 py-5">
            <h2 className="font-serif text-lg font-medium uppercase tracking-widest text-velmora-dark">
              Your Cart
            </h2>
            <button
              onClick={closeCart}
              className="text-velmora-muted transition-colors hover:text-velmora-dark"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-velmora-muted">
                <ShoppingBag size={40} strokeWidth={1} />
                <p className="font-sans text-sm">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="mt-2 bg-velmora-dark px-6 py-2.5 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.variantId}`}
                    className="flex gap-4"
                  >
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={closeCart}
                      className="h-24 w-20 flex-shrink-0 overflow-hidden bg-velmora-warm-gray"
                    >
                      <img
                        src={`https://placehold.co/300x400/${item.product.variants[0].tone === "silver" ? "e5e7eb/9ca3af" : "d4a96a/2a2420"}?text=${encodeURIComponent(item.product.name)}`}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col justify-between py-0.5">
                      <div>
                        <Link
                          to={`/product/${item.product.id}`}
                          onClick={closeCart}
                        >
                          <h3 className="font-serif text-sm font-medium uppercase tracking-widest text-velmora-dark">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="mt-0.5 font-sans text-xs text-velmora-muted capitalize">
                          {item.product.variants.find((v) => v.id === item.variantId)?.label || ""} Tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.variantId,
                                item.quantity - 1
                              )
                            }
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-velmora-hairline text-velmora-muted transition-colors hover:border-velmora-dark hover:text-velmora-dark"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-sans text-sm font-medium text-velmora-dark">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.variantId,
                                item.quantity + 1
                              )
                            }
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-velmora-hairline text-velmora-muted transition-colors hover:border-velmora-dark hover:text-velmora-dark"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-sans text-sm font-medium text-velmora-dark">
                          ${item.product.price * item.quantity}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        removeFromCart(item.product.id, item.variantId)
                      }
                      className="self-start text-velmora-muted transition-colors hover:text-velmora-dark"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velmora-hairline px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm font-medium text-velmora-muted uppercase tracking-widest">
                  Subtotal
                </span>
                <span className="font-serif text-lg font-medium text-velmora-dark">
                  ${totalPrice}
                </span>
              </div>
              <p className="mt-1 font-sans text-[11px] text-velmora-muted">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="mt-4 w-full bg-velmora-dark py-3.5 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-3 w-full border border-velmora-hairline py-3.5 font-sans text-xs font-medium uppercase tracking-widest text-velmora-dark transition-colors hover:border-velmora-dark"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
