import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[70] bg-black/30 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md z-[80] flex flex-col shadow-xl animate-slide-up"
        style={{ backgroundColor: 'var(--color-bg-primary)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 transition-opacity hover:opacity-60"
            aria-label="Close cart"
          >
            <X size={20} style={{ color: 'var(--color-text-primary)' }} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} style={{ color: 'var(--color-text-muted)' }} className="mb-4" />
              <p className="font-serif text-lg mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                Your cart is empty
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-outline mt-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Item Image */}
                  <div className="w-24 h-30 flex-shrink-0 bg-[var(--color-bg-secondary)]">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="product-name text-xs tracking-wider">{item.name}</h3>
                      <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                        {item.variant}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border" style={{ borderColor: 'var(--color-border)' }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:opacity-60 transition-opacity"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:opacity-60 transition-opacity"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="price">${item.price * item.quantity}</span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start p-1 opacity-40 hover:opacity-100 transition-opacity"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t space-y-4" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Subtotal</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              Shipping and taxes calculated at checkout
            </p>
            <button
              className="btn btn-primary w-full"
              style={{ backgroundColor: 'var(--color-base)', color: 'var(--color-white)' }}
            >
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-sm py-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;