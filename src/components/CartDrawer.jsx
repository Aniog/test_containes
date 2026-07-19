import React, { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
    const containerRef = useRef(null);

    useEffect(() => {
        let cleanup;
        const frameId = window.requestAnimationFrame(() => {
            if (containerRef.current) {
                cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
            }
        });
        return () => {
            window.cancelAnimationFrame(frameId);
            if (typeof cleanup === 'function') cleanup();
        };
    }, [isCartOpen, cart]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={cn(
                    'fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity duration-500',
                    isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div
                ref={containerRef}
                className={cn(
                    'fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out',
                    isCartOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 border-b border-stone-100 flex items-center justify-between">
                        <h2 className="text-sm uppercase tracking-widest font-semibold flex items-center gap-2">
                            <ShoppingBag size={18} />
                            Your bag ({cart.length})
                        </h2>
                        <button onClick={() => setIsCartOpen(false)}>
                            <X size={24} strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                        {cart.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <p className="font-serif text-lg mb-4">Your bag is empty</p>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="text-xs uppercase tracking-widest border-b border-velmora-black pb-1"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-20 aspect-[4/5] bg-velmora-sand flex-shrink-0 overflow-hidden">
                                            <img
                                                data-strk-img-id={`cart-item-img-${item.id}`}
                                                data-strk-img={`[cart-item-title-${item.id}] gold jewelry [cart-item-desc-${item.id}]`}
                                                data-strk-img-ratio="4x5"
                                                data-strk-img-width="200"
                                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 id={`cart-item-title-${item.id}`} className="text-xs font-serif tracking-widest uppercase">
                                                    {item.name}
                                                </h3>
                                                <p className="text-xs">${item.price}</p>
                                            </div>
                                            <p id={`cart-item-desc-${item.id}`} className="text-[10px] text-velmora-stone mb-4 uppercase tracking-widest">
                                                {item.material || '18K Gold Plated'}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center border border-stone-200 px-2 py-1">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="mx-4 text-xs">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-[10px] uppercase tracking-widest text-velmora-stone border-b border-transparent hover:border-velmora-stone transition-colors"
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
                    {cart.length > 0 && (
                        <div className="p-6 border-t border-stone-100 bg-velmora-sand/30">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xs uppercase tracking-widest">Subtotal</span>
                                <span className="text-sm font-semibold">${cartTotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-velmora-black text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all">
                                Checkout
                            </button>
                            <p className="text-[10px] text-center text-velmora-stone mt-4 uppercase tracking-[0.1em]">
                                Shipping & taxes calculated at checkout
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
