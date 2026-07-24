import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const productImageMap = {}
products.forEach(p => {
  productImageMap[p.id] = p.imgId
})

function resolveImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry || !entry.results?.length) return ''
  if (entry.picked) {
    const picked = entry.results.find(r => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return entry.results[0]?.url || ''
}

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, isOpen, closeCart } = useCart()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-dark/40 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-light z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200">
            <h2 className="font-serif text-xl tracking-wide uppercase text-velmora-dark">
              Your Bag ({totalItems})
            </h2>
            <button onClick={closeCart} className="text-velmora-dark hover:text-velmora-gold transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
                <p className="font-serif text-lg text-velmora-dark mb-2">Your bag is empty</p>
                <p className="text-sm text-stone-500 font-sans">Discover our collection and add something beautiful.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map(item => (
                  <div key={item.key} className="flex gap-4">
                    <div className="w-20 h-24 bg-velmora-cream flex-shrink-0 overflow-hidden">
                      <img
                        src={resolveImageUrl(productImageMap[item.productId])}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-dark">{item.name}</h3>
                      <p className="text-xs text-stone-500 font-sans mt-1">Tone: {item.variant}</p>
                      <p className="font-sans text-sm font-medium text-velmora-dark mt-1">{formatPrice(item.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-stone-200 text-velmora-dark hover:border-velmora-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans text-velmora-dark w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-stone-200 text-velmora-dark hover:border-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="ml-auto text-xs text-stone-400 hover:text-velmora-dark font-sans underline transition-colors"
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
            <div className="px-6 py-4 border-t border-stone-200">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-stone-500 uppercase tracking-wide">Subtotal</span>
                <span className="font-serif text-xl text-velmora-dark">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-xs text-stone-400 font-sans mb-4">Shipping calculated at checkout</p>
              <button className="w-full bg-velmora-gold text-velmora-dark font-sans text-sm tracking-[0.1em] uppercase py-3 hover:bg-velmora-gold-light transition-colors duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
