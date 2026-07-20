import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-obsidian/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[80] bg-velvet flex flex-col transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b hairline">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-champagne" />
            <span className="font-sans text-xs tracking-widest uppercase text-mist font-semibold">
              Your Cart {count > 0 && `(${count})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-champagne transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-stone/40" />
              <p className="font-serif text-xl text-mist/60 font-light">Your cart is empty</p>
              <p className="font-sans text-xs text-stone tracking-wide">
                Discover our curated collection
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 bg-champagne text-velvet font-sans text-xs tracking-widest uppercase font-semibold hover:bg-gold transition-colors duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.key} className="flex gap-4">
                {/* Thumbnail placeholder */}
                <div className="w-20 h-20 bg-charcoal flex-shrink-0 overflow-hidden flex items-center justify-center">
                  <span className="font-serif text-2xl text-champagne/60 font-light select-none">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-sm text-mist tracking-widest uppercase font-light leading-tight">
                    {item.name}
                  </p>
                  {item.variant && (
                    <p className="font-sans text-xs text-stone mt-0.5">{item.variant}</p>
                  )}
                  <p className="font-sans text-xs text-champagne mt-1 font-medium">
                    ${item.price}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQty(item.key, item.quantity - 1)}
                      className="text-stone hover:text-champagne transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-sans text-xs text-mist w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQty(item.key, item.quantity + 1)}
                      className="text-stone hover:text-champagne transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone hover:text-champagne transition-colors"
                  >
                    <X size={14} />
                  </button>
                  <p className="font-sans text-sm text-mist font-medium">
                    ${(item.price * item.quantity).toFixed(0)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t hairline space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs tracking-widest uppercase text-stone">Subtotal</span>
              <span className="font-serif text-xl text-mist font-light">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-champagne text-velvet font-sans text-xs tracking-widest uppercase font-semibold hover:bg-gold transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3 border border-smoke/40 text-stone font-sans text-xs tracking-widest uppercase hover:border-champagne hover:text-champagne transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

