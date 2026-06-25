import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../../contexts/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { cartItemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome
      ? "bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E5E0D8] text-[#2D2A26] py-3 lg:py-4"
      : "bg-transparent text-white py-4 lg:py-6"
  }`;

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className="font-serif text-2xl tracking-widest uppercase md:w-1/4"
        >
          Velmora
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 w-2/4">
          <Link to="/shop" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/collections" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">Collections</Link>
          <Link to="/about" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">About</Link>
          <Link to="/journal" className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">Journal</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center justify-end gap-4 md:w-1/4">
          <button aria-label="Search" className="p-2 hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button 
            aria-label="Cart" 
            className="p-2 hover:opacity-70 transition-opacity relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#A68D47] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-4/5 max-w-sm bg-[#FAF9F5] text-[#2D2A26] h-full shadow-2xl flex flex-col pt-20 px-6 relative">
            <button 
              className="absolute top-5 right-5 p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-6 font-serif text-xl tracking-wide uppercase">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
              <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
            </nav>
          </div>
          <div 
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
