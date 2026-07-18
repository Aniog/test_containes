import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#FAF8F5] shadow-2xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8E2DA]">
            <h2 className="serif-heading text-2xl">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-[#B8860B] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#6B6560]">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={`${item.productId}-${item.variantId}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#E8E2DA] rounded-sm flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="product-name text-sm">{item.name}</h3>
                      <p className="text-xs text-[#6B6560] mt-1">{item.variant}</p>
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                          className="p-1 hover:text-[#B8860B] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                          className="p-1 hover:text-[#B8860B] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.productId, item.variantId)}
                          className="p-1 ml-auto text-[#6B6560] hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-[#E8E2DA] p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm uppercase tracking-wider">Subtotal</span>
                <span className="serif-heading text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <p className="text-xs text-center text-[#6B6560]">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
