import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cart, 
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
        className="fixed inset-0 bg-charcoal/50 z-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-divider">
            <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
            <button 
              onClick={closeCart}
              className="p-2 hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-divider mb-4" />
                <p className="text-taupe mb-4">Your cart is empty</p>
                <button 
                  onClick={closeCart}
                  className="text-gold hover:text-gold-hover transition-colors text-sm uppercase tracking-wider"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map(item => (
                  <div 
                    key={`${item.id}-${item.variant}`} 
                    className="flex gap-4 pb-6 border-b border-divider last:border-0"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-30 bg-white flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider text-charcoal">
                        {item.name}
                      </h3>
                      <p className="text-taupe text-sm mt-1">{item.variant}</p>
                      <p className="text-charcoal font-medium mt-2">${item.price}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-divider">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:text-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:text-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-taupe text-xs hover:text-charcoal transition-colors"
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
            <div className="p-6 border-t border-divider bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-taupe">Subtotal</span>
                <span className="font-serif text-xl text-charcoal">${getCartTotal().toFixed(2)}</span>
              </div>
              <p className="text-taupe text-xs mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Link 
                to="/checkout"
                onClick={closeCart}
                className="block w-full bg-gold hover:bg-gold-hover text-charcoal text-center py-4 text-sm uppercase tracking-[0.1em] font-semibold transition-colors shadow-button"
              >
                Checkout
              </Link>
              <button 
                onClick={closeCart}
                className="block w-full mt-3 text-center text-taupe text-sm hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;