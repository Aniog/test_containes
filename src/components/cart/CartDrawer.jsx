import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, cartTotal, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-warm-black/40 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-hairline">
          <h2 className="font-serif text-xl text-warm-black">Your Bag</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-cream rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-hairline mb-4" />
              <p className="text-warm-gray mb-4">Your bag is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gold hover:text-gold-dark transition-colors font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <Link 
                    to={`/product/${item.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    className="flex-shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-32 object-cover"
                    />
                  </Link>
                  
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={() => setIsCartOpen(false)}
                    >
                      <h3 className="product-name text-sm text-warm-black truncate">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-warm-gray mt-1">{item.variant}</p>
                    <p className="font-medium mt-2">${item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-hairline">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-warm-gray hover:text-warm-black text-sm transition-colors"
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
          <div className="border-t border-hairline p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-warm-gray">Subtotal</span>
              <span className="font-semibold text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-warm-gray">Shipping and taxes calculated at checkout</p>
            <button className="w-full py-4 bg-gold text-warm-black font-medium rounded hover:bg-gold-dark transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3 text-center text-gold hover:text-gold-dark transition-colors font-medium"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
