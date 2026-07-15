import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { useShop } from '@/context/ShopContext'

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function CartItem({ item, onClose }) {
  const { updateQuantity, removeFromCart } = useShop()

  return (
    <div className="rounded-[1.5rem] border border-champagne/80 bg-ivory p-4 text-espresso shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <Link
            to={`/product/${item.slug}`}
            onClick={onClose}
            className="font-serif text-xl uppercase tracking-product text-espresso transition hover:text-gold"
          >
            {item.name}
          </Link>
          <p className="text-sm text-taupe">{item.variant}</p>
          <p className="text-sm leading-6 text-mocha">{item.subtitle}</p>
          <p className="text-sm font-medium text-espresso">{money.format(item.price)}</p>
        </div>

        <button
          type="button"
          onClick={() => removeFromCart(item.productId, item.variant)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne bg-parchment text-espresso transition hover:border-gold hover:text-gold"
          aria-label={`Remove ${item.name}`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center rounded-full border border-champagne bg-parchment p-1">
          <button
            type="button"
            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-espresso transition hover:bg-ivory"
            aria-label={`Decrease quantity of ${item.name}`}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-10 text-center text-sm font-medium text-espresso">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-espresso transition hover:bg-ivory"
            aria-label={`Increase quantity of ${item.name}`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <p className="text-sm font-medium text-espresso">
          {money.format(item.price * item.quantity)}
        </p>
      </div>
    </div>
  )
}

export default function CartDrawer() {
  const { cartItems, subtotal, isCartOpen, closeCart } = useShop()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-espresso/45 backdrop-blur-sm transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-champagne/70 bg-parchment p-5 text-espresso shadow-veil transition duration-500 sm:p-6 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-champagne/70 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-taupe">Your bag</p>
            <h2 className="font-serif text-3xl text-espresso">Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne bg-ivory text-espresso transition hover:border-gold hover:text-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="hide-scrollbar flex-1 space-y-4 overflow-y-auto py-6">
          {cartItems.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-champagne bg-ivory px-6 py-12 text-center text-espresso">
              <p className="font-serif text-3xl text-espresso">Your cart is empty</p>
              <p className="mt-3 text-sm leading-6 text-taupe">
                Add a piece you love and it will appear here for checkout later.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={`${item.productId}-${item.variant}`}
                item={item}
                onClose={closeCart}
              />
            ))
          )}
        </div>

        <div className="space-y-4 border-t border-champagne/70 pt-5">
          <div className="flex items-center justify-between text-sm text-mocha">
            <span>Subtotal</span>
            <span className="font-medium text-espresso">{money.format(subtotal)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-gold px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-espresso transition hover:bg-champagne"
          >
            Proceed to Checkout
          </button>
          <p className="text-center text-xs leading-5 text-taupe">
            Secure checkout coming next. For now, this storefront demonstrates the full cart flow.
          </p>
        </div>
      </aside>
    </>
  )
}
