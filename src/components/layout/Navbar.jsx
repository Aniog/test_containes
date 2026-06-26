import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/Button"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Products We Source", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[#1A4B8C] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <div>
              <span className="font-bold text-[#1A1F2E] text-lg leading-none block">SSourcing</span>
              <span className="text-[#1A4B8C] text-xs font-semibold tracking-wide">CHINA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-[#1A4B8C] bg-[#EEF2F7]"
                    : "text-[#3D4A5C] hover:text-[#1A4B8C] hover:bg-[#EEF2F7]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="cta" size="sm">Get a Free Quote</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-[#3D4A5C] hover:text-[#1A4B8C] hover:bg-[#EEF2F7]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#D8E0EA] shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-[#1A4B8C] bg-[#EEF2F7]"
                    : "text-[#3D4A5C] hover:text-[#1A4B8C] hover:bg-[#EEF2F7]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#D8E0EA]">
              <Link to="/contact">
                <Button variant="cta" size="md" className="w-full">Get a Free Sourcing Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
