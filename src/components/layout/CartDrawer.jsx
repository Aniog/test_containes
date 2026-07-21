import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { toast } from 'sonner'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext.jsx'
import { resolveStrkImg } from '@/lib/strkImg.js'
import { formatPrice } from '@/lib/utils'
import { PRODUCT_IMAGE_MAP } from '@/data/productImages.js'

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, updateQty, removeItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items.length])

  const handleCheckout = () => {
    toast.success('Checkout is coming soon — your cart is saved.')
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => (open ? null : closeCart())}>
      <SheetContent className="flex w-full flex-col p-0">
        <SheetHeader className="border-b border-line px-6 py-5">
          <SheetTitle>Your Bag</SheetTitle>
          <SheetDescription>
            {items.length === 0 ? 'Your bag is empty' : `${items.length} item${items.length > 1 ? 's' : ''}`}
          </SheetDescription>
        </SheetHeader>

        <div ref={containerRef} className="flex flex-1 flex-col">
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
              <ShoppingBag className="h-10 w-10 text-line" />
              <p className="font-serif text-xl text-ink">Nothing here yet</p>
              <p className="text-sm text-stone">
                Discover pieces crafted to be treasured.
              </p>
              <Button asChild className="mt-2">
                <Link to="/shop" onClick={closeCart}>
                  Shop the Collection
                </Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <ul className="divide-y divide-line">
                  {items.map((item) => (
                    <li key={item.key} className="flex gap-4 py-5">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="block h-24 w-20 shrink-0 overflow-hidden bg-sand"
                      >
                        <img
                          src={resolveStrkImg(PRODUCT_IMAGE_MAP[item.slug]?.mainId ?? `product-${item.slug}-main`, 200)}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </Link>

                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            to={`/product/${item.slug}`}
                            onClick={closeCart}
                            className="font-serif text-base font-semibold uppercase tracking-[0.12em] text-ink hover:text-bronze"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => removeItem(item.key)}
                            aria-label={`Remove ${item.name}`}
                            className="text-stone transition-colors hover:text-ink"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-stone">
                          {item.variant} tone
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center border border-line">
                            <button
                              className="px-2.5 py-1.5 text-ink hover:bg-sand"
                              onClick={() => updateQty(item.key, item.qty - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-sm text-ink">{item.qty}</span>
                            <button
                              className="px-2.5 py-1.5 text-ink hover:bg-sand"
                              onClick={() => updateQty(item.key, item.qty + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="text-sm font-medium text-ink">
                            {formatPrice(item.price * item.qty)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-line px-6 py-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone">Subtotal</p>
                  <p className="font-serif text-xl font-semibold text-ink">
                    {formatPrice(subtotal)}
                  </p>
                </div>
                <p className="mt-1 text-xs text-stone">
                  Shipping & taxes calculated at checkout. Free worldwide shipping.
                </p>
                <Button className="mt-4 w-full" size="lg" onClick={handleCheckout}>
                  Checkout
                </Button>
                <button
                  onClick={closeCart}
                  className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.25em] text-stone transition-colors hover:text-ink"
                >
                  Continue shopping
                </button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
