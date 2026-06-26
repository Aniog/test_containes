import { useState } from 'react'
import { Menu, X, Factory } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Factory className="w-8 h-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-primary tracking-tight leading-none">
                ARTITECT
              </span>
              <span className="text-xs font-semibold text-secondary tracking-widest leading-none mt-0.5">
                MACHINERY
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors duration-200"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-text-secondary hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-5 py-3 bg-primary text-white text-center text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
