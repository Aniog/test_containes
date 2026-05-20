import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Templates', href: '#templates' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F0F0F]/95 backdrop-blur-md shadow-lg shadow-emerald-900/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white font-extrabold text-xl tracking-tight">
            <span className="text-emerald-400">S</span>trikingly
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors px-4 py-2">
              Log In
            </a>
            <a href="#pricing" className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
              Get Started Free
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0F0F0F]/98 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white font-medium py-2 transition-colors">
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <a href="#" className="text-gray-300 hover:text-white font-medium py-2 transition-colors">Log In</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 py-3 rounded-full text-center transition-colors">
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
