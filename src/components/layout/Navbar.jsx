import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Products', 
      href: '#products',
      dropdown: [
        { name: 'Double Folding Machine', href: '#products' },
        { name: 'Sheet Metal Folder', href: '#products' },
        { name: 'Metal Folding Machine', href: '#products' },
      ]
    },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isScrolled ? 'bg-brand-primary' : 'bg-white/20'
            }`}>
              <span className={`text-xl font-bold ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>A</span>
            </div>
            <div>
              <h1 className={`text-xl font-display font-bold tracking-wide ${
                isScrolled ? 'text-brand-primary' : 'text-white'
              }`}>
                ARTITECT
              </h1>
              <p className={`text-xs tracking-widest uppercase ${
                isScrolled ? 'text-brand-accent' : 'text-white/80'
              }`}>
                MACHINERY
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    isScrolled 
                      ? 'text-brand-primary hover:text-brand-accent' 
                      : 'text-white hover:text-brand-gold'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 animate-fade-in">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-brand-primary hover:bg-brand-light hover:text-brand-accent transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                isScrolled
                  ? 'bg-brand-accent text-white hover:bg-red-600'
                  : 'bg-white text-brand-primary hover:bg-brand-gold hover:text-white'
              }`}
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? 'text-brand-primary' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-brand-primary hover:bg-brand-light rounded-md font-medium"
                >
                  {link.name}
                </a>
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-accent"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 bg-brand-accent text-white rounded-md font-medium text-center"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
