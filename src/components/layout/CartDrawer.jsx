import React from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import strkImgConfig from '@/strk-img-config.json'

function getImageUrl(imageId) {
  const entry = strkImgConfig[imageId]
  if (!entry || !entry.picked) return null
  const result = entry.results.find((r) => r.id === entry.picked)
  return result ? result.url : null
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="flex w-full flex-col bg-cream-50 sm:max-w-md border-l border-cream-300">
        <SheetHeader className="border-b border-cream-300 pb-4">
          <SheetTitle className="font-serif text-2xl tracking-wide uppercase text-espresso-900">
            Your Bag ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
            <ShoppingBag className="h-12 w-12 text-cream-300 mb-4" />
            <p className="font-serif text-xl text-espresso-900 mb-2">Your bag is empty</p>
            <p className="text-sm text-warmgray-500 mb-6">Discover pieces crafted to be treasured.</p>
            <Button asChild className="btn-primary">
              <Link to="/shop" onClick={closeCart}>Shop Now</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-6">
              {items.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-cream-200">
                    {getImageUrl(item.imageId || `product-card-${item.productId}`) ? (
                      <img
                        src={getImageUrl(item.imageId || `product-card-${item.productId}`)}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-cream-200" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        to={`/products/${item.productId}`}
                        onClick={closeCart}
                        className="product-name text-sm text-espresso-900 hover:text-gold-600"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-0.5 text-xs capitalize text-warmgray-500">{item.variant} tone</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-cream-300">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1.5 text-espresso-900 hover:bg-cream-200"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm text-espresso-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1.5 text-espresso-900 hover:bg-cream-200"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-espresso-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.cartItemId)}
                    className="self-start p-1 text-warmgray-400 hover:text-destructive"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-cream-300 pt-4 space-y-4">
              <div className="flex items-center justify-between text-espresso-900">
                <span className="text-sm uppercase tracking-wider">Subtotal</span>
                <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-warmgray-500">Shipping & taxes calculated at checkout.</p>
              <Button className="w-full btn-primary">Checkout</Button>
              <Button variant="outline" asChild className="w-full btn-outline">
                <Link to="/shop" onClick={closeCart}>Continue Shopping</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
