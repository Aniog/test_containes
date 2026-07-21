import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCartOpen, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur shadow-sm border-b" : "bg-transparent text-foreground"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Left: Mobile Menu Toggle / Blank space on desktop for balance */}
        <div className="flex-1 flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link to="/" className="font-heading text-2xl font-bold tracking-widest uppercase">
            VELMORA
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 text-sm tracking-wide">
          <Link to="/collections">Shop</Link>
          <Link to="/collections">Collections</Link>
          <Link to="#">About</Link>
          <Link to="#">Journal</Link>
        </nav>

        {/* Right: Icons */}
        <div className="flex-1 flex items-center justify-end space-x-4">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={() => setCartOpen(true)}>
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 p-4 flex flex-col md:hidden">
          <div className="flex justify-end mb-8">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col space-y-6 text-xl tracking-wide uppercase font-heading text-center">
            <Link to="/collections" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link to="/collections" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
            <Link to="#" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="#" onClick={() => setMobileMenuOpen(false)}>Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
}