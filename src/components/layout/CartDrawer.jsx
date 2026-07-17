import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../lib/store';

export const CartDrawer = () => {
  const { isOpen, closeCart, items, updateQuantity, removeItem, getCartTotal } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background z-50 flex flex-col shadow-2xl animate-in slide-in-from-right">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button onClick={closeCart} className="p-2 hover:bg-muted rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-4">
              <ShoppingBag className="w-12 h-12 opacity-50" />
              <p>Your cart is empty.</p>
              <button 
                onClick={closeCart}
                className="mt-4 px-6 py-2 bg-primary text-primary-foreground uppercase text-sm tracking-wider"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="w-24 h-24 bg-muted flex-shrink-0 relative overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id="cart-item-placeholder"
                    data-strk-img="[item-name] jewelry"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                  />
                </div>
                <div className="flex flex-col flex-1 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="uppercase text-sm tracking-wider font-semibold" id="item-name">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button 
                        className="px-3 py-1 hover:bg-muted"
                        onClick={() => updateQuantity(item.id, item.variant, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        className="px-3 py-1 hover:bg-muted"
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6 text-lg font-serif">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
