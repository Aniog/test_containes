import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
          isScrolled || !isHome || isMobileMenuOpen
            ? "bg-background border-b border-border py-3 shadow-sm"
            : "bg-transparent text-white"
        )}
      >
        <div className="flex-1 hidden md:flex gap-8">
          <Link to="/shop" className="serif-uppercase hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/collections" className="serif-uppercase hover:opacity-70 transition-opacity">Collections</Link>
        </div>

        <Link to="/" className="text-2xl font-serif tracking-widest text-center flex-1">
          VELMORA
        </Link>

        <div className="flex-1 flex justify-end items-center gap-6">
          <div className="hidden md:flex gap-8 mr-8">
            <Link to="/about" className="serif-uppercase hover:opacity-70 transition-opacity">About</Link>
            <Link to="/journal" className="serif-uppercase hover:opacity-70 transition-opacity">Journal</Link>
          </div>
          <button className="hover:opacity-70 transition-opacity">
            <Search size={20} />
          </button>
          <button className="hover:opacity-70 transition-opacity relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-8 text-center">
            <Link to="/shop" className="text-2xl font-serif uppercase tracking-widest">Shop</Link>
            <Link to="/collections" className="text-2xl font-serif uppercase tracking-widest">Collections</Link>
            <Link to="/about" className="text-2xl font-serif uppercase tracking-widest">About</Link>
            <Link to="/journal" className="text-2xl font-serif uppercase tracking-widest">Journal</Link>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-serif tracking-widest mb-6 uppercase">VELMORA</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Direct-to-consumer fine jewelry crafted with intention and the highest quality materials. Designed for the modern woman who appreciates quiet luxury.
            </p>
            <div className="flex gap-4 mt-8">
              <Instagram size={20} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Facebook size={20} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Twitter size={20} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="serif-uppercase mb-6">Shop</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="hover:text-foreground transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="serif-uppercase mb-6">Help</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><button className="hover:text-foreground transition-colors">Shipping & Returns</button></li>
              <li><button className="hover:text-foreground transition-colors">Care Guide</button></li>
              <li><button className="hover:text-foreground transition-colors">Sizing Chart</button></li>
              <li><button className="hover:text-foreground transition-colors">Contact Us</button></li>
              <li><button className="hover:text-foreground transition-colors">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h3 className="serif-uppercase mb-6">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-foreground transition-colors">Journal</Link></li>
              <li><button className="hover:text-foreground transition-colors">Wholesale</button></li>
              <li><button className="hover:text-foreground transition-colors">Terms of Service</button></li>
              <li><button className="hover:text-foreground transition-colors">Privacy Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 grayscale opacity-60">
             {/* Payment Icons Placeholder */}
             <div className="w-10 h-6 bg-muted-foreground/20 rounded"></div>
             <div className="w-10 h-6 bg-muted-foreground/20 rounded"></div>
             <div className="w-10 h-6 bg-muted-foreground/20 rounded"></div>
             <div className="w-10 h-6 bg-muted-foreground/20 rounded"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
EOF > src/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
          isScrolled || !isHome || isMobileMenuOpen
            ? "bg-background border-b border-border py-3 shadow-sm"
            : "bg-transparent text-white"
        )}
      >
        <div className="flex-1 hidden md:flex gap-8">
          <Link to="/shop" className="serif-uppercase hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/collections" className="serif-uppercase hover:opacity-70 transition-opacity">Collections</Link>
        </div>

        <Link to="/" className="text-2xl font-serif tracking-widest text-center flex-1">
          VELMORA
        </Link>

        <div className="flex-1 flex justify-end items-center gap-6">
          <div className="hidden md:flex gap-8 mr-8">
            <Link to="/about" className="serif-uppercase hover:opacity-70 transition-opacity">About</Link>
            <Link to="/journal" className="serif-uppercase hover:opacity-70 transition-opacity">Journal</Link>
          </div>
          <button className="hover:opacity-70 transition-opacity">
            <Search size={20} />
          </button>
          <button className="hover:opacity-70 transition-opacity relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-8 text-center">
            <Link to="/shop" className="text-2xl font-serif uppercase tracking-widest">Shop</Link>
            <Link to="/collections" className="text-2xl font-serif uppercase tracking-widest">Collections</Link>
            <Link to="/about" className="text-2xl font-serif uppercase tracking-widest">About</Link>
            <Link to="/journal" className="text-2xl font-serif uppercase tracking-widest">Journal</Link>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-serif tracking-widest mb-6 uppercase">VELMORA</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Direct-to-consumer fine jewelry crafted with intention and the highest quality materials. Designed for the modern woman who appreciates quiet luxury.
            </p>
            <div className="flex gap-4 mt-8">
              <Instagram size={20} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Facebook size={20} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Twitter size={20} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="serif-uppercase mb-6">Shop</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="hover:text-foreground transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="serif-uppercase mb-6">Help</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><button className="hover:text-foreground transition-colors">Shipping & Returns</button></li>
              <li><button className="hover:text-foreground transition-colors">Care Guide</button></li>
              <li><button className="hover:text-foreground transition-colors">Sizing Chart</button></li>
              <li><button className="hover:text-foreground transition-colors">Contact Us</button></li>
              <li><button className="hover:text-foreground transition-colors">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h3 className="serif-uppercase mb-6">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-foreground transition-colors">Journal</Link></li>
              <li><button className="hover:text-foreground transition-colors">Wholesale</button></li>
              <li><button className="hover:text-foreground transition-colors">Terms of Service</button></li>
              <li><button className="hover:text-foreground transition-colors">Privacy Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 grayscale opacity-60">
             {/* Payment Icons Placeholder */}
             <div className="w-10 h-6 bg-muted-foreground/20 rounded"></div>
             <div className="w-10 h-6 bg-muted-foreground/20 rounded"></div>
             <div className="w-10 h-6 bg-muted-foreground/20 rounded"></div>
             <div className="w-10 h-6 bg-muted-foreground/20 rounded"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
