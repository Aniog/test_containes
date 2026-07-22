import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-50 transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl transition-transform duration-500 ease-out',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
            <h2 className="serif-heading text-xl tracking-wide">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-primary transition-colors"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="serif-heading text-lg mb-2">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mb-6">Discover our collection of demi-fine jewelry</p>
                <Button onClick={() => setIsCartOpen(false)} variant="outline">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
                    <div className="h-24 w-24 bg-secondary rounded-sm flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="product-name text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-muted-foreground capitalize mb-2">{item.variant} tone</p>
                      <p className="text-sm font-medium mb-3">${item.price}</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          className="h-7 w-7 border border-border/50 flex items-center justify-center hover:border-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          className="h-7 w-7 border border-border/50 flex items-center justify-center hover:border-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.productId, item.variant)}
                          className="ml-auto text-xs text-muted-foreground hover:text-primary transition-colors underline"
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
          {cartItems.length > 0 && (
            <div className="border-t border-border/50 px-6 py-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Subtotal</span>
                <span className="serif-heading text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping & taxes calculated at checkout</p>
              <Button className="w-full">Checkout</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
