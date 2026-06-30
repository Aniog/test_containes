import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import ImageLoader, { PLACEHOLDER } from "@/components/ImageLoader"

export default function CartDrawer() {
  const { items, isOpen, close, remove, setQty, subtotal, count } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-editorial transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">
            Your Cart {count > 0 && `(${count})`}
          </h2>
          <button type="button" onClick={close} aria-label="Close cart" className="text-ink hover:text-gold">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={32} className="text-stone" />
            <p className="font-serif text-xl text-ink">Your cart is empty</p>
            <p className="text-sm text-stone">Discover pieces crafted to be treasured.</p>
            <button type="button" onClick={close} className="btn-outline mt-2">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ImageLoader as="div" className="flex-1 overflow-y-auto px-6 py-4" deps={[items, isOpen]}>
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-line py-5">
                  <Link to={`/product/${item.productId}`} onClick={close} className="shrink-0">
                    <div className="h-24 w-20 overflow-hidden bg-sand">
                      <img
                        alt={item.name}
                        data-strk-img-id={item.imgId}
                        data-strk-img={`[cart-${item.id}-name] gold jewelry`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="160"
                        src={PLACEHOLDER}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <h3
                          id={`cart-${item.id}-name`}
                          className="font-serif text-base uppercase tracking-widest3 text-ink"
                        >
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-stone">{item.tone} · {item.material}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(item.id)}
                        className="text-xs text-stone hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => setQty(item.id, item.qty - 1)}
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="min-w-8 text-center text-sm text-ink">{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(item.id, item.qty + 1)}
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-serif text-base text-ink">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </ImageLoader>

            <div className="border-t border-line px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest2 text-stone">Subtotal</span>
                <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-stone">Shipping & taxes calculated at checkout.</p>
              <button type="button" className="btn-primary mt-4 w-full">
                Checkout
              </button>
              <button
                type="button"
                onClick={close}
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
