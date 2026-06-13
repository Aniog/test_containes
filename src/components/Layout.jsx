import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Products We Source", href: "/products" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-primary-dark text-white text-sm py-2">
        <div className="section-container flex items-center justify-between">
          <span className="text-white/80 text-xs md:text-sm">
            China-based sourcing agent — serving global buyers since 2015
          </span>
          <a href="tel:+8618621001234" className="flex items-center gap-1.5 text-white/90 hover:text-white text-xs md:text-sm">
            <Phone className="w-3.5 h-3.5" />
            <span>+86 186 2100 1234</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="section-container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-primary">
              SSourcing
            </span>
            <span className="hidden sm:inline text-xl md:text-2xl font-light text-txt-muted">
              China
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors py-2 border-b-2",
                  location.pathname === item.href
                    ? "text-accent border-accent"
                    : "text-txt-secondary border-transparent hover:text-primary hover:border-primary/30"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-primary text-sm">
              Get a Free Sourcing Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-txt-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="section-container py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-accent bg-accent/5"
                      : "text-txt-secondary hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-3 text-center btn-primary text-sm"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary-dark text-white">
        <div className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                SSourcing <span className="font-light text-white/60">China</span>
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Your trusted China-based sourcing agent. We help global buyers find
                reliable suppliers, verify factories, and manage quality control.
              </p>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+86 186 2100 1234</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2.5 text-white/60 text-sm">
                <li>Supplier Sourcing</li>
                <li>Factory Verification</li>
                <li>Quality Inspection</li>
                <li>Production Monitoring</li>
                <li>Logistics & Shipping</li>
                <li>Product Sampling</li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2.5 text-white/60 text-sm">
                <li>Guangzhou, China</li>
                <li>Email: info@ssourcingchina.com</li>
                <li>Phone: +86 186 2100 1234</li>
              </ul>
              <div className="mt-6">
                <Link to="/contact" className="btn-primary text-sm inline-block">
                  Get a Free Sourcing Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/50 text-xs">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}