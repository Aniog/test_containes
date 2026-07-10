import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './CartDrawer.css';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'cart-overlay--open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'cart-drawer--open' : ''}`}>
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">Your Cart</h2>
          <button 
            className="cart-drawer__close" 
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-drawer__empty">
            <ShoppingBag size={48} strokeWidth={1} />
            <p>Your cart is empty</p>
            <button className="btn btn-outline" onClick={closeCart}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="cart-item">
                  <div className="cart-item__image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item__details">
                    <h3 className="cart-item__name">{item.name}</h3>
                    <p className="cart-item__variant">{item.variant} tone</p>
                    <p className="cart-item__price">{formatPrice(item.price)}</p>
                    <div className="cart-item__quantity">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} strokeWidth={2} />
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                  <button 
                    className="cart-item__remove"
                    onClick={() => removeFromCart(item.id, item.variant)}
                    aria-label="Remove item"
                  >
                    <X size={16} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-drawer__footer">
              <div className="cart-drawer__subtotal">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <p className="cart-drawer__note">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn btn-accent cart-drawer__checkout">
                Checkout
              </button>
              <button className="cart-drawer__continue" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}