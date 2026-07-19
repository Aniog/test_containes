import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    items, 
    isOpen, 
    subtotal, 
    itemCount,
    removeItem, 
    updateQuantity, 
    closeCart 
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : 'closed'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-xl uppercase tracking-wider">
              Cart ({itemCount})
            </h2>
            <button 
              onClick={closeCart}
              className="hover:text-[hsl(var(--velmora-gold))] elegant-transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-2">Your cart is empty</p>
                <Link 
                  to="/shop" 
                  onClick={closeCart}
                  className="text-sm uppercase tracking-wider text-[hsl(var(--velmora-gold))] hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-muted rounded-sm overflow-hidden flex-shrink-0">
                      <img 
                        src={`https://placehold.co/200x200/e8e4df/8B7355?text=${encodeURIComponent(item.name)}`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="product-name">{item.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-muted-foreground hover:text-destructive elegant-transition"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="quantity-input">
                          <button 
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="quantity-value">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t space-y-4">
              <div className="flex items-center justify-between text-lg font-medium">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping & taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary w-full text-center block"
              >
                Checkout
              </Link>
              <button
                onClick={closeCart}
                className="w-full text-center text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground elegant-transition"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
