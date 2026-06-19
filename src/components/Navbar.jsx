import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
]

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const showSolid = scrolled || !isHome

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        showSolid
          ? 'bg-[#F8F4EE] shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm tracking-[0.08em] uppercase font-sans transition-colors duration-300',
                  showSolid ? 'text-[#2D2A24] hover:text-[#C69C6D]' : 'text-white/90 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'font-serif text-2xl md:text-3xl font-bold tracking-[0.12em] transition-colors duration-300',
              showSolid ? 'text-[#2D2A24]' : 'text-white'
            )}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={cn(
                'p-2 transition-colors duration-300',
                showSolid ? 'text-[#2D2A24] hover:text-[#C69C6D]' : 'text-white/90 hover:text-white'
              )}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className={cn(
                'p-2 relative transition-colors duration-300',
                showSolid ? 'text-[#2D2A24] hover:text-[#C69C6D]' : 'text-white/90 hover:text-white'
              )}
              onClick={onCartOpen}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#C69C6D] text-white text-[10px] font-medium rounded-full w-4.5 h-4.5 flex items-center justify-center leading-none" style={{ width: 18, height: 18 }}>
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-[#F8F4EE]',
          menuOpen ? 'max-h-80 border-t border-[#E5DDD3]' : 'max-h-0'
        )}
      >
        <div className="px-5 py-6 space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-sm tracking-[0.08em] uppercase text-[#2D2A24] font-sans"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}