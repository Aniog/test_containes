import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e5e5]">
          <h2 className="font-serif text-xl tracking-[0.15em] text-[#1a1a1a]">
            YOUR BAG ({cart.length})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100%-80px)]">
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="text-[#d4af37] mb-4" />
              <p className="text-[#1a1a1a]/60 mb-6">Your bag is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-8 py-3 bg-[#1a1a1a] text-white text-sm tracking-[0.15em] hover:bg-[#d4af37] transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <>
              {/* Cart items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="w-24 h-24 bg-[#f5f5f5] flex-shrink-0 overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-sm tracking-[0.1em] text-[#1a1a1a] truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#1a1a1a]/60 mt-1">{item.variant}</p>
                        <p className="text-sm font-medium text-[#1a1a1a] mt-1">
                          ${item.price}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-[#e5e5e5]">
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              className="p-2 hover:bg-[#f5f5f5] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="p-2 hover:bg-[#f5f5f5] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="text-xs text-[#1a1a1a]/60 hover:text-[#1a1a1a] underline transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-[#e5e5e5] px-6 py-6 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-[#1a1a1a]/60">Subtotal</span>
                  <span className="font-medium text-[#1a1a1a]">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-[#1a1a1a]/60 mb-4">
                  Shipping and taxes calculated at checkout
                </p>
                <button className="w-full py-4 bg-[#1a1a1a] text-white text-sm tracking-[0.15em] hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors">
                  CHECKOUT
                </button>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full py-3 text-center text-sm text-[#1a1a1a]/60 hover:text-[#1a1a1a] underline mt-2 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
