import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { state, closeDrawer, removeItem, updateQuantity, total } = useCart()

  if (!state.isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="serif-heading text-xl tracking-wider">YOUR BAG</h2>
          <button onClick={closeDrawer} className="p-1 hover:text-primary transition-colors" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingBag size={48} strokeWidth={1} className="mb-4" />
              <p className="serif-heading text-lg">Your bag is empty</p>
              <p className="text-sm mt-2">Discover our collection</p>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {state.items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="product-name text-sm">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1 border border-border rounded hover:border-primary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1 border border-border rounded hover:border-primary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-muted-foreground hover:text-destructive transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="btn-outline w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
