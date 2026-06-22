import { Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader
} from "@/components/ui/sheet";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      {/* Top Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white border-slate-200">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900 group flex items-center gap-1">
              <span className="text-blue-600 group-hover:text-blue-700 transition-colors">S</span>
              <span className="text-slate-900">Sourcing</span>
              <span className="text-blue-600 block w-1.5 h-1.5 rounded-full mb-1 group-hover:bg-amber-400 group-hover:animate-pulse"></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
            <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Services</Link>
            <Link to="/how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How It Works</Link>
            <Link to="/products" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Products</Link>
            <Link to="/case-studies" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Case Studies</Link>
            <Link to="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Blog</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700 rounded-full px-6">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="block px-2 py-1 text-lg font-medium">Home</Link>
                  <Link to="/services" className="block px-2 py-1 text-lg font-medium">Services</Link>
                  <Link to="/how-it-works" className="block px-2 py-1 text-lg font-medium">How It Works</Link>
                  <Link to="/products" className="block px-2 py-1 text-lg font-medium">Products</Link>
                  <Link to="/case-studies" className="block px-2 py-1 text-lg font-medium">Case Studies</Link>
                  <Link to="/blog" className="block px-2 py-1 text-lg font-medium">Blog</Link>
                  <Link to="/contact" className="block px-2 py-1 text-lg font-medium">Contact Us</Link>
                  <div className="mt-4">
                     <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link to="/contact">Get a Free Quote</Link>
                     </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-[100vw] overflow-x-hidden">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="md:col-span-1">
              <Link to="/" className="text-2xl font-bold tracking-tight text-white group flex items-center gap-1 mb-4">
                <span className="text-blue-500">S</span>
                <span>Sourcing</span>
              </Link>
              <p className="text-sm mb-6 text-slate-400 leading-relaxed">
                Your trusted partner for sourcing, factory verification, quality control, and shipping from China to global markets.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2 inline-block">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
                <li><Link to="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2 inline-block">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog & Insights</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2 inline-block">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">📍</span>
                  <span>Guangzhou, China</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✉️</span>
                  <a href="mailto:hello@ssourcingchina.com" className="hover:text-white transition-colors">hello@ssourcingchina.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center bg-slate-900">
            <p className="text-sm">© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}