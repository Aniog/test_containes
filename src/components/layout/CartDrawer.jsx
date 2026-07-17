import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQty, subtotal, totalItems, isOpen, setIsOpen } = useCart();
  const navigate = useNavigate();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-ivory flex flex-col shadow-2xl transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-obsidian/10">
          <h2 className="font-serif text-xl tracking-widest font-light text-obsidian">
            YOUR BAG
          </h2>
          <span className="font-sans text-xs text-stone-warm tracking-widest uppercase">
            {totalItems} {totalItems === 1 ? 'item' : 'items'}
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-obsidian hover:text-champagne transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-champagne-light" />
              <p className="font-serif text-xl text-obsidian font-light">Your bag is empty</p>
              <p className="font-sans text-sm text-stone-warm">Add something beautiful.</p>
              <button
                onClick={() => { setIsOpen(false); navigate('/shop'); }}
                className="mt-2 font-sans text-xs tracking-widest uppercase border border-champagne text-champagne px-6 py-2.5 hover:bg-champagne hover:text-ivory transition-colors"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-obsidian/8">
              {items.map((item) => (
                <li key={item.key} className="py-4 flex gap-4">
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-2xl text-champagne font-light select-none">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-widest uppercase text-obsidian font-medium leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-stone-warm mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm text-obsidian mt-1 font-medium">
                      ${item.product.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQty(item.key, item.qty - 1)}
                        className="text-stone-warm hover:text-obsidian transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-sans text-sm w-4 text-center text-obsidian">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.key, item.qty + 1)}
                        className="text-stone-warm hover:text-obsidian transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    aria-label="Remove item"
                    className="text-stone-warm hover:text-obsidian transition-colors self-start mt-1"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-obsidian/10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs tracking-widest uppercase text-stone-warm">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone-warm text-center">
              Shipping &amp; taxes calculated at checkout
            </p>
            <button className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4 hover:bg-obsidian-soft transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-obsidian/20 text-obsidian font-sans text-xs tracking-widest uppercase py-3 hover:border-obsidian transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
