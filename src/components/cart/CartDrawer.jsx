import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[var(--velmora-cream)] z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-border)]">
          <h2 className="font-serif text-xl tracking-widest uppercase">Your Cart</h2>
          <button onClick={closeCart} className="p-2 hover:opacity-70 transition-opacity" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-xl text-[var(--velmora-text-muted)] mb-2">Your cart is empty</p>
              <p className="text-sm text-[var(--velmora-text-muted)]">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item, index) => (
                <li key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-serif text-sm tracking-wider uppercase">{item.name}</h3>
                    <p className="text-xs text-[var(--velmora-text-muted)] mt-1">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1 border border-[var(--velmora-border)] rounded hover:bg-[var(--velmora-bg-alt)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1 border border-[var(--velmora-border)] rounded hover:bg-[var(--velmora-bg-alt)] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="ml-auto p-1 text-[var(--velmora-text-muted)] hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[var(--velmora-border)] p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm tracking-wider uppercase">Subtotal</span>
              <span className="font-serif text-xl">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--velmora-text-muted)] mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full btn-primary">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
