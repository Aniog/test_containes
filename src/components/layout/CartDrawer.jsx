import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl flex flex-col transform transition-transform duration-500 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-velmora-black" />
            <h2 className="font-serif text-xl font-medium">Shopping Bag</h2>
            <span className="text-sm text-velmora-muted">({cartCount})</span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-velmora-black/60 hover:text-velmora-black transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-velmora-stone/40 mb-4" />
              <p className="font-serif text-lg text-velmora-muted">Your bag is empty</p>
              <p className="text-sm text-velmora-stone mt-2">Discover our collection and find something you love.</p>
              <Button variant="outline" size="sm" className="mt-6" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-24 bg-velmora-warm rounded-sm overflow-hidden flex-shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-velmora-stone/40">
                        <ShoppingBag size={24} />
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-sm font-medium text-velmora-black truncate">{item.name}</h3>
                        <p className="text-xs text-velmora-muted mt-0.5 capitalize">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-velmora-stone/60 hover:text-velmora-error transition-colors duration-300"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-border rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-velmora-black/60 hover:text-velmora-black transition-colors duration-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-xs font-medium text-velmora-black min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-velmora-black/60 hover:text-velmora-black transition-colors duration-300"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="text-sm font-medium text-velmora-black">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-border px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-velmora-muted">Subtotal</span>
              <span className="font-serif text-lg font-medium text-velmora-black">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-stone">Shipping and taxes calculated at checkout.</p>
            <Button variant="accent" size="lg" className="w-full">
              Checkout
            </Button>
            <Button variant="ghost" size="sm" className="w-full" onClick={closeCart}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
