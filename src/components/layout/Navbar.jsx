import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = cn(
    "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 lg:px-12",
    isScrolled ? "bg-white text-primary shadow-sm py-3" : isHome ? "bg-transparent text-white" : "bg-white text-primary shadow-sm"
  );

  const links = [
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Journal", href: "/journal" },
  ];

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Menu & Logo (Mobile) / Links (Desktop) */}
        <div className="flex-1 hidden lg:flex gap-8">
          {links.slice(0, 2).map((link) => (
            <Link key={link.name} to={link.href} className="text-xs uppercase tracking-widest hover:text-accent transition-colors font-sans font-medium">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl lg:text-3xl font-serif tracking-[0.2em] font-medium italic">
            VELMORA
          </Link>
        </div>

        {/* Right: Search + Cart (Desktop) / Links (Desktop) */}
        <div className="flex-1 flex justify-end items-center gap-6 lg:gap-8">
          <div className="hidden lg:flex gap-8 mr-8">
            {links.slice(2).map((link) => (
              <Link key={link.name} to={link.href} className="text-xs uppercase tracking-widest hover:text-accent transition-colors font-sans font-medium">
                {link.name}
              </Link>
            ))}
          </div>
          <button className="hidden lg:block">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button onClick={() => setIsCartOpen(true)} className="relative p-1">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-x-0 top-[72px] bg-white text-primary z-40 transition-transform duration-300 lg:hidden border-t",
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="flex flex-col p-8 gap-6 h-screen">
          {links.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg uppercase tracking-widest font-serif border-b border-gray-100 pb-4">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
