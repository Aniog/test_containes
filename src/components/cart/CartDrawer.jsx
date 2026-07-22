import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-[#1A1A1A] border-l border-[#2A2A2A] transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#2A2A2A]">
            <h2 className="font-serif text-xl text-[#F5F0EB]">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-[#6B6560] mb-4" />
                <p className="text-[#A0988E] text-sm">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 text-xs tracking-widest uppercase text-[#C9A96E] hover:text-[#D4B87A] transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {cartItems.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0 bg-[#242424] rounded overflow-hidden">
                      <img
                        src={item.images?.[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xs tracking-widest uppercase text-[#F5F0EB] font-sans">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#6B6560] mt-1">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-[#6B6560] hover:text-[#D94A4A] transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#2A2A2A] rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-xs text-[#F5F0EB] font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm text-[#F5F0EB] font-medium">${item.price}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="px-6 py-6 border-t border-[#2A2A2A] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#A0988E]">Subtotal</span>
                <span className="text-lg text-[#F5F0EB] font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#6B6560]">Free shipping on orders over $100</p>
              <button className="w-full bg-[#C9A96E] text-[#0F0F0F] py-3.5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#D4B87A] transition-all duration-300">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-xs tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB] transition-colors py-2"
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