import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    count,
  } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent side="right" className="flex flex-col bg-brand-ivory">
        <div className="flex items-center justify-between px-6 py-5">
          <h2 className="font-serif text-2xl tracking-wide">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-brand-charcoal/70 hover:text-brand-charcoal"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <Separator />

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="mb-4 h-10 w-10 text-brand-taupe" />
            <p className="font-serif text-xl text-brand-charcoal">Your cart is empty</p>
            <p className="mt-2 text-sm text-brand-taupe">
              Discover something beautiful today.
            </p>
            <Button onClick={closeCart} className="mt-8" asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 bg-brand-cream" />
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-widest text-brand-charcoal">
                            {item.name}
                          </p>
                          <p className="mt-0.5 text-xs capitalize text-brand-taupe">
                            {item.tone} tone
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.tone)}
                          className="text-brand-taupe hover:text-brand-charcoal"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-brand-charcoal/10">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.tone, item.quantity - 1)
                            }
                            className="p-2 text-brand-charcoal hover:bg-brand-cream"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.tone, item.quantity + 1)
                            }
                            className="p-2 text-brand-charcoal hover:bg-brand-cream"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-brand-charcoal/10 bg-brand-cream/30 px-6 py-6">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-brand-taupe">Subtotal ({count} items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mb-5 text-xs text-brand-taupe">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full">Checkout</Button>
              <button
                onClick={closeCart}
                className="mt-3 w-full text-center text-xs uppercase tracking-widest text-brand-charcoal hover:text-brand-rose-dark"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
