import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StrkImage from '@/components/StrkImage'
import { useEffect } from 'react'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const containerRef = useImageLoader([items, isOpen])

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
        className={`fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <aside
        ref={containerRef}
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-ivory shadow-2xl flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h3 className="font-serif text-xl tracking-widest3 uppercase">
            Your Bag ({count})
          </h3>
          <button onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold transition-colors">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag size={40} strokeWidth={1} className="text-sand" />
            <p className="font-serif text-2xl text-ink">Your bag is empty</p>
            <p className="text-sm text-muted">Discover pieces crafted to be treasured.</p>
            <button
              onClick={closeCart}
              className="mt-2 text-xs uppercase tracking-widest2 border border-ink text-ink px-8 py-4 hover:bg-ink hover:text-ivory transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-5 border-b border-sand">
                  <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                    <StrkImage
                      imgId={`${item.imgId}-cart`}
                      query={`[cart-${item.key}-name]`}
                      ratio="1x1"
                      width={200}
                      alt={item.name}
                      className="w-20 h-20 object-cover bg-cream"
                    />
                    <span id={`cart-${item.key}-name`} className="hidden">{item.name}</span>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="block font-serif text-base uppercase tracking-widest3 text-ink hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-muted mt-1">Tone: {item.variant}</p>
                    <p className="text-sm text-ink mt-1">${item.price.toFixed(2)}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1 text-ink hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-xs uppercase tracking-widest2 text-muted hover:text-gold transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-sand px-6 py-5 bg-cream">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs uppercase tracking-widest2 text-muted">Subtotal</span>
                <span className="font-serif text-2xl text-ink">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted mb-4">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-gold text-ink text-xs uppercase tracking-widest2 font-semibold py-4 hover:bg-gold-deep hover:text-ivory transition-colors">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors py-2"
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
