import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import CartThumb from '@/components/CartThumb'
import { useCart } from '@/context/CartContext'
import strkImgConfig from '@/strk-img-config.json'

export default function CartDrawer() {
  const { items, count, subtotal, isCartOpen, closeCart, updateQuantity, removeItem } = useCart()
  const panelRef = useRef(null)

  useEffect(() => {
    if (!isCartOpen) return undefined
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && closeCart()
    window.addEventListener('keydown', onKey)
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, panelRef.current)
    })
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.cancelAnimationFrame(frameId)
    }
  }, [isCartOpen, closeCart, items.length])

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping bag">
      <button
        type="button"
        aria-label="Close bag"
        className="absolute inset-0 animate-fade-in bg-ink/70 backdrop-blur-sm"
        onClick={closeCart}
      />

      <aside
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-full max-w-md animate-slide-in-right flex-col border-l border-line bg-coal shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center justify-between border-b border-line/60 px-6 py-5">
          <h2 className="font-serif text-xl font-medium uppercase tracking-[0.18em] text-ivory">
            Your Bag <span className="text-gold">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close bag"
            className="flex h-9 w-9 items-center justify-center text-sand transition-colors hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-line" strokeWidth={1.25} />
            <p className="font-serif text-2xl font-light text-ivory">Your bag is empty</p>
            <p className="text-sm leading-relaxed text-sand">
              Fill it with pieces worth treasuring.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-widest2 text-inkonaccent transition-colors duration-300 hover:bg-goldlight"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line/50 overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="h-24 w-20 shrink-0 overflow-hidden border border-line/50 bg-mocha"
                  >
                    <CartThumb
                      id={item.product.cartThumbId}
                      query={`${item.product.imageAlt} gold jewelry product still life dark background`}
                      ratio="3x4"
                      width={200}
                      alt={item.product.imageAlt}
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.productId}`}
                          onClick={closeCart}
                          className="font-serif text-base font-medium uppercase tracking-[0.12em] text-ivory transition-colors hover:text-gold"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-0.5 text-[11px] uppercase tracking-widest2 text-taupe">
                          {item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.product.name}`}
                        className="text-taupe transition-colors hover:text-gold"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, -1)}
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 items-center justify-center text-sand transition-colors hover:text-gold"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm text-ivory">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, 1)}
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 items-center justify-center text-sand transition-colors hover:text-gold"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold tracking-wide text-ivory">
                        ${item.product.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-line/60 px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-widest3 text-sand">
                  Subtotal
                </span>
                <span className="font-serif text-2xl font-medium text-ivory">${subtotal}</span>
              </div>
              <p className="mt-1.5 text-xs text-taupe">
                Complimentary worldwide shipping · 30-day returns
              </p>
              <button
                type="button"
                className="mt-5 w-full bg-gold py-4 text-xs font-semibold uppercase tracking-widest2 text-inkonaccent transition-colors duration-300 hover:bg-goldlight"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full border border-line py-4 text-xs font-semibold uppercase tracking-widest2 text-sand transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}

        {/* Hidden catalog so every product's cart thumbnail id is pre-registered
            with the stock image system; visible line items reuse the same ids. */}
        <div aria-hidden="true" className="hidden">
          <img
            data-strk-img-id="cart-thumb-vivid-aura-jewels"
            data-strk-img="Vivid Aura Jewels gold ear cuff with crystal accent gold jewelry product still life dark background"
            data-strk-img-ratio="3x4"
            data-strk-img-width="200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
          />
          <img
            data-strk-img-id="cart-thumb-majestic-flora-nectar"
            data-strk-img="Majestic Flora Nectar multicolor floral crystal necklace gold jewelry product still life dark background"
            data-strk-img-ratio="3x4"
            data-strk-img-width="200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
          />
          <img
            data-strk-img-id="cart-thumb-golden-sphere-huggies"
            data-strk-img="Golden Sphere Huggies chunky gold dome huggie earrings gold jewelry product still life dark background"
            data-strk-img-ratio="3x4"
            data-strk-img-width="200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
          />
          <img
            data-strk-img-id="cart-thumb-amber-lace-earrings"
            data-strk-img="Amber Lace Earrings textured gold filigree drop earrings gold jewelry product still life dark background"
            data-strk-img-ratio="3x4"
            data-strk-img-width="200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
          />
          <img
            data-strk-img-id="cart-thumb-royal-heirloom-set"
            data-strk-img="Royal Heirloom Set gold earring and necklace gift set gold jewelry product still life dark background"
            data-strk-img-ratio="3x4"
            data-strk-img-width="200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
          />
        </div>
      </aside>
    </div>
  )
}
