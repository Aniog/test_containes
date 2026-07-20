import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal/40 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl transform transition-transform duration-400 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 hairline-b">
            <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
            <button onClick={closeCart} className="p-1 hover:opacity-60 transition-opacity" aria-label="Close cart">
              <X size={22} className="text-charcoal" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-warmgray mb-4" />
                <p className="font-serif text-lg text-umber mb-2">Your bag is empty</p>
                <p className="text-sm text-warmgray mb-6">Discover pieces crafted to be treasured.</p>
                <button
                  onClick={closeCart}
                  className="bg-charcoal text-cream px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-espresso transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                      <img src={item.image} alt={item.name} className="w-20 h-24 object-cover bg-sand" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`} onClick={closeCart}>
                        <h3 className="font-serif text-sm tracking-wide truncate">{item.name}</h3>
                      </Link>
                      <p className="text-xs text-warmgray mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 border border-sand flex items-center justify-center hover:border-umber transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 border border-sand flex items-center justify-center hover:border-umber transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-warmgray underline hover:text-charcoal transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 hairline-t bg-parchment/50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-warmgray">Subtotal</span>
                <span className="font-serif text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-warmgray mb-4">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-charcoal text-cream py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-espresso transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 py-3 text-xs tracking-widest uppercase font-medium text-umber hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}