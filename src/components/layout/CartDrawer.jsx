import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetBody,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { StrkImage } from "@/components/ui/StrkImage";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart} className="flex flex-col">
      <SheetHeader onClose={closeCart}>
        <SheetTitle>Your Cart ({count})</SheetTitle>
      </SheetHeader>

      {items.length === 0 ? (
        <SheetBody className="flex flex-1 flex-col items-center justify-center text-center">
          <ShoppingBag className="mb-4 h-10 w-10 text-velmora-border" />
          <p className="font-serif text-lg tracking-wide text-velmora-fg">
            Your cart is empty
          </p>
          <p className="mt-1 text-sm text-velmora-muted">
            Discover something beautiful.
          </p>
          <Button className="mt-6" onClick={closeCart} asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </SheetBody>
      ) : (
        <>
          <SheetBody className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-velmora-border">
              {items.map((item) => {
                const titleId = `cart-title-${item.id}-${item.variant}`;
                return (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 py-5">
                    <Link
                      to={`/products/${item.id}`}
                      onClick={closeCart}
                      className="h-24 w-20 flex-shrink-0 overflow-hidden bg-velmora-cream"
                    >
                      <StrkImage
                        id={`cart-img-${item.id}`}
                        query={`[${titleId}] gold jewelry`}
                        ratio="4x5"
                        width={160}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3
                            id={titleId}
                            className="font-serif text-xs uppercase tracking-widest text-velmora-fg"
                          >
                            <Link
                              to={`/products/${item.id}`}
                              onClick={closeCart}
                              className="hover:text-velmora-accent"
                            >
                              {item.name}
                            </Link>
                          </h3>
                          <p className="mt-0.5 text-xs capitalize text-velmora-muted">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velmora-muted transition-colors hover:text-red-600"
                          aria-label="Remove"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-velmora-border">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 text-velmora-muted hover:text-velmora-fg"
                            aria-label="Decrease"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 text-velmora-muted hover:text-velmora-fg"
                            aria-label="Increase"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-velmora-fg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </SheetBody>
          <SheetFooter>
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="font-medium text-velmora-fg">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full">Checkout</Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={closeCart}
                asChild
              >
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </SheetFooter>
        </>
      )}
    </Sheet>
  );
}
