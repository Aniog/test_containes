import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, count, updateQuantity, removeFromCart } =
    useCart();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="flex w-full flex-col bg-cream sm:max-w-md">
        <SheetHeader className="pb-2">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <ShoppingBag className="mb-4 h-12 w-12 text-taupe" />
            <p className="font-serif text-xl font-light uppercase tracking-widest">
              Your cart is empty
            </p>
            <p className="mt-2 text-sm text-mocha">
              Discover pieces crafted to be treasured.
            </p>
            <Button asChild className="mt-6" onClick={closeCart}>
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="shrink-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 rounded-sm object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="font-serif text-sm font-medium uppercase tracking-wider"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-taupe transition-colors hover:text-espresso"
                          aria-label="Remove item"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs uppercase tracking-wider text-mocha">
                        {item.tone} tone
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-hairline bg-white">
                          <button
                            className="p-1.5 text-mocha hover:text-espresso"
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-[1rem] text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            className="p-1.5 text-mocha hover:text-espresso"
                            onClick={() =>
                              updateQuantity(item.cartId, item.quantity + 1)
                            }
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

            <div className="border-t border-hairline pt-4">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-mocha">Subtotal</span>
                <span className="font-serif text-lg font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="mb-4 text-xs text-mocha">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full" size="lg">
                Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="mt-2 w-full"
                onClick={closeCart}
                asChild
              >
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
