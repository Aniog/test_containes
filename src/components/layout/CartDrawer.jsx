import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/hooks/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"
import StrkImage from "@/components/ui/StrkImage"

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()
  const ref = useStrkImages([items, isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        ref={ref}
        className={cn(
          "fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream text-ink shadow-card flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag{" "}
            <span className="text-stone text-base align-middle">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 hover:text-gold transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <ShoppingBag size={40} className="text-stone" strokeWidth={1} />
              <p className="font-serif text-xl">Your bag is empty</p>
              <p className="text-sm text-stone max-w-xs">
                Discover pieces crafted to be treasured — for them, or for you.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((it) => (
                <li key={it.key} className="flex gap-4">
                  <Link
                    to={`/product/${it.id}`}
                    onClick={closeCart}
                    className="w-20 h-24 shrink-0 bg-sand overflow-hidden"
                  >
                    <StrkImage
                      imgId={it.imgId}
                      query={`[cart-${it.key}-title] [cart-${it.key}-desc]`}
                      ratio="3x4"
                      width={160}
                      alt={it.name}
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <span id={`cart-${it.key}-title`} className="sr-only">{it.name}</span>
                    <span id={`cart-${it.key}-desc`} className="sr-only">
                      {it.name} gold jewelry
                    </span>
                    <Link
                      to={`/product/${it.id}`}
                      onClick={closeCart}
                      className="font-serif text-base uppercase tracking-[0.12em] leading-tight hover:text-gold transition-colors"
                    >
                      {it.name}
                    </Link>
                    <p className="text-xs text-stone mt-1">Tone: {it.tone}</p>
                    <p className="text-sm mt-1">{formatPrice(it.price)}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-ink/15">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 hover:bg-sand transition-colors"
                          onClick={() => updateQuantity(it.key, it.quantity - 1)}
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{it.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 hover:bg-sand transition-colors"
                          onClick={() => updateQuantity(it.key, it.quantity + 1)}
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(it.key)}
                        className="text-[11px] uppercase tracking-[0.15em] text-stone hover:text-gold transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-stone">Subtotal</span>
              <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full bg-gold text-cream py-3.5 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-gold-deep transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
