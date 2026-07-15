import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-obsidian-900/40 backdrop-blur-sm z-40 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-500 ease-luxury',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-velvet-500" />
            <h2 className="font-serif text-lg text-obsidian-800">Your Cart</h2>
            {count > 0 && (
              <span className="bg-velvet-500 text-cream text-xs w-5 h-5 rounded-full flex items-center justify-center font-sans font-medium">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-obsidian-400 hover:text-obsidian-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} className="text-velvet-200" />
              <p className="font-serif text-xl text-obsidian-400 italic">Your cart is empty</p>
              <p className="text-sm text-obsidian-300 font-sans">Discover our curated collection</p>
              <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <CartItem key={item.key} item={item} onRemove={removeItem} onUpdateQty={updateQty} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velvet-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-obsidian-500 uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-xl text-obsidian-800">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-obsidian-400 font-sans">Shipping & taxes calculated at checkout</p>
            <Button variant="dark" size="lg" className="w-full">
              Proceed to Checkout
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs text-obsidian-400 hover:text-velvet-500 transition-colors font-sans uppercase tracking-widest py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

function CartItem({ item, onRemove, onUpdateQty }) {
  const { product, variant, qty } = item
  return (
    <div className="flex gap-4">
      <div className="w-20 h-20 bg-velvet-100 flex-shrink-0 overflow-hidden flex items-center justify-center">
        <span className="font-serif text-2xl text-velvet-400 select-none">
          {product.name.charAt(0)}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-serif text-sm text-obsidian-800 leading-tight">{product.name}</p>
            <p className="text-xs text-obsidian-400 font-sans mt-0.5">{variant}</p>
          </div>
          <button
            onClick={() => onRemove(item.key)}
            className="text-obsidian-300 hover:text-obsidian-600 transition-colors flex-shrink-0"
          >
            <X size={14} />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-velvet-200 rounded">
            <button
              onClick={() => onUpdateQty(item.key, qty - 1)}
              className="px-2 py-1 text-obsidian-500 hover:text-velvet-500 transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="px-3 text-sm font-sans text-obsidian-700">{qty}</span>
            <button
              onClick={() => onUpdateQty(item.key, qty + 1)}
              className="px-2 py-1 text-obsidian-500 hover:text-velvet-500 transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
          <span className="font-serif text-sm text-obsidian-800">${(product.price * qty).toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
