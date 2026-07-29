import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900">SSourcing<span className="text-blue-600">China</span></span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors",
                location.pathname === item.href ? "text-blue-600" : "text-slate-900 hover:text-blue-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4 lg:items-center">
          <div className="flex items-center text-sm text-slate-600 mr-4">
            <Phone className="h-4 w-4 mr-1" />
            <span>+86 123 4567 890</span>
          </div>
          <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-semibold",
                  location.pathname === item.href ? "bg-slate-50 text-blue-600" : "text-slate-900 hover:bg-slate-50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-slate-100 pt-4 mt-4">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
