import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity
  } = useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setIsCartOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#2A2520]/40 z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#FAF7F2] z-50 shadow-2xl transform transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#E8E2D9]">
          <h2 className="font-serif text-2xl text-[#3D3833]">Your Bag</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-[#9A8E82] hover:text-[#3D3833] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-[#F5F1EB] flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-[#C4B8A9]" />
            </div>
            <p className="font-serif text-xl text-[#3D3833] mb-2">Your bag is empty</p>
            <p className="text-[#9A8E82] text-sm mb-8">
              Discover our collection of demi-fine jewelry
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-outline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  {/* Image */}
                  <Link
                    to={`/product/${item.product.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    className="flex-shrink-0 w-24 h-24 bg-[#F5F1EB] overflow-hidden"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.slug}`}
                      onClick={() => setIsCartOpen(false)}
                      className="block"
                    >
                      <h3 className="product-name text-sm text-[#3D3833] mb-1 truncate">
                        {item.product.name}
                      </h3>
                    </Link>
                    {item.variant && (
                      <p className="text-xs text-[#9A8E82] mb-2">
                        {item.variant}
                      </p>
                    )}
                    <p className="font-sans text-sm text-[#3D3833] mb-3">
                      ${item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[#E8E2D9]">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant,
                              item.quantity - 1
                            )
                          }
                          className="p-2 text-[#9A8E82] hover:text-[#3D3833] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium text-[#3D3833]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.variant,
                              item.quantity + 1
                            )
                          }
                          className="p-2 text-[#9A8E82] hover:text-[#3D3833] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(item.product.id, item.variant)
                        }
                        className="text-xs text-[#9A8E82] hover:text-[#C9A66B] transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E8E2D9] px-6 py-6 bg-[#FAF7F2]">
              <div className="flex justify-between items-center mb-6">
                <span className="font-sans text-[#3D3833]">Subtotal</span>
                <span className="font-serif text-xl text-[#3D3833]">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-[#9A8E82] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="btn-gold w-full mb-3">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3 text-sm font-medium text-[#9A8E82] hover:text-[#3D3833] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
