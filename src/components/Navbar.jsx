import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../lib/CartContext";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-brand-linen/95 backdrop-blur-md py-4 shadow-sm"
          : isHome
          ? "bg-transparent py-6"
          : "bg-brand-linen py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo (Mobile Menu Toggle) */}
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className={cn("w-6 h-6", !isScrolled && isHome && "text-white")} />
          </button>
        </div>

        {/* Center/Left: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/shop"
            className={cn(
              "text-xs uppercase tracking-[0.2em] hover-gold",
              !isScrolled && isHome ? "text-white" : "text-brand-ebony"
            )}
          >
            Shop
          </Link>
          <Link
            to="/shop?category=Collections"
            className={cn(
              "text-xs uppercase tracking-[0.2em] hover-gold",
              !isScrolled && isHome ? "text-white" : "text-brand-ebony"
            )}
          >
            Collections
          </Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            "font-serif text-2xl tracking-[0.3em] font-medium absolute left-1/2 -translate-x-1/2",
            !isScrolled && isHome ? "text-white" : "text-brand-ebony"
          )}
        >
          VELMORA
        </Link>

        {/* Right: Navigation Links (Desktop) + Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-8 mr-4">
            <Link
              to="/about"
              className={cn(
                "text-xs uppercase tracking-[0.2em] hover-gold",
                !isScrolled && isHome ? "text-white" : "text-brand-ebony"
              )}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={cn(
                "text-xs uppercase tracking-[0.2em] hover-gold",
                !isScrolled && isHome ? "text-white" : "text-brand-ebony"
              )}
            >
              Journal
            </Link>
          </div>
          
          <button className={cn("hover-gold", !isScrolled && isHome ? "text-white" : "text-brand-ebony")}>
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className={cn("hover-gold relative", !isScrolled && isHome ? "text-white" : "text-brand-ebony")}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans tracking-normal">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-brand-linen z-[60] transition-transform duration-500 lg:hidden flex flex-col items-center justify-center gap-8",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6"
        >
          <X className="w-6 h-6 text-brand-ebony" />
        </button>
        
        <Link to="/shop" className="font-serif text-3xl tracking-widest text-brand-ebony">Shop</Link>
        <Link to="/shop?category=Collections" className="font-serif text-3xl tracking-widest text-brand-ebony">Collections</Link>
        <Link to="/about" className="font-serif text-3xl tracking-widest text-brand-ebony">About</Link>
        <Link to="/journal" className="font-serif text-3xl tracking-widest text-brand-ebony">Journal</Link>
      </div>
    </nav>
  );
};

export default Navbar;
