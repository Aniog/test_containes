import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';

const Layout = ({ children, cart, setCart, isCartOpen, setIsCartOpen }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const updateCartQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/' },
    { label: 'Journal', path: '/' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F8F5F1] border-b border-[#E5DFD3]' : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-[#2C2825]">
            VELMORA
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.08em] uppercase">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path}
                className="hover:text-[#B89778] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button className="p-2 hover:text-[#B89778] transition-colors">
              <Search size={18} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:text-[#B89778] transition-colors relative"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#B89778] text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#2C2825] text-[#F8F5F1] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
            {/* Logo */}
            <div className="col-span-2 md:col-span-1">
              <div className="font-serif text-2xl tracking-[0.15em] mb-4">VELMORA</div>
              <p className="text-sm text-[#B89778] tracking-wide">Fine Jewelry</p>
            </div>

            {/* Shop */}
            <div>
              <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#B89778]">Shop</div>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-[#B89778]">All Jewelry</Link>
                <Link to="/shop" className="block hover:text-[#B89778]">Earrings</Link>
                <Link to="/shop" className="block hover:text-[#B89778]">Necklaces</Link>
                <Link to="/shop" className="block hover:text-[#B89778]">Huggies</Link>
              </div>
            </div>

            {/* Help */}
            <div>
              <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#B89778]">Help</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#B89778]">Shipping</a>
                <a href="#" className="block hover:text-[#B89778]">Returns</a>
                <a href="#" className="block hover:text-[#B89778]">Care Guide</a>
                <a href="#" className="block hover:text-[#B89778]">Contact</a>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#B89778]">Company</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#B89778]">Our Story</a>
                <a href="#" className="block hover:text-[#B89778]">Journal</a>
                <a href="#" className="block hover:text-[#B89778]">Sustainability</a>
                <a href="#" className="block hover:text-[#B89778]">Stockists</a>
              </div>
            </div>

            {/* Social & Payments */}
            <div>
              <div className="uppercase text-xs tracking-[0.15em] mb-4 text-[#B89778]">Follow</div>
              <div className="flex gap-4 mb-8 text-sm">
                <a href="#" className="hover:text-[#B89778]">IG</a>
                <a href="#" className="hover:text-[#B89778]">PIN</a>
                <a href="#" className="hover:text-[#B89778]">TT</a>
              </div>
              <div className="text-xs text-[#6B665F]">VISA · MC · AMEX · APPLE PAY</div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#4A4641] text-center text-xs text-[#6B665F] tracking-wider">
            © {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] p-8 overflow-y-auto ${isCartOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center mb-8">
          <div className="font-serif text-2xl tracking-[0.1em]">Your Cart</div>
          <button onClick={() => setIsCartOpen(false)}><X size={20} /></button>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag size={48} className="mx-auto mb-4 text-[#E5DFD3]" />
            <p className="text-[#6B665F]">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-[#E5DFD3]">
                  <div className="w-20 h-20 bg-[#F8F5F1] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="product-name text-sm tracking-wider pr-6">{item.name}</div>
                    <div className="text-sm text-[#6B665F] mt-1">{item.variant}</div>
                    <div className="text-sm mt-2">${item.price}</div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="p-1.5 hover:bg-[#F8F5F1]">
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="p-1.5 hover:bg-[#F8F5F1]">
                          <Plus size={14} />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-[#6B665F] hover:text-[#2C2825]">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E5DFD3] pt-6">
              <div className="flex justify-between text-lg mb-6">
                <span>Total</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <button className="btn btn-primary w-full mb-3">Checkout</button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline w-full"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;