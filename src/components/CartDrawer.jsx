import { Minus, Plus, Trash2, X, ShoppingBag } from "lucide-react";
import { Sheet, SheetHeader, SheetContent, SheetFooter } from "./ui/Sheet";
import { Button } from "./ui/Button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    count,
  } = useCart();

  return (
    <Sheet open={isOpen} onClose={closeCart} side="right">
      <SheetHeader onClose={closeCart}>
        <h2 className="font-serif text-lg font-medium text-base-800">Your Cart</h2>
        <span className="text-xs text-muted">{count} items</span>
      </SheetHeader>

      <SheetContent className="px-6 py-6">
        {items.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <ShoppingBag size={40} className="mb-4 text-hairline" />
            <p className="font-serif text-base text-base-800">Your cart is empty</p>
            <p className="mt-1 text-sm text-muted">
              Discover something beautiful to treasure.
            </p>
            <Button
              variant="secondary"
              size="md"
              className="mt-6"
              onClick={closeCart}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={`${item.product.id}-${item.tone}`} className="flex gap-4">
                <div className="h-20 w-20 shrink-0 overflow-hidden bg-cream-100">
                  <img
                    src={`https://placehold.co/160x160/e2ddd6/8a857d?text=${encodeURIComponent(item.product.name.charAt(0))}`}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="font-serif text-xs font-medium uppercase tracking-widest text-base-800">
                      {item.product.name}
                    </p>
                    <p className="mt-0.5 text-xs capitalize text-muted">
                      {item.tone} tone
                    </p>
                    <p className="mt-1 text-sm font-medium text-base-800">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center border border-hairline">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.tone, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="h-7 w-7 flex items-center justify-center text-muted hover:text-base-800 disabled:opacity-30"
                        aria-label="Decrease"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-7 text-center text-xs font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.tone, item.quantity + 1)
                        }
                        className="h-7 w-7 flex items-center justify-center text-muted hover:text-base-800"
                        aria-label="Increase"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.tone)}
                      className="text-muted transition-colors hover:text-red-600"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </SheetContent>

      {items.length > 0 && (
        <SheetFooter>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-base-800">
              <span className="text-sm">Subtotal</span>
              <span className="font-serif text-lg font-medium">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-muted">
              Shipping and taxes calculated at checkout.
            </p>
            <Button variant="primary" size="lg" className="w-full">
              Checkout
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full"
              onClick={closeCart}
            >
              Continue Shopping
            </Button>
          </div>
        </SheetFooter>
      )}
    </Sheet>
  );
}
