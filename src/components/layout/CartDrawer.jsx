import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useStockImages } from '@/hooks/useStockImages.js'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const containerRef = useStockImages([isOpen, items.length])
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-[#17110D]/45 transition duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        ref={containerRef}
        className={`absolute right-0 top-0 flex h-full w-full max-w-md transform flex-col bg-[#FBF8F2] text-[#17110D] shadow-2xl transition duration-500 sm:w-[28rem] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-[#17110D]/10 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8D7463]">Your Cart</p>
            <h2 className="font-serif text-3xl text-[#17110D]">Velmora Pieces</h2>
          </div>
          <button type="button" aria-label="Close cart" onClick={onClose} className="p-2 text-[#17110D] hover:text-[#B9853B]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <ShoppingBag className="mx-auto h-10 w-10 text-[#B9853B]" />
                <p className="mt-5 font-serif text-2xl text-[#17110D]">Your jewelry box is empty.</p>
                <p className="mt-2 text-sm leading-6 text-[#8D7463]">Add a luminous piece to begin your Velmora collection.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-[#17110D]/10 pb-6">
                  <div className="aspect-[3/4] overflow-hidden bg-[#E9D8BE]/70">
                    <img
                      alt={item.name}
                      className="h-full w-full object-cover"
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[cart-title-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="320"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={`cart-title-${item.id}`} className="font-serif text-sm uppercase leading-snug tracking-[0.18em] text-[#17110D]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#8D7463]">{item.variant} tone</p>
                      </div>
                      <p className="text-sm font-semibold text-[#17110D]">${item.price * item.quantity}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-[#17110D]/15 bg-[#F7F1E8] text-[#17110D]">
                        <button type="button" aria-label="Decrease quantity" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} className="p-2 hover:bg-[#E9D8BE]">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-9 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} className="p-2 hover:bg-[#E9D8BE]">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id, item.variant)} className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5D3A1E] underline-offset-4 hover:underline">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[#17110D]/10 px-6 py-6">
          <div className="flex items-center justify-between text-[#17110D]">
            <span className="text-sm uppercase tracking-[0.16em]">Subtotal</span>
            <span className="font-serif text-2xl">${subtotal}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-[#8D7463]">Taxes calculated at checkout. Free worldwide shipping is included.</p>
          <button type="button" className="mt-5 w-full bg-[#B9853B] px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#17110D] transition hover:bg-[#5D3A1E] hover:text-[#FBF8F2]">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
