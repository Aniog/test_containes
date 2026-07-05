import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { Minus, Plus, X, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, totalItems, updateQuantity, removeItem } =
    useCart()

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md bg-velmora-cream border-l border-velmora-sand p-0 flex flex-col">
        <SheetHeader className="px-6 pt-6 pb-4">
          <SheetTitle className="font-serif text-2xl tracking-wide text-velmora-ink">
            Your Bag ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" strokeWidth={1.2} />
            <p className="font-serif text-xl text-velmora-ink mb-2">Your bag is empty</p>
            <p className="text-sm text-velmora-taupe mb-6">
              Discover pieces crafted to be treasured.
            </p>
            <Button
              asChild
              className="bg-velmora-gold hover:bg-velmora-goldDark text-white rounded-none px-8"
              onClick={closeCart}
            >
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-6">
              <div className="space-y-6 pb-6">
                {items.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
                    <Link
                      to={`/products/${item.slug}`}
                      onClick={closeCart}
                      className="w-20 h-24 bg-velmora-sand flex-shrink-0 overflow-hidden strk-placeholder"
                    >
                      <img
                        data-strk-img-id={`cart-thumb-${item.id}`}
                        data-strk-img={`[product-${item.id}-desc] [product-${item.id}-name]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link
                            to={`/products/${item.slug}`}
                            onClick={closeCart}
                            className="font-serif text-base uppercase tracking-[0.15em] text-velmora-ink hover:text-velmora-gold transition-colors"
                          >
                            {item.name}
                          </Link>
                          <p className="text-xs text-velmora-taupe mt-1 capitalize">
                            {item.tone} tone
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartItemId)}
                          className="text-velmora-taupe hover:text-velmora-ink transition-colors p-1"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-sand">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="px-2 py-1 text-velmora-ink hover:bg-velmora-sand transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="px-2 py-1 text-velmora-ink hover:bg-velmora-sand transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-medium text-velmora-ink">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="px-6 py-6 border-t border-velmora-sand bg-velmora-cream">
              <div className="flex justify-between items-center mb-4">
                <span className="text-velmora-taupe">Subtotal</span>
                <span className="font-serif text-xl text-velmora-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-velmora-taupe mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <Button
                className="w-full bg-velmora-gold hover:bg-velmora-goldDark text-white rounded-none h-12 uppercase tracking-[0.2em] text-xs font-medium"
                onClick={() =>
                  alert('Checkout integration coming soon — this is a storefront prototype.')
                }
              >
                Checkout
              </Button>
              <Button
                variant="outline"
                asChild
                className="w-full mt-3 border-velmora-ink text-velmora-ink hover:bg-velmora-ink hover:text-velmora-cream rounded-none h-12 uppercase tracking-[0.2em] text-xs font-medium"
                onClick={closeCart}
              >
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
