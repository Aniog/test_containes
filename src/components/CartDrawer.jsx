import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

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

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <span className="font-serif text-xl tracking-wider">YOUR CART</span>
          <button onClick={closeCart} aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-[var(--velmora-taupe)] mb-6">Your cart is empty</p>
            <Button variant="outline" onClick={closeCart}>
              CONTINUE SHOPPING
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--velmora-ivory)] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name-text text-xs pr-4">{item.name}</p>
                        <p className="text-xs text-[var(--velmora-taupe)] mt-0.5">
                          {item.selectedVariant}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[var(--velmora-taupe)] hover:text-[var(--velmora-charcoal)]"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-sm text-[var(--velmora-gold-dark)] mt-1">
                      ${item.price}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-gold)]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-gold)]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[var(--velmora-border)] bg-[var(--velmora-bg)]">
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--velmora-taupe)]">Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--velmora-taupe)]">Shipping</span>
                  <span className="text-[var(--velmora-gold-dark)]">FREE</span>
                </div>
                <div className="hairline pt-2 mt-2 flex justify-between font-medium">
                  <span>Total</span>
                  <span>${grandTotal}</span>
                </div>
              </div>

              <Button 
                variant="primary" 
                className="w-full mb-3"
                onClick={() => {
                  closeCart();
                  // For now, just show a message - checkout would be implemented later
                  alert('Checkout would open here. Thank you for shopping with Velmora.');
                }}
              >
                PROCEED TO CHECKOUT
              </Button>
              
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="block text-center text-xs tracking-widest text-[var(--velmora-taupe)] hover:text-[var(--velmora-gold)]"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
