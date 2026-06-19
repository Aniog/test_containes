import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getProductById } from '../../data/products';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getItemCount } = useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const totalItems = getItemCount();
  const totalPrice = items.reduce((sum, item) => {
    const product = getProductById(item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#1A1A1A]/40 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FAF7F2] z-50 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8E4DE]">
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <button
              onClick={closeCart}
              className="p-2 hover:text-[#C9A962] transition-colors"
              aria-label="Close cart"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} strokeWidth={1} className="text-[#D4CFC7] mb-4" />
                <p className="text-[#6B6B6B] mb-4">Your cart is empty</p>
                <button
                  onClick={closeCart}
                  className="btn-secondary text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => {
                  const product = getProductById(item.productId);
                  if (!product) return null;

                  return (
                    <li key={`${item.productId}-${item.variant}`} className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-30 bg-[#F5F0E8] flex-shrink-0">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="product-name text-xs tracking-[0.15em]">
                            {product.name}
                          </h3>
                          <p className="text-sm text-[#6B6B6B] mt-1">
                            {item.variant}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-[#E8E4DE]">
                            <button
                              onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                              className="p-2 hover:text-[#C9A962] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} strokeWidth={2} />
                            </button>
                            <span className="px-3 text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                              className="p-2 hover:text-[#C9A962] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} strokeWidth={2} />
                            </button>
                          </div>

                          {/* Price */}
                          <p className="font-medium">
                            ${product.price * item.quantity}
                          </p>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="self-start p-1 text-[#9A9A9A] hover:text-[#1A1A1A] transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={18} strokeWidth={1.5} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E8E4DE] bg-[#FDFCFA]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#6B6B6B]">Subtotal</span>
                <span className="font-serif text-xl">${totalPrice}</span>
              </div>
              <p className="text-xs text-[#9A9A9A] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="btn-accent w-full">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-3 text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
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