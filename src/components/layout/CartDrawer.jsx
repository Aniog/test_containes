import { Link } from 'react-router-dom'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { StrkImage, StrkImageContainer } from '@/components/ui/StrkImage'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { isOpen } = useCart()
  if (!isOpen) return null
  return <CartDrawerContent />
}

function CartDrawerContent() {
  const { closeCart, items, removeItem, updateQuantity, subtotal, count } = useCart()

  return (
    <StrkImageContainer deps={[items.length]} className="fixed inset-0 z-[60]">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-ink/50 animate-fade-in"
        onClick={closeCart}
      />
      {/* panel */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col animate-slide-in">
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/50">
          <h2 className="font-serif text-2xl text-charcoal tracking-wide">
            Your Cart <span className="text-muted text-base">({count})</span>
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-charcoal hover:text-gold">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag size={40} className="text-stone" />
            <p className="font-serif text-2xl text-charcoal">Your cart is empty</p>
            <p className="text-sm text-muted">Discover pieces crafted to be treasured.</p>
            <button
              onClick={closeCart}
              className="mt-2 bg-gold text-cream px-8 py-3.5 text-[11px] uppercase tracking-widest2 hover:bg-gold-deep transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {items.map((item) => {
                const nameId = `cart-name-${item.id}`
                return (
                <div key={item.lineId} className="flex gap-4">
                  <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                    <StrkImage
                      imgId={`${item.imgId}-card`}
                      query={`[${nameId}] gold jewelry`}
                      ratio="1x1"
                      width={200}
                      alt={item.imgAlt}
                      className="w-20 h-20 object-cover bg-sand"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        id={nameId}
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-lg text-charcoal uppercase tracking-widest2 leading-tight hover:text-gold"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-muted hover:text-gold text-xs"
                        aria-label="Remove"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-[11px] uppercase tracking-widest2 text-muted mt-0.5">
                      {item.variant}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-stone/60">
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2.5 py-1.5 text-charcoal hover:bg-sand"
                          aria-label="Decrease"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 text-sm text-charcoal min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2.5 py-1.5 text-charcoal hover:bg-sand"
                          aria-label="Increase"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <p className="text-charcoal text-sm">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>

            <div className="border-t border-stone/50 px-6 py-5 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-[11px] uppercase tracking-widest2 text-muted">Subtotal</span>
                <span className="font-serif text-2xl text-charcoal">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-gold text-cream py-4 text-[11px] uppercase tracking-widest2 hover:bg-gold-deep transition-colors">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-[11px] uppercase tracking-widest2 text-charcoal hover:text-gold"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </StrkImageContainer>
  )
}
