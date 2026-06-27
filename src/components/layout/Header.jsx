import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', id: 'shop' },
  { label: 'Collections', id: 'collections' },
  { label: 'About', id: 'about' },
  { label: 'Journal', id: 'journal' },
]

export default function Header({ currentPage, onNavigate, onCartOpen, cartCount }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || currentPage !== 'home' || menuOpen

  const handleLink = (id) => {
    setMenuOpen(false)
    if (id === 'shop' || id === 'collections') {
      onNavigate('shop')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    onNavigate('home')
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${solid ? 'border-b border-sand bg-porcelain/95 text-noir shadow-sm backdrop-blur-xl' : 'text-ivory'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button type="button" className="lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <button
          type="button"
          onClick={() => {
            setMenuOpen(false)
            onNavigate('home')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-serif text-3xl font-bold tracking-[0.2em] transition hover:text-champagne lg:text-4xl"
          aria-label="Velmora home"
        >
          VELMORA
        </button>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleLink(link.id)}
              className="font-sans text-xs font-semibold uppercase tracking-[0.24em] transition hover:text-champagne"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button type="button" className="transition hover:text-champagne" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative transition hover:text-champagne" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-champagne px-1 font-sans text-[0.65rem] font-bold text-noir">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden border-t border-sand bg-porcelain text-noir transition-all duration-500 lg:hidden ${menuOpen ? 'max-h-80' : 'max-h-0 border-transparent'}`}>
        <nav className="grid gap-1 px-5 py-5" aria-label="Mobile navigation">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleLink(link.id)}
              className="border-b border-sand py-4 text-left font-sans text-sm font-semibold uppercase tracking-[0.24em] text-noir transition hover:text-champagne"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
