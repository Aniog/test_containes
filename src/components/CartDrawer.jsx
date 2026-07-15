import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#FAF8F5] shadow-soft-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#8B8580]/20">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-[#C9A962] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-[#8B8580] mb-4" />
              <p className="text-[#8B8580] mb-4">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-gold-outline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-30 bg-[#F5F0E8] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="product-name text-sm">{item.name}</h3>
                    <p className="text-xs text-[#8B8580] capitalize mb-2">{item.variant} Tone</p>
                    <p className="text-[#1A1A1A] font-medium mb-3">${item.price}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[#8B8580]/30">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:text-[#C9A962]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:text-[#C9A962]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-[#8B8580] hover:text-red-500 underline"
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
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#8B8580]/20">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#8B8580]">Subtotal</span>
              <span className="text-xl font-serif">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#8B8580] mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full btn-gold">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full mt-3 text-sm text-[#8B8580] hover:text-[#1A1A1A] underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}