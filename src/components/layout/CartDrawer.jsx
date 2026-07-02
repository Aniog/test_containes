import React from 'react'
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { StrkImage } from '@/components/ui/StrkImage'
import { Button } from '@/components/ui/Button'

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-espresso-900/40 backdrop-blur-sm"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md transform bg-cream-50 shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-cream-300 px-6 py-4">
            <h2 className="product-name text-base">Your Cart ({count})</h2>
            <button
              onClick={closeCart}
              className="p-2 text-espresso-900 transition-colors hover:text-gold"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="mb-4 text-cream-300" strokeWidth={1} />
              <p className="font-serif text-2xl text-espresso-900">Your cart is empty</p>
              <p className="mt-2 text-sm text-espresso-600">
                Discover something beautiful to add.
              </p>
              <Button variant="primary" size="md" className="mt-6" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <ul className="space-y-6">
                  {items.map((item) => {
                    const variant = item.product.variants.find((v) => v.id === item.variantId)
                    return (
                      <li key={`${item.product.id}-${item.variantId}`} className="flex gap-4">
                        <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-cream-200">
                          <StrkImage
                            id={`product-card-main-${item.product.id}`}
                            query={`[product-title-${item.product.id}] ${item.product.images.main.query}`}
                            ratio="3x4"
                            width={200}
                            alt={item.product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <h3 className="product-name text-xs">{item.product.name}</h3>
                            <p className="mt-1 text-xs uppercase tracking-wide text-espresso-600">
                              {variant?.name}
                            </p>
                            <p className="mt-1 text-sm font-medium text-espresso-900">
                              {formatPrice(item.product.price)}
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="inline-flex items-center border border-cream-300">
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.variantId, item.quantity - 1)
                                }
                                className="flex h-7 w-7 items-center justify-center hover:bg-cream-200"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="flex h-7 w-7 items-center justify-center text-xs tabular-nums">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.variantId, item.quantity + 1)
                                }
                                className="flex h-7 w-7 items-center justify-center hover:bg-cream-200"
                                aria-label="Increase quantity"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.product.id, item.variantId)}
                              className="text-espresso-600 transition-colors hover:text-red-600"
                              aria-label="Remove item"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="border-t border-cream-300 px-6 py-5">
                <div className="flex items-center justify-between text-espresso-900">
                  <span className="font-sans text-sm uppercase tracking-wide">Subtotal</span>
                  <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
                </div>
                <p className="mt-1 text-xs text-espresso-600">
                  Shipping and taxes calculated at checkout.
                </p>
                <Button variant="primary" size="lg" className="mt-5 w-full">
                  Checkout
                </Button>
                <Button variant="ghost" size="sm" className="mt-3 w-full" onClick={closeCart}>
                  Continue Shopping
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
