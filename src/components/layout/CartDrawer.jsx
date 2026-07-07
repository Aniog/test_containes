import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import ProductImage from '@/components/ui/ProductImage'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal } =
    useCart()
  const panelRef = useRef(null)
  const [render, setRender] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setRender(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      const timeout = setTimeout(() => setRender(false), 500)
      return () => clearTimeout(timeout)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!render) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [render, closeCart])

  if (!render) return null

  return (
    <div
      className={`fixed inset-0 z-[60] transition-opacity duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="absolute inset-0 pointer-events-none flex justify-end">
        <div
          ref={panelRef}
          className={`relative h-full w-full max-w-md bg-espresso text-cream shadow-2xl flex flex-col pointer-events-auto transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-cream/10">
            <h2 className="font-serif text-xl uppercase tracking-[0.18em]">
              Your Cart
            </h2>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Close cart"
              className="p-1 hover:text-gold transition-colors duration-300"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-gold mb-4" strokeWidth={1} />
                <p className="font-serif text-lg uppercase tracking-widest">
                  Your cart is empty
                </p>
                <p className="text-sm text-cream/60 mt-2 font-sans">
                  Discover something treasured.
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-6 inline-block bg-gold text-espresso px-8 py-3 text-xs uppercase tracking-[0.16em] font-sans hover:bg-soft-gold transition-colors duration-300"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li
                    key={`${item.id}-${item.tone}`}
                    className="flex gap-4 pb-6 border-b border-cream/10 last:border-0"
                  >
                    <div className="w-20 h-24 bg-champagne/10 flex-shrink-0">
                      <ProductImage
                        product={{
                          id: item.id,
                          name: item.name,
                          shortDescription: item.shortDescription,
                          imgId: item.imgId,
                          hoverImgId: item.hoverImgId,
                        }}
                        variant="primary"
                        ratio="3x4"
                        width={200}
                        className="w-full h-full"
                        titleId={`cart-title-${item.id}`}
                        descId={`cart-desc-${item.id}`}
                        renderTextRefs
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-sm uppercase tracking-[0.14em]">
                          <Link
                            to={`/products/${item.slug}`}
                            onClick={closeCart}
                          >
                            {item.name}
                          </Link>
                        </h3>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.tone)}
                          aria-label={`Remove ${item.name} from cart`}
                          className="text-cream/50 hover:text-gold transition-colors duration-300"
                        >
                          <Trash2 size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-xs text-cream/60 font-sans mt-1 capitalize">
                        Tone: {item.tone}
                      </p>
                      <p className="text-sm font-serif text-gold mt-1">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.tone, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center border border-cream/20 hover:border-gold text-cream hover:text-gold transition-colors duration-300"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-sans w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.tone, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center border border-cream/20 hover:border-gold text-cream hover:text-gold transition-colors duration-300"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-cream/10 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between text-sm font-sans">
                <span className="uppercase tracking-[0.14em]">Subtotal</span>
                <span className="font-serif text-lg text-gold">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-cream/50 font-sans">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full bg-gold text-espresso py-4 text-xs uppercase tracking-[0.18em] font-sans hover:bg-soft-gold transition-colors duration-300"
              >
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-xs uppercase tracking-[0.14em] text-cream/70 hover:text-gold transition-colors duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
