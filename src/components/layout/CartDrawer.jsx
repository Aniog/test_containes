import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useStrkImages, resolveImgUrl } from "@/lib/strk-images"
import { formatPrice } from "@/lib/utils"
import Button from "@/components/ui/Button"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()
  const ref = useStrkImages([items.length, isOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        ref={ref}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">
            Your Cart
          </h2>
          <button type="button" onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-stone" strokeWidth={1} />
            <p className="font-serif text-xl text-ink">Your cart is empty</p>
            <p className="text-sm text-stone">Discover pieces crafted to be treasured.</p>
            <Button as={Link} to="/shop" onClick={closeCart} variant="outline">
              Shop the Collection
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-line py-5 last:border-0"
                >
                  <Link to={`/product/${item.productId}`} onClick={closeCart} className="shrink-0">
                    <img
                      alt={item.name}
                      src={resolveImgUrl(item.imgId)}
                      className="h-24 w-20 object-cover bg-sand"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <h3 id={`${item.id}-name`} className="font-serif text-base uppercase tracking-widest3 text-ink">
                        {item.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-stone hover:text-ink"
                        aria-label="Remove item"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs uppercase tracking-widest2 text-stone">
                      {item.variant}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-8 text-center text-sm text-ink">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest2 text-stone">Subtotal</span>
                <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-stone">Shipping and taxes calculated at checkout.</p>
              <Button className="mt-4 w-full">Checkout</Button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center text-xs uppercase tracking-widest2 text-stone hover:text-ink"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
