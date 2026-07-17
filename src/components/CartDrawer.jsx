import { ShoppingBag, X, Minus, Plus } from 'lucide-react';
import { useCartStore } from '../lib/store';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);
  const cartItems = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-96 bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif tracking-widest uppercase text-xl">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag size={48} className="text-muted-foreground/30" />
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <Link 
                to="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 border border-foreground px-6 py-2 uppercase tracking-wide text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                <div className="h-24 w-24 bg-secondary/30 rounded flex-shrink-0 overflow-hidden">
                   <img 
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif uppercase tracking-wider text-sm">{item.product.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.variant}</p>
                    <p className="text-sm mt-1">${item.product.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-border rounded">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                        className="p-1 hover:bg-secondary/50 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm px-2">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                        className="p-1 hover:bg-secondary/50 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between text-lg mb-4 font-medium">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-foreground text-background font-medium tracking-wide uppercase py-3 hover:bg-foreground/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;