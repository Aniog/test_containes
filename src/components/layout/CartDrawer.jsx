import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <h2 className="font-serif text-2xl">Your Bag</h2>
          <button onClick={closeCart} className="hover:text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground">
              <ShoppingBag className="w-12 h-12 opacity-20" />
              <p>Your bag is currently empty.</p>
              <button 
                onClick={closeCart}
                className="text-primary underline underline-offset-4 hover:text-accent font-medium mt-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg leading-tight uppercase tracking-wider">{item.product.name}</h3>
                        <button 
                          onClick={() => removeItem(item.product.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground ml-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground capitalize mt-1">{item.variant}</p>
                      <p className="font-medium mt-1">${item.product.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center border border-border w-24">
                      <button 
                        className="px-2 py-1 hover:bg-secondary transition-colors"
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="flex-1 text-center text-sm">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 hover:bg-secondary transition-colors"
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-lg">Subtotal</span>
              <span className="font-medium text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 font-medium tracking-widest uppercase transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
