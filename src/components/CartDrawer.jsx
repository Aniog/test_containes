import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useStore } from '@/context/StoreContext'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import QuantitySelector from '@/components/ui/QuantitySelector'
import ProductImage from '@/components/ui/ProductImage'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function CartDrawer() {
  const { cartItems, cartSubtotal, isCartOpen, closeCart, updateQuantity, removeFromCart } = useStore()
  const containerRef = useImageLoader([isCartOpen, cartItems.length])

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[80] bg-velmora-ink/45 backdrop-blur-sm transition',
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={closeCart}
      />

      <aside
        ref={containerRef}
        className={cn(
          'fixed inset-y-0 right-0 z-[90] flex w-full max-w-lg flex-col border-l border-velmora-sand bg-velmora-ivory shadow-velmora transition duration-300',
          isCartOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-velmora-sand px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-taupe">Your bag</p>
            <h3 className="mt-2 font-display text-3xl text-velmora-ink">Cart</h3>
          </div>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-velmora-sand text-velmora-ink"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-dashed border-velmora-sand bg-velmora-cream px-8 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-taupe">Empty cart</p>
              <h4 className="mt-4 font-display text-3xl text-velmora-ink">Add something treasured.</h4>
              <p className="mt-4 text-sm leading-7 text-velmora-taupe">
                Your future favorites will appear here with a polished checkout-ready summary.
              </p>
              <Link to="/shop" onClick={closeCart} className="mt-6">
                <Button>Shop now</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <article key={`${item.productId}-${item.tone}`} className="grid grid-cols-[110px_1fr] gap-4 rounded-3xl border border-velmora-sand bg-velmora-cream p-4">
                  <div className="overflow-hidden rounded-2xl bg-velmora-mist">
                    <ProductImage image={item.product.gallery[0]} className="aspect-[4/5] h-full w-full object-cover" width="500" ratio="4x3" />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link to={`/product/${item.product.slug}`} onClick={closeCart}>
                          <h4 className="font-display text-xl uppercase tracking-product text-velmora-ink">{item.product.name}</h4>
                        </Link>
                        <p className="mt-2 text-sm text-velmora-taupe">{item.tone}</p>
                      </div>
                      <button type="button" className="text-xs uppercase tracking-[0.2em] text-velmora-taupe" onClick={() => removeFromCart(item.productId, item.tone)}>
                        Remove
                      </button>
                    </div>
                    <p className="mt-4 text-sm text-velmora-ink">${item.product.price}</p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <QuantitySelector quantity={item.quantity} onChange={(value) => updateQuantity(item.productId, item.tone, value)} />
                      <p className="text-sm font-medium text-velmora-ink">${item.lineTotal}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-sand px-6 py-6">
          <div className="flex items-center justify-between text-sm text-velmora-taupe">
            <span>Subtotal</span>
            <span className="text-lg font-medium text-velmora-ink">${cartSubtotal}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-velmora-taupe">Taxes and duties calculated at checkout. Free worldwide shipping on orders over $75.</p>
          <Button className="mt-5 w-full">Proceed to checkout</Button>
        </div>
      </aside>
    </>
  )
}
