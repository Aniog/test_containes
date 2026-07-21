import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag, Trash2, X } from "lucide-react"
import QuantitySelector from "@/components/shared/QuantitySelector"

const CartDrawer = ({
  isOpen,
  items,
  subtotal,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  useEffect(() => {
    if (!isOpen) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-velvet/50 transition ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-velvet/10 bg-porcelain text-velvet shadow-lift transition duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velvet/10 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Cart</p>
            <h2 className="mt-2 font-serif text-3xl text-velvet">Your Velmora Edit</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velvet/10 p-3 text-velvet transition hover:bg-velvet hover:text-ivory"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="rounded-full bg-champagne p-5 text-velvet shadow-soft">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-serif text-3xl text-velvet">Your cart is empty</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-velvet/70">
              Start with a signature pair of huggies or a gift-ready set and build your Velmora collection.
            </p>
            <Link
              to="/shop"
              onClick={onClose}
              className="mt-8 rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-velvet transition hover:bg-rosewood hover:text-ivory"
            >
              Shop Pieces
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <div key={item.key} className="rounded-3xl border border-velvet/10 bg-ivory p-5 shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-gold">{item.variant}</p>
                      <h3 className="mt-2 font-serif text-xl uppercase tracking-[0.18em] text-velvet">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm text-velvet/70">${item.price} each</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.key)}
                      className="rounded-full border border-velvet/10 p-2 text-velvet/70 transition hover:bg-velvet hover:text-ivory"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <QuantitySelector
                      quantity={item.quantity}
                      onDecrease={() => onUpdateQuantity(item.key, item.quantity - 1)}
                      onIncrease={() => onUpdateQuantity(item.key, item.quantity + 1)}
                    />
                    <p className="text-base font-medium text-velvet">${item.quantity * item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velvet/10 bg-porcelain px-6 py-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-velvet/70">
                <span>Subtotal</span>
                <span className="text-base font-medium text-velvet">${subtotal}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-velvet/65">
                Checkout is ready to connect later. For now, your cart interactions are fully working in the storefront.
              </p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-gold px-5 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-velvet transition hover:bg-rosewood hover:text-ivory"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
