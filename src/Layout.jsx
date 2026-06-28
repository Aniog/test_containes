import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-slate-900 border-2 border-slate-900 px-2 py-1 uppercase max-sm:text-lg">ARTITECT</span>
              <span className="text-sm font-semibold tracking-widest text-slate-500 uppercase mt-1 hidden sm:inline-block">Machinery</span>
            </Link>
          </div>
          
          {/* Mobile Menu Toggle could go here */}

          <div className="hidden md:flex flex-1 justify-end pr-4">
             <NavigationMenu>
              <NavigationMenuList className="gap-2 sm:gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/" className="!text-slate-600 hover:!text-slate-900 uppercase font-medium text-sm tracking-wider">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/products" className="!text-slate-600 hover:!text-slate-900 uppercase font-medium text-sm tracking-wider">Products</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                     <Link to="/contact" className="!text-slate-600 hover:!text-slate-900 uppercase font-medium text-sm tracking-wider">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t bg-slate-900 py-12 text-slate-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 md:grid-cols-3">
          <div>
             <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold tracking-tight text-white border-2 border-white px-2 py-1 uppercase">ARTITECT</span>
             </div>
             <p className="text-sm">Precision engineered metal folding machinery for professionals.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">Double Folding Machines</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Sheet Metal Folders</Link></li>
            </ul>
          </div>
          <div>
             <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Company</h4>
             <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
