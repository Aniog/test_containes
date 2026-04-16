import React from 'react'
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-foreground" />
            <span className="font-serif text-base font-medium text-foreground">
              购物车 {count > 0 && <span className="text-muted-foreground font-sans text-sm">({count})</span>}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors bg-transparent border-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-muted" />
              <p className="font-serif text-muted-foreground">购物车还是空的</p>
              <p className="font-sans text-sm text-muted-foreground/70">去挑几本好书吧</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(item => (
                <li key={item.id} className="flex gap-3 py-3 border-b border-border/50 last:border-0">
                  {/* Cover */}
                  <div className="w-14 h-20 flex-shrink-0 overflow-hidden rounded bg-secondary">
                    {item.data?.cover_url ? (
                      <img
                        src={item.data.cover_url}
                        alt={item.data.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <ShoppingBag className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm font-medium text-foreground line-clamp-2 leading-snug">
                      {item.data?.title}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground mt-0.5">{item.data?.author}</p>
                    <p className="font-sans text-sm font-medium text-accent mt-1">
                      ¥{item.data?.price?.toFixed(2)}
                    </p>

                    {/* Qty Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-border rounded text-muted-foreground hover:text-foreground hover:border-foreground transition-colors bg-transparent"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm w-6 text-center text-foreground">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-border rounded text-muted-foreground hover:text-foreground hover:border-foreground transition-colors bg-transparent"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-start p-1 text-muted-foreground hover:text-red-500 transition-colors bg-transparent border-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border bg-secondary/30">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm text-muted-foreground">合计</span>
              <span className="font-serif text-xl font-medium text-foreground">¥{total.toFixed(2)}</span>
            </div>
            <button className="w-full py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest rounded-lg hover:bg-primary/90 transition-colors border-0">
              去结算
            </button>
            <button
              onClick={clearCart}
              className="w-full mt-2 py-2 text-muted-foreground font-sans text-xs hover:text-foreground transition-colors bg-transparent border-0"
            >
              清空购物车
            </button>
          </div>
        )}
      </div>
    </>
  )
}
