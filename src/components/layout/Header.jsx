import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import CartDrawer from "./CartDrawer";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const toggleCart = useStore((state) => state.toggleCart);
  const cart = useStore((state) => state.cart);
  
  const isHome = location.pathname === "/";
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 20);
    }
  }, [location.pathname, isHome]);

  const navLinks = [
    { name: "Shop", path: "/shop" },
    { name: "Collections", path: "/shop?category=sets" },
    { name: "About", path: "/about" },
    { name: "Journal", path: "/journal" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-border text-foreground py-4"
            : "bg-transparent border-transparent text-foreground py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile Menu */}
          <div className="flex-1 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 -ml-2" aria-label="Menu">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] flex flex-col pt-12">
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-lg font-serif uppercase tracking-widest hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex-1 hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium tracking-wide uppercase hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <Link to="/" className="flex-shrink-0 text-center">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium">
              VELMORA
            </span>
          </Link>

          <div className="flex-1 flex items-center justify-end gap-2 md:gap-4 border-l-0">
            <button className="p-2 hover:text-gold transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 hover:text-gold transition-colors relative" 
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute top-1 max-md:-top-1 right-0 max-md:-right-1 w-4 h-4 bg-foreground text-background flex items-center justify-center text-[10px] rounded-full font-medium">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  );
};

export default Header;