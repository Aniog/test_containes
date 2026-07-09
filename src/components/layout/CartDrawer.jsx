import { ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import QuantitySelector from '@/components/shared/QuantitySelector.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/data/products.js'

const CartDrawer = () => {
  const {
    closeCart,
    isOpen,
    items,
    removeItem,
    subtotal,
    updateQuantity,
  } = useCart()

  return (
    <div
      className={`fixed inset-0 z-[80] transition-all duration-300 ${
        isOpen ? 'pointer-events-auto bg-velvet/35 opacity-100' : 'pointer-events-none bg-transparent opacity-0'
      }`}
      aria-hidden={!isOpen}
      aria-modal="true"
      role="dialog"
    >
      <button
        type="button"
        aria-label="Close cart overlay"
        className="absolute inset-0 z-0"
        onClick={closeCart}
      />
      <div
        className={`relative z-10 ml-auto flex h-full w-full max-w-xl flex-col bg-ivory shadow-soft transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-truffle/10 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-champagne">Your cart</p>
            <h2 className="font-editorial text-3xl text-velvet">Bag essentials</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-truffle/15 text-truffle transition-colors duration-300 hover:text-velvet"
            onClick={closeCart}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length ? (
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.lineId}
                  className="rounded-[2rem] border border-truffle/10 bg-white p-5 shadow-card"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-champagne">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-editorial text-2xl uppercase tracking-[0.18em] text-velvet">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-truffle">{item.variant}</p>
                    </div>
                    <p className="text-sm font-medium text-velvet">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <QuantitySelector
                      quantity={item.quantity}
                      onDecrease={() => updateQuantity(item.lineId, item.quantity - 1)}
                      onIncrease={() => updateQuantity(item.lineId, item.quantity + 1)}
                    />
                    <button
                      type="button"
                      className="text-sm uppercase tracking-[0.18em] text-truffle transition-colors duration-300 hover:text-velvet"
                      onClick={() => removeItem(item.lineId)}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-[2rem] border border-dashed border-truffle/20 bg-white px-8 py-16 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-porcelain text-champagne">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-editorial text-3xl text-velvet">Your cart is still empty</h3>
                <p className="mt-2 max-w-sm text-sm leading-7 text-truffle">
                  Add a few Velmora favorites and they will appear here instantly.
                </p>
              </div>
              <Link className="btn-primary" to="/shop" onClick={closeCart}>
                Shop the Collection
              </Link>
            </div>
          )}
        </div>

        <div className="border-t border-truffle/10 bg-white px-6 py-5">
          <div className="mb-5 flex items-center justify-between text-sm text-truffle">
            <span>Subtotal</span>
            <span className="font-medium text-velvet">{formatPrice(subtotal)}</span>
          </div>
          <button type="button" className="btn-primary w-full">
            Checkout Coming Soon
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer
