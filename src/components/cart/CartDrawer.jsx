import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, cartTotal, drawerOpen, closeCart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  if (!drawerOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-noir/40 z-50" onClick={closeCart} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warmgray-100">
          <h2 className="font-serif text-lg tracking-wide">Shopping Bag ({cart.length})</h2>
          <button onClick={closeCart} className="p-1 text-warmgray-500 hover:text-noir">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-warmgray-400">
            <ShoppingBag className="w-12 h-12" />
            <p className="text-sm">Your bag is empty</p>
            <button onClick={closeCart} className="btn-outline text-xs">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.color}`} className="flex gap-4 py-3 border-b border-warmgray-100">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-20 h-20 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-xs tracking-wider uppercase text-noir">{item.name}</h4>
                    <p className="text-xs text-warmgray-500 mt-0.5">
                      {item.color === 'gold' ? '18K Gold' : 'Silver'} Tone
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-warmgray-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                          className="p-1.5 text-warmgray-500 hover:text-noir"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                          className="p-1.5 text-warmgray-500 hover:text-noir"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.color)}
                    className="text-warmgray-400 hover:text-noir self-start pt-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-warmgray-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-warmgray-600">Subtotal</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-warmgray-500">Shipping & taxes calculated at checkout</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary w-full text-center"
              >
                Checkout
              </Link>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs text-warmgray-500 hover:text-noir transition-colors underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}