import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    isCartAnimating,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartTotal
  } = useCart();

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-dark/50 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-cream shadow-2xl transform transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-2xl text-velmora-dark">Your Cart</h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-velmora-creamDark rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-velmora-text" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-velmora-muted mb-4" />
                <p className="font-serif text-xl text-velmora-text mb-2">Your cart is empty</p>
                <p className="text-velmora-muted text-sm">Add some beautiful jewelry to get started</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-6 btn-primary"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className={`flex gap-4 p-4 bg-white rounded-lg shadow-sm transition-all duration-300 ${
                      isCartAnimating ? 'scale-105' : 'scale-100'
                    }`}
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-lg uppercase tracking-wider text-velmora-dark">
                        {item.name}
                      </h3>
                      <p className="text-sm text-velmora-muted mt-1">{item.variant}</p>
                      <p className="text-velmora-gold font-medium mt-1">{formatPrice(item.price)}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-border rounded-full">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:bg-velmora-creamDark rounded-l-full transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-4 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:bg-velmora-creamDark rounded-r-full transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-sm text-velmora-muted hover:text-red-500 transition-colors"
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
            <div className="p-6 border-t border-velmora-border bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-velmora-textLight">Subtotal</span>
                <span className="font-serif text-xl text-velmora-dark">{formatPrice(getCartTotal())}</span>
              </div>
              <p className="text-sm text-velmora-muted mb-4">Shipping and taxes calculated at checkout</p>
              <button className="w-full btn-primary">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 text-sm text-velmora-textLight hover:text-velmora-gold transition-colors"
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