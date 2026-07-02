import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export default function CartPage() {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <ShoppingBag className="w-20 h-20 text-[var(--color-velmora-border)] mx-auto mb-6" />
          <h1 className="serif-heading text-4xl mb-4">Your Cart is Empty</h1>
          <p className="text-[var(--color-velmora-text-muted)] mb-8 max-w-md mx-auto">
            Discover our beautiful collection of demi-fine jewelry, crafted to be treasured.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Shop Now
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="container-padding py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="serif-heading text-3xl md:text-4xl">Your Cart ({totalItems})</h1>
          <button
            onClick={clearCart}
            className="text-sm text-[var(--color-velmora-text-muted)] hover:text-red-500 transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={`${item.productId}-${item.variant}`} className="flex gap-4 md:gap-6 p-4 md:p-6 border border-[var(--color-velmora-border)] rounded">
                <Link to={`/product/${item.productId}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-28 md:w-32 md:h-36 object-cover rounded"
                  />
                </Link>
                <div className="flex-1">
                  <Link to={`/product/${item.productId}`} className="product-name text-sm md:text-base mb-1 hover:text-[var(--color-velmora-accent)] transition-colors">
                    {item.name}
                  </Link>
                  <p className="text-xs text-[var(--color-velmora-text-muted)] mb-2 capitalize">
                    {item.variant} tone
                  </p>
                  <p className="text-sm font-medium mb-4">${item.price}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                        className="p-1.5 border border-[var(--color-velmora-border)] rounded hover:bg-[var(--color-velmora-bg-alt)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                        className="p-1.5 border border-[var(--color-velmora-border)] rounded hover:bg-[var(--color-velmora-bg-alt)] transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId, item.variant)}
                      className="text-sm text-[var(--color-velmora-text-muted)] hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 border border-[var(--color-velmora-border)] rounded bg-[var(--color-velmora-bg-alt)]">
              <h2 className="serif-heading text-2xl mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="hairline-divider" />
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="serif-heading text-2xl">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button className="btn-primary w-full mb-4">
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                className="flex items-center justify-center gap-2 text-sm text-[var(--color-velmora-text-muted)] hover:text-[var(--color-velmora-accent)] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
