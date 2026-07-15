import { Sheet } from "@/components/ui/Sheet";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
    <Sheet open={isOpen} onClose={closeCart} title="Your Cart">
      {count === 0 ? (
        <div className="flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="font-serif text-2xl">Your cart is empty</p>
          <p className="mt-2 text-sm text-velmora-taupe">
            Discover pieces crafted to be treasured.
          </p>
          <Button
            className="mt-8"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closeCart();
            }}
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <div className="flex-1 divide-y divide-velmora-sand px-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-6">
                <div className="h-20 w-20 shrink-0 bg-velmora-sand/50" />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="font-serif text-sm uppercase tracking-widest">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-xs capitalize text-velmora-taupe">
                      {item.variant}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-velmora-sand">
                      <button
                        className="p-1.5 hover:bg-velmora-sand transition-colors"
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        className="p-1.5 hover:bg-velmora-sand transition-colors"
                        onClick={() =>
                          updateQuantity(item.id, item.variant, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">
                        ${item.price * item.quantity}
                      </span>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-velmora-taupe hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-velmora-sand bg-velmora-cream p-6">
            <div className="flex items-center justify-between text-sm uppercase tracking-wide">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal}</span>
            </div>
            <p className="mt-2 text-xs text-velmora-taupe">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="mt-6 w-full" size="lg">
              Checkout
            </Button>
            <Button
              variant="ghost"
              className="mt-3 w-full"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeCart();
              }}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      )}
    </Sheet>
  );
}
