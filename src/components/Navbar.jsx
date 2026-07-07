import React from 'react';
import { ShoppingBag, Search, Menu, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { formatPrice, cn } from '@/lib/utils';
import { S3_DOMAIN } from '@/config';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 md:px-12',
          isScrolled || !isHome ? 'bg-[#F9F7F2] border-b border-[#E5E5E5] py-3' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-3xl tracking-[0.2em] transition-colors duration-300',
              isScrolled || !isHome ? 'text-[#1A1A1A]' : 'text-[#F9F7F2]'
            )}
          >
            VELMORA
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm uppercase tracking-widest transition-colors duration-300 hover:text-[#C5A059]',
                  isScrolled || !isHome ? 'text-[#1A1A1A]' : 'text-[#F9F7F2]'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button
              className={cn(
                'transition-colors duration-300 hover:text-[#C5A059]',
                isScrolled || !isHome ? 'text-[#1A1A1A]' : 'text-[#F9F7F2]'
              )}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className={cn(
                'relative transition-colors duration-300 hover:text-[#C5A059]',
                isScrolled || !isHome ? 'text-[#1A1A1A]' : 'text-[#F9F7F2]'
              )}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C5A059] text-[#F9F7F2] text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className={cn(
                'md:hidden transition-colors duration-300',
                isScrolled || !isHome ? 'text-[#1A1A1A]' : 'text-[#F9F7F2]'
              )}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-[#F9F7F2] transform transition-transform duration-500 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif text-2xl tracking-[0.2em]">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif tracking-widest uppercase py-2 border-b border-[#E5E5E5]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[70] transition-opacity duration-500',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#F9F7F2] z-[80] shadow-2xl transform transition-transform duration-500 ease-in-out',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="h-full flex flex-col p-8">
          <div className="flex justify-between items-center mb-10 border-b border-[#E5E5E5] pb-6">
            <h2 className="font-serif text-2xl uppercase tracking-widest">Your Bag</h2>
            <button onClick={() => setIsCartOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-8 scrollbar-hide">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <p className="font-serif text-lg italic mb-6">Your bag is currently empty.</p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="bg-[#1A1A1A] text-[#F9F7F2] px-8 py-3 uppercase tracking-widest text-xs hover:bg-[#C5A059] transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              cart.map((item) => {
                const cartItemId = "cart-item-" + item.id;
                const cartTitleId = "cart-item-title-" + item.id;
                const cartQuery = "[" + cartTitleId + "]";
                
                return (
                  <div key={`${item.id}-${item.variant}`} className="flex space-x-6">
                    <div className="w-24 h-32 bg-[#E5E5E5] flex-shrink-0">
                      <img
                        data-strk-img-id={cartItemId}
                        data-strk-img={cartQuery}
                        data-strk-img-ratio="2x3"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.data.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between mb-1">
                        <h3 id={cartTitleId} className="font-serif uppercase tracking-widest text-sm">
                          {item.data.name}
                        </h3>
                      <button onClick={() => removeFromCart(item.id, item.variant)}>
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">{item.variant}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex items-center border border-[#E5E5E5]">
                        <button
                          className="p-1 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 text-sm">{item.quantity}</span>
                        <button
                          className="p-1 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm">{formatPrice(item.data.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-[#E5E5E5] pt-8 mt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="uppercase tracking-widest text-sm">Subtotal</span>
                <span className="text-lg">{formatPrice(cartTotal)}</span>
              </div>
              <button className="w-full bg-[#1A1A1A] text-[#F9F7F2] py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#C5A059] transition-colors duration-300">
                Proceed to Checkout
              </button>
              <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-widest">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { Navbar, CartDrawer };
