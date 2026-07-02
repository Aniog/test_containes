import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <div
      className={`fixed inset-0 z-[70] transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-black/30" onClick={closeCart} />
      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-2xl tracking-wide">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-velmora-muted mb-4" strokeWidth={1} />
              <p className="font-serif text-xl text-velmora-stone mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-muted mb-6">
                Discover our collection and find something you love.
              </p>
              <button onClick={closeCart} className="btn-primary">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-sand rounded-sm flex-shrink-0 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="font-serif text-sm tracking-wider uppercase text-velmora-dark hover:text-velmora-gold transition-colors line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-velmora-stone mt-0.5 capitalize">
                      {item.variant} Tone
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-velmora-sand transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-xs font-medium min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-velmora-sand transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.cartId)}
                    className="text-velmora-muted hover:text-velmora-dark transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-velmora-border">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-velmora-stone">Subtotal</span>
              <span className="font-serif text-xl">${subtotal.toFixed(0)}</span>
            </div>
            <p className="text-xs text-velmora-muted mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="btn-primary w-full">Checkout</button>
            <button onClick={closeCart} className="btn-outline w-full mt-3">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
