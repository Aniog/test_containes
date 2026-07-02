import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const surfaceClass = isScrolled || isMenuOpen
    ? 'border-velmora-espresso/10 bg-velmora-ivory/95 text-velmora-espresso shadow-[0_12px_40px_rgba(32,24,20,0.08)] backdrop-blur-xl'
    : 'border-white/10 bg-transparent text-velmora-ivory'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${surfaceClass}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="font-serif text-3xl font-semibold tracking-[0.22em] text-current">
          VELMORA
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-xs font-semibold uppercase tracking-[0.24em] text-current/85 transition hover:text-velmora-champagne">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" aria-label="Search" className="rounded-full p-3 text-current transition hover:bg-current/10">
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button type="button" aria-label="Open cart" onClick={onCartOpen} className="relative rounded-full p-3 text-current transition hover:bg-current/10">
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
          <button type="button" aria-label="Toggle menu" onClick={() => setIsMenuOpen((open) => !open)} className="rounded-full p-3 text-current transition hover:bg-current/10 md:hidden">
            {isMenuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-velmora-espresso/10 bg-velmora-ivory px-4 py-6 text-velmora-espresso md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-champagne">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
