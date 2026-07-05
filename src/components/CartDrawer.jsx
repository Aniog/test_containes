import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import { PLACEHOLDER_SVG } from '@/data/products'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
  } = useCart()

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[70] bg-foreground/40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={cn(
          'fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-card shadow-2xl transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="flex items-center gap-2 font-serif text-xl font-semibold tracking-wide">
            <ShoppingBag size={20} />
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="p-2 transition-opacity hover:opacity-60"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="mb-4 text-muted-foreground" />
            <p className="font-serif text-xl">Your cart is empty</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Discover something precious to add.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full max-w-xs rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col gap-5">
                {items.map((item) => (
                  <li key={item.cartItemId} className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                      <img
                        data-strk-img-id={item.imgId}
                        data-strk-img={`[product-${item.id}-title] [product-${item.id}-desc]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src={PLACEHOLDER_SVG}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="product-name text-sm font-medium">
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-xs capitalize text-muted-foreground">
                          {item.variant} tone
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full border border-border bg-background">
                          <button
                            className="p-1.5"
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-4 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            className="p-1.5"
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="p-2 text-muted-foreground transition-colors hover:text-foreground"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border px-6 py-5">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-4 text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full rounded-md bg-accent py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-3 w-full py-2 text-center text-sm text-muted-foreground underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
