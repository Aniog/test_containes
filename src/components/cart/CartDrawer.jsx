import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ open, onClose }) => {
  const { cart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const overlayRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" ref={overlayRef}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
          <h2 className="serif-heading text-xl tracking-wide">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag size={48} className="text-muted-foreground mb-4" />
              <p className="serif-heading text-lg mb-2">Your bag is empty</p>
              <p className="text-sm text-muted-foreground">
                Discover our collection and find something you love.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border/30">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4 p-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-secondary flex-shrink-0" />

                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="product-name text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-muted-foreground capitalize mb-2">
                        {item.variant} tone
                      </p>
                      <p className="text-sm font-medium">${item.price}</p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border/50">
                        <button
                          className="p-1.5 hover:bg-secondary transition-colors"
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          className="p-1.5 hover:bg-secondary transition-colors"
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        className="text-xs text-muted-foreground underline hover:text-foreground transition-colors"
                        onClick={() => removeItem(index)}
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
          <div className="border-t border-border/50 px-6 py-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Subtotal</span>
              <span className="serif-heading text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-accent text-accent-foreground py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 hover:shadow-lg">
              Checkout
            </button>
            <button
              className="w-full text-sm text-muted-foreground underline hover:text-foreground transition-colors py-2"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
