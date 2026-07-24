import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../cart/CartContext";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen: setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isTransparent
            ? "bg-transparent text-primary-foreground py-6"
            : "bg-background/95 backdrop-blur-md text-foreground py-4 border-b border-border shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl tracking-widest uppercase hover:opacity-80 transition-opacity"
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
              <Link to="/shop" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Shop</Link>
              <Link to="/collections" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Collections</Link>
              <Link to="/about" className="hover:text-primary transition-colors underline-offset-4 hover:underline">About</Link>
              <Link to="/journal" className="hover:text-primary transition-colors underline-offset-4 hover:underline">Journal</Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button aria-label="Search" className="hover:text-primary transition-colors p-2 hidden sm:block">
                <Search size={20} />
              </button>
              <button
                aria-label="Cart"
                className="hover:text-primary transition-colors p-2 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ paddingTop: '80px' }}
      >
        <nav className="flex flex-col items-center gap-8 p-8 text-lg font-serif">
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link to="/collections" className="hover:text-primary transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/journal" className="hover:text-primary transition-colors">Journal</Link>
          
          <div className="mt-8 flex items-center justify-center w-full border-t border-border pt-8">
            <Button variant="ghost" className="flex items-center gap-2">
              <Search size={18} />
              <span className="font-sans uppercase text-sm tracking-wide">Search</span>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
