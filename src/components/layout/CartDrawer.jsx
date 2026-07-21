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

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-charcoal border-l border-stone z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone/30">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} strokeWidth={1.5} className="text-gold" />
            <h2 className="font-serif text-xl text-ivory">Your Cart</h2>
            <span className="text-sm text-warm-gray">({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 text-warm-gray hover:text-ivory transition-colors"
            aria-label="Close cart"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-stone mb-4" />
              <p className="text-warm-gray mb-2">Your cart is empty</p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="text-gold hover:text-ivory transition-colors text-sm uppercase tracking-widest border-b border-gold hover:border-ivory"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div 
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-stone/20"
                >
                  {/* Product Image */}
                  <div className="w-20 h-24 bg-stone/20 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="product-name text-ivory">{item.name}</h3>
                      <p className="text-xs text-warm-gray mt-1 capitalize">{item.variant} Tone</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-stone">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 text-warm-gray hover:text-ivory transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm text-ivory">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 text-warm-gray hover:text-ivory transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="text-ivory font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="self-start p-1 text-warm-gray hover:text-error transition-colors"
                    aria-label="Remove item"
                  >
                    <X size={16} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-stone/30 bg-charcoal">
            <div className="flex items-center justify-between mb-4">
              <span className="text-warm-gray">Subtotal</span>
              <span className="text-xl font-serif text-ivory">{formatPrice(getCartTotal())}</span>
            </div>
            <p className="text-xs text-warm-gray mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link 
              to="/checkout"
              onClick={closeCart}
              className="block w-full bg-gold text-charcoal text-center py-4 uppercase tracking-widest text-sm font-medium hover:bg-gold/90 transition-colors"
            >
              Checkout
            </Link>
            <button 
              onClick={closeCart}
              className="block w-full mt-3 text-center text-sm text-warm-gray hover:text-ivory transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;