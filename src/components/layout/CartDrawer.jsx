import { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/40 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#faf8f5] shadow-2xl transform transition-transform"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8e4df]">
            <h2 className="serif-heading text-xl tracking-wide">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-[#e8e4df] rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[#9a9490] mb-4" />
                <p className="serif-heading text-lg text-[#6b6560] mb-2">Your cart is empty</p>
                <p className="text-sm text-[#9a9490] mb-6">Discover pieces you'll love</p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="btn-dark"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-[#e8e4df] flex-shrink-0 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(https://placehold.co/160x192/e8e4df/6b6560?text=${encodeURIComponent(item.name.charAt(0))})`
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm text-[#1a1a1a] truncate">{item.name}</h3>
                      <p className="text-xs text-[#9a9490] mt-1 capitalize">{item.variant} tone</p>
                      <p className="text-sm text-[#1a1a1a] mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-[#e8e4df] hover:border-[#1a1a1a] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-[#e8e4df] hover:border-[#1a1a1a] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-xs text-[#9a9490] hover:text-[#1a1a1a] underline transition-colors"
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
            <div className="border-t border-[#e8e4df] px-6 py-5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-[#6b6560]">Subtotal</span>
                <span className="serif-heading text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#9a9490] mb-4">Shipping & taxes calculated at checkout</p>
              <button className="w-full btn-dark">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 text-sm text-[#6b6560] hover:text-[#1a1a1a] transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
