import { X } from 'lucide-react'
import QuantitySelector from './QuantitySelector'
import { formatCurrency } from '@/data/storeData'

const CartDrawer = ({ open, items, subtotal, onClose, onDecrease, onIncrease, onRemove }) => {
  return (
    <>
      <button
        type="button"
        aria-label="Close cart drawer"
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-[rgba(36,26,19,0.45)] backdrop-blur-sm transition ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col border-l border-[#d7c3ab] bg-[#f7f2ea] shadow-[0_18px_60px_rgba(36,26,19,0.2)] transition duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-[rgba(215,195,171,0.7)] px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">Shopping bag</p>
            <h2 className="mt-2 font-['Cormorant_Garamond'] text-3xl text-[#241a13]">Your picks</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7c3ab] text-[#241a13] transition hover:border-[#c19a6b] hover:text-[#c19a6b]"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
          {items.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-[#d7c3ab] bg-white/60 p-8 text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">Your cart is empty</p>
              <p className="mt-4 text-sm leading-7 text-[#6f5946]">
                Add a few luminous favorites and they’ll appear here instantly.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={`${item.slug}-${item.tone}`}
                  className="rounded-[1.6rem] border border-[rgba(215,195,171,0.7)] bg-white/80 p-4"
                >
                  <div className="flex gap-4">
                    <div className="flex h-28 w-24 shrink-0 items-end rounded-[1.2rem] bg-[linear-gradient(180deg,#efe4d8_0%,#d6bf9e_100%)] p-3">
                      <span className="font-['Cormorant_Garamond'] text-3xl uppercase tracking-[0.18em] text-[rgba(36,26,19,0.9)]">
                        {item.name.slice(0, 1)}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3
                            id={`cart-${item.slug}-name`}
                            className="font-['Cormorant_Garamond'] text-2xl uppercase tracking-[0.18em] text-[#241a13]"
                          >
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm text-[#6f5946]">{item.category}</p>
                          <p
                            id={`cart-${item.slug}-tone`}
                            className="mt-2 text-[11px] uppercase tracking-[0.26em] text-[#c19a6b]"
                          >
                            {item.tone}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(item.slug, item.tone)}
                          className="text-xs uppercase tracking-[0.22em] text-[#6f5946] transition hover:text-[#241a13]"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                        <QuantitySelector
                          compact
                          value={item.quantity}
                          onDecrease={() => onDecrease(item.slug, item.tone)}
                          onIncrease={() => onIncrease(item.slug, item.tone)}
                        />
                        <p className="text-sm font-medium text-[#241a13]">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[rgba(215,195,171,0.7)] px-5 py-5 sm:px-6">
          <div className="flex items-center justify-between text-sm text-[#6f5946]">
            <span>Subtotal</span>
            <span className="font-medium text-[#241a13]">{formatCurrency(subtotal)}</span>
          </div>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-[#c19a6b] px-6 py-4 text-xs uppercase tracking-[0.32em] text-[#f7f2ea] transition hover:bg-[#241a13]"
          >
            Checkout coming soon
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
