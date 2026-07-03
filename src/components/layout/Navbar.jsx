import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?collection=new' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-[#3D3833] hover:text-[#C9A66B] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Left: Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl tracking-wide text-[#3D3833] hover:text-[#C9A66B] transition-colors"
            >
              VELMORA
            </Link>

            {/* Center: Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-sans font-medium tracking-wide text-[#3D3833] hover:text-[#C9A66B] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A66B] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-[#3D3833] hover:text-[#C9A66B] transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-[#3D3833] hover:text-[#C9A66B] transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C9A66B] text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Search Bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isSearchOpen ? 'max-h-20' : 'max-h-0'
          } bg-[#FAF7F2] border-t border-[#E8E2D9]`}
        >
          <div className="container-wide py-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9A8E82]" />
              <input
                type="text"
                placeholder="Search for jewelry..."
                className="w-full pl-12 pr-4 py-3 bg-[#F5F1EB] border border-[#E8E2D9] text-[#3D3833] placeholder-[#9A8E82] focus:outline-none focus:border-[#C9A66B] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          } bg-[#FAF7F2] border-t border-[#E8E2D9]`}
        >
          <div className="container-wide py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-sans font-medium text-[#3D3833] hover:text-[#C9A66B] transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for transparent nav */}
      {isHomePage && !isScrolled && <div className="h-20" />}
    </>
  );
}
