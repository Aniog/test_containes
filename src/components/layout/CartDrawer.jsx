import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeFromCart, updateQuantity, subtotal, itemCount } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity duration-400 ${
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-500 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
            <h2 className="font-serif text-xl tracking-widest">
              YOUR BAG ({itemCount})
            </h2>
            <button onClick={closeDrawer} className="text-deep/60 hover:text-deep transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-velvet-300 mb-4" />
                <p className="text-sm text-velvet-500">Your bag is empty.</p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="mt-4 text-xs tracking-widest uppercase text-gold-600 hover:text-gold-500 transition-colors underline underline-offset-4"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velvet-100">
                    <div className="w-20 h-20 bg-velvet-100 rounded-sm flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs text-velvet-400">Image</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-product text-xs tracking-widest text-deep truncate">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-velvet-500 mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium text-deep mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-velvet-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-deep/60 hover:text-deep transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-deep/60 hover:text-deep transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-[10px] tracking-widest uppercase text-velvet-400 hover:text-red-500 transition-colors"
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
          {items.length > 0 && (
            <div className="border-t border-velvet-200 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velvet-500">Subtotal</span>
                <span className="font-semibold text-deep">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-velvet-400 text-center">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3 bg-deep text-cream text-xs tracking-widest-plus uppercase font-medium hover:bg-velvet-800 transition-colors">
                Checkout
              </button>
              <button
                onClick={closeDrawer}
                className="w-full text-[11px] tracking-widest uppercase text-deep/60 hover:text-deep transition-colors text-center block"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}