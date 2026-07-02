import { useEffect } from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn, formatPrice } from '@/lib/utils'
import StrkImage from '@/components/ui/StrkImage'

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, totalItems } = useCart()

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-[#1A1512]/40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-[#F6F3EF] shadow-2xl transition-transform duration-500 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-[#E4DDD4] px-6 py-5">
          <h2 className="font-serif text-lg uppercase tracking-[0.2em] text-[#1A1512]">
            Your Cart ({totalItems})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-[#6B6259] transition-colors hover:text-[#1A1512]"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="mb-4 text-[#C49A6C]" />
            <p className="font-serif text-xl text-[#1A1512]">Your cart is empty</p>
            <p className="mt-2 text-sm text-[#6B6259]">
              Discover pieces crafted to be treasured.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-6 bg-[#C49A6C] px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#A67C52]"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-[#F0EAE3]">
                      <StrkImage
                        id={`${item.imageId}-cart`}
                        query={`[cart-item-${item.id}-name] ${item.search}`}
                        ratio="3x4"
                        width="200"
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3
                          id={`cart-item-${item.id}-name`}
                          className="font-serif text-sm font-medium uppercase tracking-[0.15em] text-[#1A1512]"
                        >
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-xs capitalize text-[#6B6259]">
                          Tone: {item.tone}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center border border-[#E4DDD4]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center text-[#1A1512] hover:bg-[#F0EAE3]"
                            aria-label="Decrease"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="flex h-7 w-7 items-center justify-center text-xs text-[#1A1512]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center text-[#1A1512] hover:bg-[#F0EAE3]"
                            aria-label="Increase"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="font-serif text-[#1A1512]">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id, item.tone)}
                      className="self-start text-[#6B6259] transition-colors hover:text-red-600"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#E4DDD4] px-6 py-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.1em] text-[#6B6259]">Subtotal</span>
                <span className="font-serif text-xl text-[#1A1512]">{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-5 text-xs text-[#6B6259]">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full bg-[#1A1512] py-4 text-xs font-medium uppercase tracking-[0.15em] text-[#F6F3EF] transition-colors hover:bg-[#C49A6C]"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full border border-[#1A1512] py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#1A1512] transition-colors hover:bg-[#1A1512] hover:text-[#F6F3EF]"
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
