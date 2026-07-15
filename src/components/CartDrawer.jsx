import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { getStrkImageUrl } from "@/lib/images";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, updateQuantity, removeFromCart } = useCart();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[70] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
      />
      <aside
        className={cn(
          "fixed bottom-0 right-0 top-0 z-[80] flex w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
          <h2 className="font-serif text-xl text-espresso">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 text-warm-gray transition-colors hover:text-espresso focus-visible:outline-none"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="mb-4 text-warm-gray/60" />
            <p className="font-serif text-lg text-espresso">Your cart is empty</p>
            <p className="mt-2 text-sm text-warm-gray">
              Discover pieces crafted to be treasured.
            </p>
            <Button onClick={closeCart} className="mt-8">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.color}`} className="flex gap-4">
                    <div className="aspect-square w-20 shrink-0 overflow-hidden bg-parchment">
                      <img
                        src={getStrkImageUrl(`cart-${item.id}`)}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3
                          id={`cart-${item.id}-name`}
                          className="font-serif text-sm uppercase tracking-widest text-espresso"
                        >
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-warm-gray">{item.color}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center border border-stone-300">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center text-warm-gray hover:bg-parchment focus-visible:outline-none"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="flex h-7 w-8 items-center justify-center text-xs text-espresso">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center text-warm-gray hover:bg-parchment focus-visible:outline-none"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm text-espresso">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id, item.color)}
                      data-testid="remove-cart-item"
                      className="self-start p-1 text-warm-gray/70 transition-colors hover:text-red-600 focus-visible:outline-none"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone-200 px-6 py-6">
              <div className="mb-4 flex items-center justify-between text-espresso">
                <span className="text-sm uppercase tracking-widest">Subtotal</span>
                <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-6 text-xs text-warm-gray">
                Shipping and taxes calculated at checkout.
              </p>
              <Button fullWidth onClick={() => alert("Checkout integration ready to connect.")}>
                Checkout
              </Button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
