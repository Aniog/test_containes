import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-velmora-base shadow-sm py-4" : "bg-[#FAF9F6] py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -ml-2 text-velmora-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-widest uppercase font-semibold text-velmora-dark md:w-1/4"
        >
          Velmora
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-8 w-1/2">
          <Link
            to="/shop"
            className="text-sm uppercase tracking-widest text-velmora-dark hover:text-velmora-gold transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/collections"
            className="text-sm uppercase tracking-widest text-velmora-dark hover:text-velmora-gold transition-colors"
          >
            Collections
          </Link>
          <Link
            to="/about"
            className="text-sm uppercase tracking-widest text-velmora-dark hover:text-velmora-gold transition-colors"
          >
            About
          </Link>
          <Link
            to="/journal"
            className="text-sm uppercase tracking-widest text-velmora-dark hover:text-velmora-gold transition-colors"
          >
            Journal
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center justify-end space-x-4 w-1/4">
          <button aria-label="Search" className="text-velmora-dark hover:text-velmora-gold transition-colors">
            <Search size={20} />
          </button>
          <button
            aria-label="Cart"
            className="text-velmora-dark hover:text-velmora-gold transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-velmora-base border-t border-velmora-border shadow-lg">
          <nav className="flex flex-col p-6 space-y-6">
            <Link
              to="/shop"
              className="text-lg font-serif uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/collections"
              className="text-lg font-serif uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-lg font-serif uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/journal"
              className="text-lg font-serif uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Journal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
