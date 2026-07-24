import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext.jsx'
import ImageTag from '@/components/ui/ImageTag.jsx'

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, subtotal, updateQuantity } =
    useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!isCartOpen || !drawerRef.current) {
      return undefined
    }

    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [isCartOpen, items])

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-[#221c1f]/55 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        ref={drawerRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-[#d9c7b7] bg-[#f6f0ea] text-[#241d1f] shadow-[-24px_0_80px_rgba(20,12,15,0.2)] transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#d9c7b7] px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6d5a57]">Your cart</p>
            <h2 className="font-['Cormorant_Garamond'] text-3xl text-[#241d1f]">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7b7] text-[#241d1f] transition hover:border-[#b78b54] hover:text-[#b78b54]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <p className="font-['Cormorant_Garamond'] text-4xl text-[#241d1f]">Your bag is empty</p>
            <p className="max-w-sm text-sm leading-6 text-[#6d5a57]">
              Add a few pieces to start curating your everyday gold rotation.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="rounded-full bg-[#b78b54] px-6 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#221c1f] transition hover:bg-[#c99a5f]"
            >
              Shop pieces
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {items.map((item) => {
                const toneKey = item.tone.toLowerCase().replace(/\s+/g, '-')
                const titleId = `cart-item-${item.id}-${toneKey}-title`
                const descId = `cart-item-${item.id}-${toneKey}-desc`

                return (
                  <article
                    key={`${item.id}-${item.tone}`}
                    className="grid grid-cols-[104px_1fr] gap-4 rounded-[1.75rem] border border-[#e5d5c8] bg-white/70 p-4 shadow-[0_12px_36px_rgba(36,29,31,0.06)]"
                  >
                    <ImageTag
                      alt={item.name}
                      imgId={item.imageId}
                      query={`[${descId}] [${titleId}]`}
                      ratio="1x1"
                      width="320"
                      className="aspect-square w-full rounded-[1.25rem] object-cover"
                    />
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p id={titleId} className="font-['Cormorant_Garamond'] text-2xl uppercase tracking-[0.14em] text-[#241d1f]">
                            {item.name}
                          </p>
                          <p id={descId} className="mt-1 text-xs uppercase tracking-[0.28em] text-[#6d5a57]">
                            {item.tone}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-[#241d1f]">${item.price}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-[#d9c7b7] bg-[#f8f2ec]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="px-3 py-2 text-sm text-[#241d1f]"
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center text-sm text-[#241d1f]">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="px-3 py-2 text-sm text-[#241d1f]"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.tone)}
                          className="text-xs uppercase tracking-[0.24em] text-[#6d5a57] transition hover:text-[#b78b54]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="border-t border-[#d9c7b7] bg-[#efe3d6]/60 px-6 py-6">
              <div className="mb-5 flex items-center justify-between text-sm text-[#241d1f]">
                <span className="uppercase tracking-[0.24em] text-[#6d5a57]">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-[#221c1f] px-6 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#f6f0ea] transition hover:bg-[#3a3034]"
              >
                Checkout Coming Soon
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
