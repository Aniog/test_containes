import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-900 tracking-tight">SSourcing<span className="text-sky-600">China</span></span>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-sky-600'
                      : 'text-slate-600 hover:text-blue-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4 flex items-center">
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-700 cursor-pointer transition-colors">
                <Globe className="h-4 w-4 mr-1" />
                EN
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
              <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>

            {/* Mobile menu */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="px-2 text-slate-600">
                    <span className="sr-only">Open menu</span>
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navigation.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium px-4 py-2 ${
                          location.pathname === link.href
                            ? 'text-sky-600 bg-slate-50 rounded-md'
                            : 'text-slate-900 hover:text-sky-600'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4 px-4">
                       <Button asChild className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                        <Link to="/contact" onClick={() => setIsOpen(false)}>Get a Free Quote</Link>
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}