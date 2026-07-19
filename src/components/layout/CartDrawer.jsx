import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

function CartLine({ product, item, closeCart, setQuantity, removeItem }) {
  return (
    <div className="flex gap-4">
      <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
        <img
          src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
          alt={item.name}
          data-strk-img-id={product.cartImgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="200"
          className="w-20 h-20 object-cover bg-cream"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <Link
          to={`/product/${item.id}`}
          onClick={closeCart}
          className="font-serif text-base uppercase tracking-[0.12em] leading-tight hover:text-gold transition-colors"
        >
          {item.name}
        </Link>
        <p className="text-xs text-taupe mt-1">Tone: {item.tone}</p>
        <p className="text-sm text-espresso mt-1">{formatPrice(item.price)}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-sand">
            <button
              onClick={() => setQuantity(item.key, item.quantity - 1)}
              className="px-2 py-1.5 hover:bg-cream transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" strokeWidth={1.5} />
            </button>
            <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
            <button
              onClick={() => setQuantity(item.key, item.quantity + 1)}
              className="px-2 py-1.5 hover:bg-cream transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" strokeWidth={1.5} />
            </button>
          </div>
          <button
            onClick={() => removeItem(item.key)}
            className="text-xs text-taupe hover:text-espresso underline underline-offset-4 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, setQuantity, subtotal, count } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, items.length])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-ivory shadow-editorial flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag {count > 0 && <span className="text-taupe text-base">({count})</span>}
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="hover:text-gold transition-colors">
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag className="w-10 h-10 text-sand" strokeWidth={1} />
            <p className="font-serif text-2xl text-espresso">Your bag is empty</p>
            <p className="text-sm text-taupe max-w-xs">
              Discover pieces crafted to be treasured.
            </p>
            <button
              onClick={closeCart}
              className="mt-2 bg-gold text-espresso text-[11px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-gold-deep transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id)
                if (!product) return null
                return (
                <CartLine key={item.key} product={product} item={item} closeCart={closeCart} setQuantity={setQuantity} removeItem={removeItem} />
                )
              })}
            </div>

            {/* Static image registry so the strk-img plugin can resolve cart image IDs.
                Hidden from view; the visible CartLine reuses the same registered IDs. */}
            <div aria-hidden="true" className="hidden">
              {products.map((product) => (
                <img
                  key={product.id}
                  src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
                  alt=""
                  data-strk-img-id={product.cartImgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                />
              ))}
            </div>

            <div className="border-t border-sand px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.25em] text-taupe">Subtotal</span>
                <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-taupe">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-gold text-espresso text-[11px] uppercase tracking-[0.25em] py-4 hover:bg-gold-deep transition-colors duration-300">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-[11px] uppercase tracking-[0.25em] text-espresso underline underline-offset-4 hover:text-gold transition-colors"
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
