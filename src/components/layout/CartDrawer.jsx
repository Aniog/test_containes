import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-400 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-cream flex flex-col transition-transform duration-400 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-obsidian" />
            <span className="font-cormorant text-xl font-light text-obsidian tracking-wide">
              Your Cart {totalItems > 0 && <span className="text-taupe">({totalItems})</span>}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-obsidian transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-hairline" />
              <p className="font-cormorant text-2xl font-light text-obsidian">Your cart is empty</p>
              <p className="font-manrope text-sm text-taupe">Discover our curated collection of fine jewelry.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-obsidian text-cream font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-taupe transition-colors duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-hairline">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-5">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-item-${item.key}-img`}
                      data-strk-img={`[cart-item-${item.key}-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p id={`cart-item-${item.key}-name`} className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian font-medium leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-manrope text-xs text-taupe mt-0.5">{item.variant}</p>
                    <p className="font-manrope text-sm font-medium text-obsidian mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-hairline">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-obsidian">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="font-manrope text-xs text-taupe hover:text-obsidian underline underline-offset-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-manrope text-sm font-medium text-obsidian">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-sm text-taupe uppercase tracking-[0.1em]">Subtotal</span>
              <span className="font-cormorant text-xl font-light text-obsidian">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-taupe">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-gold text-obsidian font-manrope text-xs uppercase tracking-[0.12em] py-4 hover:bg-goldLight transition-colors duration-300 font-medium">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-obsidian text-obsidian font-manrope text-xs uppercase tracking-[0.12em] py-3.5 hover:bg-obsidian hover:text-cream transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
