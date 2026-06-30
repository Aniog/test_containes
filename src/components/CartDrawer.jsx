import { Link } from "react-router-dom"
import { Minus, Plus, X, Trash2 } from "lucide-react"
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
import { StrkImage, ImageLoader } from "@/components/Image"

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md bg-surface border-l border-divider flex flex-col">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-serif text-2xl text-cream tracking-wide">
            Your Cart ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <p className="font-serif text-xl text-cream mb-2">Your cart is empty</p>
            <p className="text-sm text-cream-muted mb-6">
              Discover pieces crafted to be treasured.
            </p>
            <Button
              onClick={closeCart}
              asChild
              className="bg-champagne text-ink hover:bg-champagne-dark uppercase tracking-widest text-xs"
            >
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <ImageLoader>
            <div className="flex-1 overflow-y-auto py-4 space-y-6">
              {items.map((item) => {
                const { product, variant, quantity } = item
                return (
                  <div key={`${product.id}-${variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-surface-highlight shrink-0 overflow-hidden">
                      <StrkImage
                        id={`cart-thumb-${product.id}`}
                        query={`[product-name-${product.id}]`}
                        ratio="3x4"
                        width="200"
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p
                          id={`product-name-${product.id}`}
                          className="font-serif text-sm uppercase tracking-widest text-cream"
                        >
                          {product.name}
                        </p>
                        <p className="text-xs text-cream-muted mt-1">{variant} Tone</p>
                        <p className="text-sm text-cream mt-1">${product.price}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-divider">
                          <button
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(product.id, variant, quantity - 1)}
                            className="p-2 text-cream hover:bg-surface-highlight transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm text-cream">{quantity}</span>
                          <button
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(product.id, variant, quantity + 1)}
                            className="p-2 text-cream hover:bg-surface-highlight transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          aria-label="Remove item"
                          onClick={() => removeItem(product.id, variant)}
                          className="text-cream-muted hover:text-champagne transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ImageLoader>
        )}

        {items.length > 0 && (
          <SheetFooter className="flex-col gap-4 pt-4 border-t border-divider">
            <div className="flex justify-between w-full text-cream">
              <span className="text-sm uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-cream-muted">Shipping & taxes calculated at checkout.</p>
            <Button className="w-full bg-champagne text-ink hover:bg-champagne-dark uppercase tracking-widest text-xs h-12">
              Checkout
            </Button>
            <Button
              variant="outline"
              onClick={closeCart}
              asChild
              className="w-full border-cream/20 text-cream hover:bg-surface-highlight uppercase tracking-widest text-xs h-12"
            >
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
