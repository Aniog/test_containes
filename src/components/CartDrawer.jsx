import { useCart } from '../context/CartContext';
import { X, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    closeCart, 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-xl overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button 
              onClick={closeCart}
              className="hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p className="text-warm-gray text-center py-12">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-warm-gray mb-2">${item.price}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-gold transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-gold transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-warm-gray hover:text-gold transition-colors mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-serif">Total</span>
                  <span className="font-serif">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-warm-gray">Shipping calculated at checkout</p>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="block w-full bg-charcoal text-cream text-center py-3 hover:bg-gold transition-colors font-serif tracking-wider"
                onClick={closeCart}
              >
                Proceed to Checkout
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
