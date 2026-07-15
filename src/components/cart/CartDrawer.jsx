import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0D0D0D] shadow-2xl flex flex-col animate-slideInRight">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#333333]">
          <h2 className="font-serif text-xl text-[#F5F5F0] tracking-wide">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors duration-300"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[#333333] mb-4" />
              <p className="text-[#A8A8A0] mb-4">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[#C9A962] text-sm hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-20 bg-[#242424] flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-serif text-sm text-[#F5F5F0] tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#A8A8A0] mt-1">
                      {item.variant}
                    </p>
                    <p className="text-sm text-[#C9A962] mt-1">
                      ${item.price}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#333333]">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors duration-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm text-[#F5F5F0]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors duration-300"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-[#A8A8A0] hover:text-[#9C4146] transition-colors duration-300"
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
          <div className="p-6 border-t border-[#333333]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[#A8A8A0]">Subtotal</span>
              <span className="text-lg text-[#F5F5F0]">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#A8A8A0] mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-4 bg-[#C9A962] text-[#0D0D0D] text-center text-sm font-medium uppercase tracking-wider hover:bg-[#D4B978] transition-colors duration-300"
            >
              Checkout
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 mt-3 text-center text-sm text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
