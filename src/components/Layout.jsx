import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Products", path: "/products" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 text-sm py-2 hidden md:block">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+8613800138000" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +86 138 0013 8000
              </a>
            </div>
            <span>Based in China · Serving buyers worldwide</span>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled ? "bg-white/95 backdrop-blur shadow-sm border-b border-slate-200" : "bg-white border-b border-slate-100"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-slate-900">
                SSourcing<span className="text-blue-800">China</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-800 ${
                    location.pathname === link.path ? "text-blue-800" : "text-slate-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link to="/contact">
                <Button>Get a Free Sourcing Quote</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-slate-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100">
            <Container>
              <nav className="flex flex-col py-4 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`py-2 text-base font-medium ${
                      location.pathname === link.path ? "text-blue-800" : "text-slate-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link to="/contact" className="block">
                    <Button className="w-full">Get a Free Sourcing Quote</Button>
                  </Link>
                </div>
              </nav>
            </Container>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold text-white">
                  SSourcing<span className="text-blue-400">China</span>
                </span>
              </Link>
              <p className="text-slate-400 leading-relaxed">
                A China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, and manage quality and shipping.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Production Follow-Up</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">Address:</span>
                  <span>Room 1805, Block A, Fortune Plaza, Shenzhen, China</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">Email:</span>
                  <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">Phone:</span>
                  <a href="tel:+8613800138000" className="hover:text-white transition-colors">+86 138 0013 8000</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
