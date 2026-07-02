import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartProvider';
import { Button } from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (isCartOpen) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isCartOpen, cartItems]);

  return (
    <>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />

          {/* Drawer */}
          <div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-bg z-[101] shadow-2xl flex flex-col"
            ref={containerRef}
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <h2 className="font-serif text-xl uppercase tracking-widest">Shopping Bag</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-velmora-charcoal hover:rotate-90 transition-transform duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag className="w-12 h-12 text-velmora-grey/30" strokeWidth={1} />
                  <p className="font-serif text-velmora-grey tracking-wide">Your bag is empty</p>
                  <Button
                    variant="outline"
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4"
                  >
                    Start Shopping
                  </Button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-32 bg-velmora-grey/10 flex-shrink-0">
                      <img
                        data-strk-img-id={`cart-item-${item.id}`}
                        data-strk-img={item.image_id || item.name}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="w-full h-full object-cover"
                        alt={item.name}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-serif text-sm uppercase tracking-widest">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-velmora-grey hover:text-velmora-base transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-velmora-grey mt-1">Gold Vermeil</p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-black/10">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-black/5 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-black/5 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-serif text-sm">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-black/5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg tracking-wide">Subtotal</span>
                  <span className="font-serif text-lg">${cartTotal}</span>
                </div>
                <p className="text-[10px] uppercase tracking-ultra-wide text-velmora-grey text-center">
                  Shipping and taxes calculated at checkout
                </p>
                <Button className="w-full h-14 bg-velmora-base hover:bg-velmora-base/90 text-white tracking-ultra-wide">
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CartDrawer;
