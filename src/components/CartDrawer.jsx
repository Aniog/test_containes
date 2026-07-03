import { Minus, Plus, Trash2, ShoppingBag, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/CartContext"
import { StockImage } from "./StockImage"
import { Link } from "react-router-dom"

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    total,
  } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="flex w-full flex-col bg-paper sm:max-w-md">
        <SheetHeader className="border-b border-divider pb-4">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag size={20} strokeWidth={1.5} />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <ShoppingBag size={48} className="mb-4 text-linen" strokeWidth={1} />
            <p className="font-serif text-xl text-ink">Your cart is empty</p>
            <p className="mt-2 text-sm text-taupe">Discover something beautiful.</p>
            <Button onClick={closeCart} className="mt-6" asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.cartItemId} className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-sand">
                      <StockImage
                        id={`cart-${item.cartItemId}`}
                        query={`[product-${item.id}-name]`}
                        ratio="4x5"
                        width={200}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link
                          to={`/products/${item.id}`}
                          onClick={closeCart}
                          className="font-serif text-sm font-medium uppercase tracking-ultra text-ink hover:text-champagne"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-0.5 text-xs text-taupe">{item.tone} Tone</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-divider">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1.5 hover:bg-linen"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1.5 hover:bg-linen"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-ink">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="self-start text-taupe hover:text-ink"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-divider pt-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-taupe">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-taupe">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-base font-medium text-ink">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="mt-5 w-full">Checkout</Button>
              <p className="mt-3 text-center text-xs text-taupe">
                Free worldwide shipping on orders over $50
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
