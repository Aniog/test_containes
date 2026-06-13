import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, Anchor } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Products We Source", href: "/products" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Anchor className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">SSourcing<span className="text-blue-600">China</span></span>
            </Link>
          </div>
          <div className="hidden ml-10 space-x-8 md:flex items-center">
            {navigation.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              <Link to="/contact">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-slate-600 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="flex flex-wrap md:hidden py-4 border-t">
            {navigation.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="w-full px-4 mt-4">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
