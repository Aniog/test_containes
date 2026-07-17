import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full flex">
        <div className="w-full bg-background shadow-xl flex flex-col h-full right-0 transition-transform transform translate-x-0 animate-in slide-in-from-right-full duration-300">
          
          {/* Header */}
          <div className="px-6 py-6 border-b border-border flex items-center justify-between">
            <h2 className="font-serif text-2xl uppercase tracking-wider">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors p-2 -mr-2"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6 border-b border-border">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground">
                <ShoppingBag size={48} strokeWidth={1} />
                <p className="font-serif text-xl text-foreground">Your cart is empty.</p>
                <p className="text-sm">Discover our elegant collections to find your next piece.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 border border-foreground text-foreground px-6 py-3 uppercase tracking-wider text-sm hover:bg-foreground hover:text-background transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-8">
                {cartItems.map((item, index) => (
                  <li key={`${item.product.id}-${item.tone}-${index}`} className="flex space-x-4">
                    <div className="w-24 h-24 bg-brand-50 flex-shrink-0 relative overflow-hidden group">
                      <img 
                        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                        data-strk-img-id={`cart-thumb-${item.product.id}`}
                        data-strk-img={`[cart-item-title-${item.product.id}] minimalist jewelry white background`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        alt={item.product.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col flex-1 pb-1">
                      <div className="flex justify-between w-full">
                        <div>
                          <Link 
                            to={`/product/${item.product.id}`}
                            onClick={() => setIsCartOpen(false)}
                            className="font-serif uppercase tracking-widest text-sm hover:opacity-70 transition-opacity"
                            id={`cart-item-title-${item.product.id}`}
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{item.tone} TONE</p>
                        </div>
                        <p className="font-medium">${item.product.price}</p>
                      </div>
                      <div className="flex justify-between items-end mt-auto pt-4">
                        <div className="flex items-center border border-border">
                          <button 
                            className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => updateQuantity(item.product.id, item.tone, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-1 text-sm tabular-nums">{item.quantity}</span>
                          <button 
                            className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => updateQuantity(item.product.id, item.tone, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                          onClick={() => removeFromCart(item.product.id, item.tone)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer Checkout */}
          {cartItems.length > 0 && (
            <div className="px-6 py-6 bg-brand-50">
              <div className="flex justify-between items-center mb-6">
                <span className="uppercase tracking-wider text-sm font-medium">Subtotal</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center mb-6 uppercase tracking-wider">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full bg-brand-900 text-brand-50 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-800 transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
