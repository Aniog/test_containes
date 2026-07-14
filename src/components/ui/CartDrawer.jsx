import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from './Button';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  const total = getCartTotal();
  const shipping = total > 0 ? 0 : 0; // Free shipping
  const grandTotal = total + shipping;

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="cart-overlay open" 
        onClick={closeCart}
        aria-hidden="true"
      />
      <div className="cart-drawer open" role="dialog" aria-label="Shopping cart">
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <h2 className="font-serif text-lg tracking-[0.1em] uppercase">Your Cart</h2>
          <button 
            onClick={closeCart} 
            className="p-2 -mr-2"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag className="w-12 h-12 text-[var(--velmora-border)] mb-4" />
            <p className="text-[var(--velmora-text-muted)] mb-6">Your cart is empty</p>
            <Button onClick={closeCart} variant="outline">Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6">
              {cart.map((item) => (
                <div key={item.cartId} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-variant">
                      {item.selectedVariant} • ${item.price}
                    </div>
                    <div className="cart-quantity">
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="ml-auto text-xs text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[var(--velmora-border)]">
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--velmora-text-muted)]">Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--velmora-text-muted)]">Shipping</span>
                  <span className="text-[var(--velmora-gold)]">Free</span>
                </div>
                <div className="divider my-2" />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${grandTotal}</span>
                </div>
              </div>

              <Button className="w-full mb-3">
                Proceed to Checkout
              </Button>
              <button 
                onClick={closeCart}
                className="w-full text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)] py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;