import React from 'react';
import { useImageLoader } from '@/lib/useImageLoader';

const Layout = ({ children }) => {
  const containerRef = useImageLoader();

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-slate-900">ARTITECT</span>
            <span className="text-2xl font-light tracking-widest text-slate-500">MACHINERY</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-blue-600 transition-colors">HOME</a>
            <a href="#products" className="hover:text-blue-600 transition-colors">PRODUCTS</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">ABOUT</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">CONTACT</a>
          </nav>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
            GET QUOTE
          </button>
        </div>
      </header>
      <main className="pt-20">
        {children}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white">ARTITECT</span>
              <span className="text-2xl font-light tracking-widest text-slate-500">MACHINERY</span>
            </div>
            <p className="max-w-sm text-slate-400 leading-relaxed">
              Precision engineering for high-performance sheet metal folding solutions. 
              Pioneering the industry with elegant design and user-centric technology.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">PRODUCTS</h4>
            <ul className="space-y-3 text-sm">
              <li>Double Folding Machine</li>
              <li>Sheet Metal Folder</li>
              <li>Metal Folding Machine</li>
              <li>Double Folder Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">CONTACT</h4>
            <ul className="space-y-3 text-sm">
              <li>support@artitect.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Precision Way, Engineering District</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-xs flex justify-between">
          <p>© 2024 ARTITECT MACHINERY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
