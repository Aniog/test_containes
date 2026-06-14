import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/products', label: 'Products We Source' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-200 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="hidden md:inline">Trusted by buyers in 40+ countries</span>
            <a href="mailto:hello@ssourcingchina.com" className="hover:text-white transition-colors">hello@ssourcingchina.com</a>
          </div>
          <a href="/contact" className="font-medium hover:text-white transition-colors">Request a Quote →</a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-slate-900 flex items-center justify-center">
                <span className="text-white font-semibold text-xl tracking-tight">SS</span>
              </div>
              <div>
                <div className="font-semibold text-xl tracking-tight">SSourcing China</div>
                <div className="text-[10px] text-slate-500 -mt-1">CHINA SOURCING AGENT</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors hover:text-slate-900 ${isActive(link.href) ? 'text-slate-900' : 'text-slate-600'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-6 py-4 flex flex-col gap-3 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-1.5 ${isActive(link.href) ? 'text-slate-900' : 'text-slate-600'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-slate-900 text-white text-sm font-medium"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
          <div className="grid md:grid-cols-4 gap-x-8 gap-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                  <span className="text-white font-semibold">SS</span>
                </div>
                <span className="text-white font-semibold text-lg">SSourcing China</span>
              </div>
              <p className="text-sm leading-relaxed">
                Professional China sourcing agent helping international buyers find reliable suppliers, verify factories, and manage production with confidence.
              </p>
            </div>

            <div>
              <div className="text-white font-medium mb-4 text-sm tracking-wide">COMPANY</div>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block hover:text-white">About Us</Link>
                <Link to="/case-studies" className="block hover:text-white">Case Studies</Link>
                <Link to="/blog" className="block hover:text-white">Blog</Link>
                <Link to="/contact" className="block hover:text-white">Contact</Link>
              </div>
            </div>

            <div>
              <div className="text-white font-medium mb-4 text-sm tracking-wide">SERVICES</div>
              <div className="space-y-2 text-sm">
                <Link to="/services" className="block hover:text-white">Supplier Sourcing</Link>
                <Link to="/services" className="block hover:text-white">Factory Verification</Link>
                <Link to="/services" className="block hover:text-white">Quality Inspection</Link>
                <Link to="/services" className="block hover:text-white">Production Management</Link>
                <Link to="/services" className="block hover:text-white">Shipping Coordination</Link>
              </div>
            </div>

            <div>
              <div className="text-white font-medium mb-4 text-sm tracking-wide">CONTACT</div>
              <div className="space-y-2 text-sm">
                <a href="mailto:hello@ssourcingchina.com" className="block hover:text-white">hello@ssourcingchina.com</a>
                <a href="https://wa.me/861234567890" target="_blank" rel="noreferrer" className="block hover:text-white">+86 123 4567 890 (WhatsApp)</a>
                <div className="pt-2">Ningbo, Zhejiang, China</div>
                <div className="text-xs pt-4">Mon–Fri 8:30–18:00 (China Time)</div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
            <div>© {new Date().getFullYear()} SSourcing China. All rights reserved.</div>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Supplier Code of Conduct</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
