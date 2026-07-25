import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const CartDrawer = () => {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-background shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl uppercase tracking-widest">Your Cart</h2>
          <button onClick={closeCart} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag size={48} className="text-border" />
              <p className="font-serif text-xl">Your cart is empty</p>
              <button 
                onClick={closeCart}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 tracking-widest uppercase text-sm transition-colors mt-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-border pb-6">
                <div className="w-24 h-32 bg-muted flex-shrink-0 relative overflow-hidden">
                  <img 
                    src={item.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"} 
                    alt={item.name}
                    className="object-cover w-full h-full"
                    {...(item.image ? {} : {
                      'data-strk-img-id': `cart-thumb-${item.id}`,
                      'data-strk-img': `[cart-item-${item.id}-name]`,
                      'data-strk-img-ratio': '3x4',
                      'data-strk-img-width': '200'
                    })}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-lg uppercase tracking-wider" id={`cart-item-${item.id}-name`}>
                        {item.name}
                      </h3>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    {item.variant && (
                      <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>
                    )}
                    <p className="mt-2 text-primary">{formatPrice(item.price)}</p>
                  </div>
                  
                  <div className="flex items-center border border-border w-max mt-4">
                    <button 
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 bg-muted/30 border-t border-border mt-auto">
            <div className="flex justify-between items-center mb-6 font-serif text-xl">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 tracking-widest uppercase text-sm transition-colors text-center">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};