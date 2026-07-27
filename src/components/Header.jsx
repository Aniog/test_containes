import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="bg-primary px-4 py-2 text-primary-foreground hidden md:block">
        <div className="container flex justify-between items-center text-sm font-medium">
          <div className="flex gap-6">
            <a href="tel:+86123456789" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} /> +86 123 456 789
            </a>
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} /> info@ssourcingchina.com
            </a>
          </div>
          <div>Trusted Partners in China Sourcing</div>
        </div>
      </div>
      
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary tracking-tight">
              SSourcing<span className="text-secondary">China</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-secondary",
                isActive(link.path) ? "text-secondary" : "text-primary/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="font-bold px-6 bg-primary hover:bg-primary/90">
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-4">
          <Link to="/contact">
            <Button size="sm" className="font-bold">Quote</Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-xl font-bold transition-colors hover:text-secondary",
                      isActive(link.path) ? "text-secondary" : "text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full text-lg font-bold py-6">
                    Contact Us
                  </Button>
                </Link>
                <div className="mt-auto pt-8 border-t space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Phone size={20} /> <span className="font-medium">+86 123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary">
                    <Mail size={20} /> <span className="font-medium">info@ssourcingchina.com</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
