import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E2D8]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#1A1A1A]" />
              <h2 className="font-serif text-xl text-[#1A1A1A]">Your Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:text-[#C79A5E] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[#9C9488] mb-4" />
                <p className="text-[#6B6358] font-medium">Your cart is empty</p>
                <p className="text-[#9C9488] text-sm mt-1">Add some pieces to get started</p>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 pb-6 border-b border-[#F0EBE4] last:border-0">
                    <div className="w-20 h-20 flex-shrink-0 bg-[#F0EBE4] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm truncate">{item.name}</h3>
                      <p className="text-xs text-[#6B6358] mt-0.5 uppercase tracking-[0.05em]">
                        {item.variant}
                      </p>
                      <p className="text-sm text-[#1A1A1A] mt-1 font-medium">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E8E2D8]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:text-[#C79A5E] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:text-[#C79A5E] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-[#9C9488] hover:text-[#1A1A1A] transition-colors uppercase tracking-[0.05em]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-[#E8E2D8] px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6B6358]">Subtotal</span>
                <span className="text-lg font-medium text-[#1A1A1A]">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-xs text-[#9C9488]">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="btn-ghost w-full text-center"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}