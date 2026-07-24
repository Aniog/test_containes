import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'

function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart()

  return (
    <div className={`fixed inset-0 z-[70] ${isCartOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-velvet transition-transform duration-500 sm:w-[28rem] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-champagne px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-deepgold">Your Bag</p>
            <h2 className="font-serif text-2xl text-velmora-espresso">Cart</h2>
          </div>
          <button type="button" onClick={closeCart} className="rounded-full p-2 text-velmora-espresso transition hover:bg-velmora-champagne/50" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="mb-5 h-10 w-10 text-velmora-gold" />
            <h3 className="font-serif text-3xl text-velmora-espresso">Your cart is waiting.</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-ink/75">Discover demi-fine pieces for gifting, stacking, and everyday shine.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-7 bg-velmora-gold px-6 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-deepgold hover:text-velmora-porcelain"
            >
              Shop Jewelry
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="divide-y divide-velmora-champagne/80">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 py-5">
                    <Link
                      to={`/products/${item.product.id}`}
                      onClick={closeCart}
                      className="flex h-24 w-20 shrink-0 items-end overflow-hidden bg-gradient-to-br from-velmora-champagne via-velmora-porcelain to-velmora-gold/35 p-2 shadow-sm"
                      aria-label={`View ${item.product.name}`}
                    >
                      <span className="font-serif text-[0.62rem] uppercase leading-3 tracking-[0.18em] text-velmora-espresso">
                        {item.product.category}
                      </span>
                    </Link>
                    <div className="min-w-0 flex-1">
                      <Link to={`/products/${item.product.id}`} onClick={closeCart} className="font-serif text-sm uppercase tracking-luxury text-velmora-espresso hover:text-velmora-deepgold">
                        {item.product.name}
                      </Link>
                      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-velmora-ink/65">{item.variant} tone</p>
                      <p className="mt-2 text-sm font-semibold text-velmora-espresso">{formatPrice(item.product.price)}</p>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="flex items-center border border-velmora-champagne bg-velmora-ivory">
                          <button type="button" className="p-2 text-velmora-espresso hover:bg-velmora-champagne/60" onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold text-velmora-espresso">{item.quantity}</span>
                          <button type="button" className="p-2 text-velmora-espresso hover:bg-velmora-champagne/60" onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button type="button" onClick={() => removeFromCart(item.key)} className="text-xs font-semibold uppercase tracking-[0.14em] text-velmora-deepgold hover:text-velmora-espresso">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-velmora-champagne bg-velmora-ivory px-5 py-5">
              <div className="flex items-center justify-between text-base font-semibold text-velmora-espresso">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-velmora-ink/70">Shipping and taxes calculated at checkout. Free worldwide shipping on every order.</p>
              <button type="button" className="mt-5 w-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-deepgold hover:text-velmora-porcelain focus:outline-none focus:ring-2 focus:ring-velmora-deepgold focus:ring-offset-2">
                Continue to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
