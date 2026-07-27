import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { state, items, totalPrice, closeDrawer, removeItem, updateQuantity } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e4df]">
          <h2 className="velmora-heading text-xl tracking-wide">Your Cart</h2>
          <button onClick={closeDrawer} className="p-2 hover:bg-[#f5f0eb] rounded-full transition-colors" aria-label="Close cart">
            <X className="w-5 h-5 text-[#1a1a1a]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[#e8e4df] mb-4" />
              <p className="velmora-heading text-lg text-[#6b6560]">Your cart is empty</p>
              <p className="text-sm text-[#8a8178] mt-2">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#f5f0eb] flex-shrink-0 overflow-hidden rounded-sm">
                    <div className="w-full h-full bg-gradient-to-br from-[#e8e0d4] to-[#d4c8b8] flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-[#c9a96e]/40" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="velmora-product-name text-sm text-[#1a1a1a] truncate">{item.name}</h3>
                    <p className="text-xs text-[#8a8178] mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-[#1a1a1a] mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[#e8e4df] hover:border-[#c9a96e] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[#e8e4df] hover:border-[#c9a96e] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-[#8a8178] hover:text-[#c9a96e] underline transition-colors"
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
          <div className="border-t border-[#e8e4df] px-6 py-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#6b6560]">Subtotal</span>
              <span className="velmora-heading text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#8a8178]">Shipping & taxes calculated at checkout</p>
            <button className="velmora-btn-dark w-full">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full text-sm text-[#6b6560] hover:text-[#c9a96e] underline transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
