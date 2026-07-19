import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="serif-heading text-xl">
            Shopping Bag ({totalItems})
          </h2>
          <button onClick={closeCart} className="p-2 hover:text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="serif-heading text-xl mb-2">Your bag is empty</p>
              <p className="text-muted-foreground text-sm mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Button onClick={closeCart} variant="dark">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-muted flex-shrink-0">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `linear-gradient(135deg, #C9A96E22 0%, #1A171411 100%)`,
                      }}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm mb-1">{item.name}</h3>
                    <p className="text-muted-foreground text-xs mb-2">{item.variant}</p>
                    <p className="text-sm font-medium">${item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:border-primary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:border-primary transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-muted-foreground hover:text-destructive transition-colors underline"
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
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="serif-heading text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-muted-foreground text-xs">
              Shipping & taxes calculated at checkout
            </p>
            <Button className="w-full" variant="dark">
              Checkout
            </Button>
            <Button className="w-full" variant="outline" onClick={closeCart}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
