import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+8612345678900" className="flex items-center gap-2 text-sm hover:text-primary-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+86 123 4567 8900</span>
            </a>
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-sm hover:text-primary-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@ssourcingchina.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Trusted by 500+ Global Buyers</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white shadow-medium'
            : 'bg-white/95 backdrop-blur-sm'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">SSourcing</span>
                <span className="text-xs text-muted-foreground -mt-1">China</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container-custom py-4">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'text-base font-medium py-2 transition-colors hover:text-primary',
                      location.pathname === item.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="btn-primary text-center mt-4"
                >
                  Get Free Quote
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
