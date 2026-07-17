import React from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/api/cart'
import { cn } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } = useCart()

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[100] transition-opacity duration-500',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-[400px] bg-background z-[101] transition-transform duration-500 transform flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-border">
          <h2 className="text-[11px] uppercase tracking-[0.2em] font-semibold">Your Bag ({items.length})</h2>
          <button onClick={closeCart}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
              <ShoppingBag className="w-12 h-12 stroke-[1px]" />
              <p className="text-sm font-light">Your bag is empty</p>
              <button 
                onClick={closeCart}
                className="text-[10px] uppercase tracking-[0.2em] underline underline-offset-4"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-24 h-32 bg-muted relative">
                  <img
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img={`[cart-item-${item.id}-title] ${item.data.category}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover"
                    alt={item.data.name}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 id={`cart-item-${item.id}-title`} className="text-[11px] uppercase tracking-wide font-medium">
                        {item.data.name}
                      </h3>
                      <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-foreground">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">{item.data.category}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 px-2 hover:bg-muted"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs px-2 text-[10px]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 px-2 hover:bg-muted"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-[11px] font-medium">${item.data.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <span className="text-[10px] uppercase tracking-[0.2em]">Subtotal</span>
              <span className="text-lg font-serif tracking-wide font-medium">${total()}</span>
            </div>
            <p className="text-[10px] text-muted-foreground italic mt-[-8px]">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-foreground text-background py-4 uppercase tracking-[0.2em] text-[10px] font-semibold hover:opacity-90 transition-opacity">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
