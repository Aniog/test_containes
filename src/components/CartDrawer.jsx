import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, X } from 'lucide-react'
import { Sheet } from '@/components/ui/Sheet'
import { Button } from '@/components/ui/Button'
import { ProductImage } from '@/components/ui/ProductImage'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    count,
  } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [isOpen, items])

  return (
    <Sheet
      open={isOpen}
      onClose={closeCart}
      title="Your Bag"
      className="max-w-md"
    >
      {items.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <p className="font-serif text-2xl">Your bag is empty</p>
          <p className="mt-2 text-sm text-velmora-stone">
            Discover pieces crafted to be treasured.
          </p>
          <Button className="mt-8" onClick={closeCart} asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div ref={containerRef} className="flex h-full flex-col">
          <p className="mb-6 text-sm text-velmora-stone">
            {count} {count === 1 ? 'item' : 'items'}
          </p>

          <div className="flex-1 space-y-6 overflow-y-auto">
            {items.map((item) => {
              const cartTitleId = `cart-title-${item.id}`
              return (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-24 flex-shrink-0 bg-velmora-taupe/30">
                    <ProductImage
                      imgId={`product-thumb-${item.id}`}
                      query={`[${cartTitleId}]`}
                      ratio="1x1"
                      width="200"
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                    <span id={cartTitleId} className="sr-only">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-serif text-base uppercase tracking-widest">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-xs capitalize text-velmora-stone">
                        {item.variant} tone
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center border border-velmora-taupe">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="px-2 py-1 text-velmora-stone hover:text-velmora-charcoal"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-[1.5rem] px-1 text-center text-xs">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="px-2 py-1 text-velmora-stone hover:text-velmora-charcoal"
                          aria-label="Increase"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start p-1 text-velmora-stone transition-colors hover:text-red-600"
                    aria-label="Remove"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              )
            })}
          </div>

          <div className="border-t border-velmora-taupe/60 pt-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest text-velmora-stone">
                Subtotal
              </span>
              <span className="font-serif text-xl">${subtotal}</span>
            </div>
            <p className="mb-4 text-xs text-velmora-stone">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="w-full">Checkout</Button>
            <Button
              variant="ghost"
              className="mt-3 w-full"
              onClick={closeCart}
              asChild
            >
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      )}
    </Sheet>
  )
}
