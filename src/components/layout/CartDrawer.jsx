import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, resolveStrkImgUrl } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()

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
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-ivory shadow-2xl flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl tracking-wide">
            Your Bag{" "}
            <span className="text-stone text-base">({items.length})</span>
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="hover:text-gold transition-colors">
            <X width={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
              <ShoppingBag width={36} strokeWidth={1} className="text-stone" />
              <p className="font-serif text-xl text-ink">Your bag is empty</p>
              <p className="text-sm text-stone max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <Button as={Link} to="/shop" onClick={closeCart} className="mt-2">
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-sand overflow-hidden"
                  >
                    <img
                      src={resolveStrkImgUrl(item.imgId)}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      id={item.titleId}
                      className="font-serif text-base uppercase tracking-[0.12em] leading-tight hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                    <span id={item.descId} className="sr-only">
                      {item.subtitle}
                    </span>
                    <p className="text-xs text-stone mt-1">{item.tone}</p>
                    <p className="text-sm text-ink mt-1.5">{formatPrice(item.price)}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-line">
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2 py-1.5 hover:bg-sand transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus width={12} />
                        </button>
                        <span className="px-3 text-xs w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2 py-1.5 hover:bg-sand transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus width={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-xs text-stone hover:text-ink underline underline-offset-4 transition-colors"
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

        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5 space-y-4 bg-ivory">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-stone">Subtotal</span>
              <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <Button className="w-full">Checkout</Button>
            <button
              onClick={closeCart}
              className="w-full text-xs uppercase tracking-[0.18em] text-stone hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
