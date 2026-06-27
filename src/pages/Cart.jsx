import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Minus, Plus, X, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { findProductById } from "@/data/products"
import { formatPrice } from "@/lib/utils"

function CartPageLine({ line, onQuantity, onRemove }) {
  const product = findProductById(line.productId)
  const imageQuery = product?.images?.[0]?.query || line.name

  return (
    <li className="grid grid-cols-12 gap-5 py-7 border-b border-hairline items-start">
      <Link
        to={`/shop/${line.productId}`}
        className="col-span-3 sm:col-span-3 aspect-[4/5] overflow-hidden bg-ivory-soft block"
      >
        <img
          data-strk-img-id={`cartp-${line.key}`}
          data-strk-img={imageQuery}
          data-strk-img-ratio="4x5"
          data-strk-img-width="400"
          alt={line.name}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </Link>

      <div className="col-span-9 sm:col-span-6">
        <span className="eyebrow">{line.eyebrow || product?.eyebrow}</span>
        <Link
          to={`/shop/${line.productId}`}
          className="product-name block mt-1 hover:text-gold-deep"
        >
          {line.name}
        </Link>
        {line.variantLabel && (
          <p className="mt-1 text-[11px] tracking-[0.18em] uppercase text-muted">
            {line.variantLabel}
          </p>
        )}
        <div className="mt-4 inline-flex items-center border border-hairline">
          <button
            type="button"
            onClick={() => onQuantity(line.key, line.quantity - 1)}
            className="h-9 w-9 inline-flex items-center justify-center text-espresso-soft hover:bg-ivory-soft"
            aria-label="Decrease quantity"
          >
            <Minus size={12} strokeWidth={1.5} />
          </button>
          <span className="w-9 text-center text-xs">{line.quantity}</span>
          <button
            type="button"
            onClick={() => onQuantity(line.key, line.quantity + 1)}
            className="h-9 w-9 inline-flex items-center justify-center text-espresso-soft hover:bg-ivory-soft"
            aria-label="Increase quantity"
          >
            <Plus size={12} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-3 flex sm:flex-col items-end sm:items-end justify-between sm:justify-start gap-3 sm:text-right">
        <span className="font-serif text-lg text-espresso">
          {formatPrice(line.price * line.quantity)}
        </span>
        <button
          type="button"
          onClick={() => onRemove(line.key)}
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-muted hover:text-espresso"
        >
          <X size={12} strokeWidth={1.5} />
          Remove
        </button>
      </div>
    </li>
  )
}

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [items])

  return (
    <div ref={containerRef} className="bg-ivory">
      <section className="bg-ivory-soft border-b border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-40 pb-12 text-center">
          <span className="eyebrow">Shopping Bag</span>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl text-espresso tracking-tight">
            Your Bag
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-14 md:py-20">
        {items.length === 0 ? (
          <div className="py-20 text-center">
            <ShoppingBag size={36} strokeWidth={1} className="mx-auto text-muted" />
            <p className="mt-6 font-serif text-2xl text-espresso">Your bag is empty.</p>
            <p className="mt-2 text-sm text-muted max-w-sm mx-auto">
              Begin a quiet collection — start with our bestsellers.
            </p>
            <Link to="/shop" className="btn btn-primary mt-8 inline-flex">
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <ul>
                {items.map((line) => (
                  <CartPageLine
                    key={line.key}
                    line={line}
                    onQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </ul>
              <button
                type="button"
                onClick={clearCart}
                className="mt-6 text-[11px] uppercase tracking-[0.22em] text-muted hover:text-espresso"
              >
                Clear bag
              </button>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 bg-white border border-hairline p-8">
                <h2 className="font-serif text-2xl text-espresso">Order Summary</h2>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between text-espresso-soft">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-espresso-soft">
                    <span>Shipping</span>
                    <span>{subtotal >= 75 ? "Free" : "$8"}</span>
                  </div>
                  <div className="flex justify-between text-muted">
                    <span>Estimated tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-hairline flex items-center justify-between">
                  <span className="eyebrow">Total</span>
                  <span className="font-serif text-2xl text-espresso">
                    {formatPrice(subtotal + (subtotal >= 75 ? 0 : 8))}
                  </span>
                </div>
                <button type="button" className="btn btn-primary w-full mt-6">
                  Checkout
                </button>
                <p className="mt-4 text-[11px] tracking-[0.14em] uppercase text-muted text-center">
                  Free worldwide shipping over $75
                </p>
              </div>
            </aside>
          </div>
        )}
      </section>
    </div>
  )
}