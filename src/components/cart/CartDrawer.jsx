import { useCart } from '@/context/CartContext'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-warm-black/40 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-warm-cream z-50 shadow-xl flex flex-col transform transition-transform duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-300">
          <h2 className="font-serif text-xl tracking-wide-15 uppercase text-warm-black">
            Your Bag ({totalItems})
          </h2>
          <button onClick={closeCart} className="p-2 text-warm-black hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone-500 mb-4" />
              <p className="font-serif text-lg text-warm-black">Your bag is empty</p>
              <p className="text-sm text-stone-500 mt-2">Discover something you love.</p>
              <button
                onClick={closeCart}
                className="mt-6 bg-gold text-warm-black font-sans text-sm tracking-wide-15 uppercase px-8 py-3 hover:bg-gold-light transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map(item => {
                const product = products.find(p => p.id === item.productId)
                return (
                  <div key={item.key} className="flex gap-4">
                    {/* Image */}
                    <div className="w-20 h-24 bg-stone-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={product?.imageUrl || ''}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm tracking-wide-15 uppercase text-warm-black">{item.name}</p>
                      <p className="text-xs text-stone-500 mt-1">Tone: {item.tone}</p>
                      <p className="font-sans text-sm font-medium text-warm-black mt-1">${item.price}</p>

                      {/* Quantity */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-stone-300 text-warm-black hover:border-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium text-warm-black w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-stone-300 text-warm-black hover:border-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="ml-2 text-xs text-stone-500 hover:text-warm-black transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone-300 px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm uppercase tracking-wide-15 text-warm-black">Subtotal</span>
              <span className="font-serif text-lg text-warm-black">${totalPrice}</span>
            </div>
            <p className="text-xs text-stone-500 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-warm-black font-sans text-sm tracking-wide-15 uppercase py-3 hover:bg-gold-light transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
