import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-xl animate-slide-in">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-xl">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-velmora-gold transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-velmora-warm-gray mb-4" />
                <p className="text-velmora-warm-gray">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-velmora-sand flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="product-name text-xs">{item.name}</h3>
                      <p className="text-sm text-velmora-warm-gray mt-1 capitalize">{item.variant}</p>
                      <p className="text-sm font-medium mt-1">${item.price}</p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-velmora-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 hover:text-velmora-gold"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 hover:text-velmora-gold"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-velmora-warm-gray hover:text-velmora-gold underline"
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
            <div className="p-6 border-t border-velmora-border">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm uppercase tracking-wider">Subtotal</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-warm-gray mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full bg-velmora-gold text-white py-4 text-sm uppercase tracking-widest hover:bg-velmora-charcoal transition-colors duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}