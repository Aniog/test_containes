import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity,
    getCartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[rgba(26,24,20,0.5)] z-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#FAF8F6] z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E8E4DF]">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="p-2 hover:text-[#C9A962] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[#E8E4DF] mb-4" />
              <p className="text-[#6B635A] mb-4">Your cart is empty</p>
              <button 
                onClick={closeCart}
                className="btn-secondary text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-30 bg-white flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="product-name text-xs">{item.name}</h3>
                      <p className="text-sm text-[#6B635A] capitalize mt-1">{item.variant} Tone</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-[#E8E4DF]">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:text-[#C9A962] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:text-[#C9A962] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <p className="font-medium">${item.price * item.quantity}</p>
                    </div>
                  </div>
                  
                  {/* Remove */}
                  <button 
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="self-start p-1 text-[#6B635A] hover:text-[#C9A962] transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#E8E4DF]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#6B635A]">Subtotal</span>
              <span className="font-serif text-xl">${getCartTotal()}</span>
            </div>
            <p className="text-sm text-[#6B635A] mb-4">Shipping calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}