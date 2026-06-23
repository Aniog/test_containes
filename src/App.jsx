import { BrowserRouter, Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';

// Placeholder Pages
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Products from './pages/Products';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-[#c2182b]">SSourcing</span>
              <span className="text-xl font-semibold tracking-tight text-slate-900 hidden sm:inline-block">China</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link to="/services" className="transition-colors hover:text-[#c2182b] text-slate-600">Services</Link>
              <Link to="/how-it-works" className="transition-colors hover:text-[#c2182b] text-slate-600">How It Works</Link>
              <Link to="/products" className="transition-colors hover:text-[#c2182b] text-slate-600">Products We Source</Link>
              <Link to="/case-studies" className="transition-colors hover:text-[#c2182b] text-slate-600">Case Studies</Link>
              <Link to="/blog" className="transition-colors hover:text-[#c2182b] text-slate-600">Blog</Link>
            </nav>
            <div className="hidden md:flex items-center">
               <Link to="/contact">
                  <Button className="bg-[#c2182b] hover:bg-[#a01423] text-white">Get a Free Quote</Button>
               </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-sm font-medium hover:text-[#c2182b]" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/services" className="text-sm font-medium hover:text-[#c2182b]" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/how-it-works" className="text-sm font-medium hover:text-[#c2182b]" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
              <Link to="/products" className="text-sm font-medium hover:text-[#c2182b]" onClick={() => setIsMenuOpen(false)}>Products</Link>
              <Link to="/case-studies" className="text-sm font-medium hover:text-[#c2182b]" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
              <Link to="/blog" className="text-sm font-medium hover:text-[#c2182b]" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                 <Button className="w-full bg-[#c2182b] hover:bg-[#a01423] text-white mt-2">Get a Free Quote</Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 w-full relative">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white text-lg mb-4">SSourcing China</h3>
            <p className="text-sm text-slate-400">
              Your professional China sourcing agent. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Factory Audits</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Quality Control</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Shenzhen, Guangdong, China</li>
              <li>info@ssourcingchina.com</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 text-center flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
                <Link to="#" className="hover:text-white">Privacy Policy</Link>
                <Link to="#" className="hover:text-white">Terms of Service</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="products" element={<Products />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
