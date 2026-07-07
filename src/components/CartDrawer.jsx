import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import { StockImage } from '@/components/ui/StockImage'

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#1A1614]/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#F9F7F2] shadow-2xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#E2DDD5] px-6 py-5">
            <h2 className="font-serif text-lg font-medium uppercase tracking-[0.16em] text-[#1A1614]">
              Your Cart ({count})
            </h2>
            <button
              type="button"
              onClick={closeCart}
              className="text-[#6B625B] transition-colors hover:text-[#1A1614]"
              aria-label="Close cart"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={40} className="mb-4 text-[#B9975B]" strokeWidth={1.2} />
              <p className="font-serif text-base uppercase tracking-[0.12em] text-[#1A1614]">
                Your cart is empty
              </p>
              <p className="mt-2 text-sm text-[#6B625B]">
                Discover pieces crafted to be treasured.
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-6">
                  {items.map((line) => (
                    <li key={line.id} className="flex gap-4">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-[#F2EFE9]">
                        <StockImage
                          id={`cart-img-${line.id}`}
                          query={`[cart-title-${line.product.slug}]`}
                          ratio="3x4"
                          width="200"
                          alt={line.product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p
                            id={`cart-title-${line.product.slug}`}
                            className="font-serif text-xs font-medium uppercase tracking-[0.14em] text-[#1A1614]"
                          >
                            {line.product.name}
                          </p>
                          <p className="mt-1 text-xs capitalize text-[#6B625B]">
                            Tone: {line.tone}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-[#E2DDD5]">
                            <button
                              type="button"
                              onClick={() => updateQuantity(line.id, line.quantity - 1)}
                              className="px-2 py-1 text-[#6B625B] hover:bg-[#F2EFE9]"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} strokeWidth={1.5} />
                            </button>
                            <span className="w-8 text-center text-sm text-[#1A1614]">
                              {line.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(line.id, line.quantity + 1)}
                              className="px-2 py-1 text-[#6B625B] hover:bg-[#F2EFE9]"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} strokeWidth={1.5} />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-[#1A1614]">
                              {formatPrice(line.product.price * line.quantity)}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeItem(line.id)}
                              className="text-[#6B625B] hover:text-[#B85C4E]"
                              aria-label="Remove item"
                            >
                              <Trash2 size={16} strokeWidth={1.5} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-[#E2DDD5] px-6 py-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[#6B625B]">Subtotal</span>
                  <span className="font-serif text-lg text-[#1A1614]">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="mb-5 text-xs text-[#6B625B]">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  type="button"
                  className="w-full bg-[#1A1614] py-4 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#2A211C]"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  )
}
