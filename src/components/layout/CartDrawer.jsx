import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { useStrkImages, PLACEHOLDER } from '@/hooks/useStrkImages'

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart()
  const ref = useStrkImages([items, isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-ivory shadow-2xl flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 text-ink hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag className="w-10 h-10 text-sand" strokeWidth={1} />
            <p className="font-serif text-2xl text-ink">Your cart is empty</p>
            <p className="text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 inline-block bg-gold text-ivory text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-gold-deep transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <Link to={`/product/${item.productId}`} onClick={closeCart} className="shrink-0">
                    <img
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      alt={item.name}
                      className="w-20 h-20 object-cover bg-cream"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="block font-serif text-base uppercase tracking-[0.1em] text-ink hover:text-gold transition-colors truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-stone mt-0.5">{item.variant}</p>
                    <p className="text-sm text-ink mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="px-2 py-1 text-ink hover:text-gold transition-colors"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm text-ink min-w-[2ch] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="px-2 py-1 text-ink hover:text-gold transition-colors"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label="Remove item"
                        className="text-stone hover:text-gold transition-colors"
                        onClick={() => removeItem(item.key)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-sand px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.15em] text-stone">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-stone">
                Shipping and taxes calculated at checkout. Free worldwide shipping.
              </p>
              <button
                type="button"
                className="w-full bg-gold text-ivory text-xs uppercase tracking-[0.15em] py-4 hover:bg-gold-deep transition-colors duration-300"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
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
