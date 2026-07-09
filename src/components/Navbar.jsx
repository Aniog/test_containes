import { useState } from 'react'
import { Microscope, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Discover', href: '#discover' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Showcase', href: '#showcase' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-surface-light/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Microscope className="w-6 h-6 text-primary" />
            <span className="font-heading text-lg font-bold text-text-primary">MicroCosmos</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-primary transition-colors bg-transparent border-none p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-t border-surface-light">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-text-secondary hover:text-primary transition-colors duration-300 text-sm font-medium py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
