import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { PLACEHOLDER } from "@/lib/placeholder"
import { cn } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCart()
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items.length])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-espresso/40 backdrop-blur-sm z-[60] transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />
      {/* Drawer */}
      <aside
        ref={ref}
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-[70] shadow-2xl flex flex-col transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <p className="font-serif text-xl tracking-wide text-ink">
            Your Bag ({items.length})
          </p>
          <button onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag className="w-10 h-10 text-stone" />
            <p className="font-serif text-2xl text-ink">Your bag is empty</p>
            <p className="text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <button
              onClick={closeCart}
              className="mt-2 bg-gold text-ivory text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-gold-soft transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <div
                  key={item.lineId}
                  className="flex gap-4 py-5 border-b border-line"
                >
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-sand overflow-hidden"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={`${item.imgId}-a`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="font-serif text-base uppercase tracking-[0.12em] text-ink leading-tight">
                          {item.name}
                        </p>
                        <p className="text-xs text-stone mt-1">{item.variant}</p>
                      </div>
                      <p className="text-sm text-ink">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          onClick={() =>
                            updateQuantity(item.lineId, item.quantity - 1)
                          }
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.lineId, item.quantity + 1)
                          }
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-stone hover:text-gold"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-stone uppercase tracking-[0.15em] text-xs">
                  Subtotal
                </span>
                <span className="text-ink font-medium">${subtotal}</span>
              </div>
              <p className="text-xs text-stone">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-gold text-ivory text-xs uppercase tracking-[0.15em] py-4 hover:bg-gold-soft transition-colors">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-xs uppercase tracking-[0.15em] text-ink hover:text-gold transition-colors"
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
