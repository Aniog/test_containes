import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext.jsx"
import { formatPrice } from "../lib/utils.js"
import { MinusIcon, PlusIcon, ArrowRightIcon, CheckIcon } from "../components/ui/Icons.jsx"
import { useState } from "react"

export default function Cart() {
  const { items, subtotal, setQuantity, removeFromCart, clearCart } = useCart()
  const [placing, setPlacing] = useState(false)
  const [placed, setPlaced] = useState(false)

  const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 8
  const total = subtotal + shipping

  const placeOrder = () => {
    if (items.length === 0) return
    setPlacing(true)
    setTimeout(() => {
      setPlacing(false)
      setPlaced(true)
      clearCart()
    }, 900)
  }

  if (placed) {
    return (
      <div className="bg-ivory pt-32 md:pt-40 pb-32 min-h-[80vh]">
        <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16 max-w-2xl text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-champagne text-espresso mb-8">
            <CheckIcon className="h-7 w-7" />
          </div>
          <h1 className="display-serif text-[44px] md:text-[56px] leading-[1.1]">
            Thank you, beautifully.
          </h1>
          <p className="mt-5 text-[15px] text-ink/75 max-w-md mx-auto font-light leading-relaxed">
            Your order has been received. We've sent a confirmation to your
            inbox and your pieces are already being wrapped in our
            signature gift packaging.
          </p>
          <Link to="/shop" className="mt-10 inline-flex btn-primary !w-auto">
            Continue Shopping
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-ivory pt-24 md:pt-28 pb-24 min-h-[80vh]">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
        <div className="pb-8 md:pb-12 max-w-2xl">
          <p className="eyebrow">Your Bag</p>
          <h1 className="display-serif text-[40px] md:text-[56px] mt-3 leading-[1.05]">
            {items.length === 0 ? "Nothing here yet." : "Review your bag."}
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16 max-w-md">
            <p className="text-[15px] text-ink/75 font-light mb-8">
              Begin with a piece to wear every day.
            </p>
            <Link to="/shop" className="btn-primary !w-auto">
              Shop the Collection
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-8">
              <ul className="border-t border-hairline">
                {items.map((item) => (
                  <li
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-5 md:gap-6 py-6 border-b border-hairline"
                  >
                    <Link
                      to={`/product/${item.id}`}
                      className="block w-24 md:w-32 aspect-[4/5] flex-shrink-0 overflow-hidden bg-ivory-soft"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="product-name text-[11px] md:text-[12px]">{item.name}</p>
                          <p className="mt-1 text-[12px] text-muted capitalize">
                            {item.variant === "gold" ? "18K Gold Plated" : item.variant}
                          </p>
                        </div>
                        <p className="text-[15px] text-ink font-medium whitespace-nowrap">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="inline-flex items-center border border-hairline">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQuantity(item.id, item.variant, item.quantity - 1)}
                            className="h-9 w-9 inline-flex items-center justify-center text-ink/70 hover:text-ink"
                          >
                            <MinusIcon className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-[12px] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQuantity(item.id, item.variant, item.quantity + 1)}
                            className="h-9 w-9 inline-flex items-center justify-center text-ink/70 hover:text-ink"
                          >
                            <PlusIcon className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-[10px] tracking-eyebrow uppercase text-muted hover:text-ink transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-eyebrow uppercase text-ink/70 hover:text-ink"
              >
                <span className="rotate-180 inline-block"><ArrowRightIcon className="h-3.5 w-3.5" /></span>
                Continue Shopping
              </Link>
            </div>
            <aside className="md:col-span-4">
              <div className="md:sticky md:top-24 bg-ivory-soft border border-hairline p-7">
                <h2 className="font-serif text-[24px] text-ink">Order Summary</h2>
                <dl className="mt-6 space-y-3 text-[14px]">
                  <div className="flex justify-between">
                    <dt className="text-muted">Subtotal</dt>
                    <dd className="text-ink">{formatPrice(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Shipping</dt>
                    <dd className="text-ink">
                      {shipping === 0 ? "Complimentary" : formatPrice(shipping)}
                    </dd>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-hairline">
                    <dt className="text-ink font-medium">Total</dt>
                    <dd className="text-ink font-medium text-[18px] font-serif">
                      {formatPrice(total)}
                    </dd>
                  </div>
                </dl>
                <button
                  type="button"
                  onClick={placeOrder}
                  disabled={placing}
                  className="mt-7 btn-primary"
                >
                  {placing ? "Placing Order…" : "Place Order"}
                </button>
                <p className="mt-4 text-[11px] text-muted text-center">
                  Demo checkout — no payment is processed.
                </p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
