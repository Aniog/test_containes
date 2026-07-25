import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Shop', page: 'shop' },
  { label: 'Collections', anchor: 'collections' },
  { label: 'About', anchor: 'about' },
  { label: 'Journal', anchor: 'journal' },
]

export default function Header({ currentPage, navigate, cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isSolid = scrolled || currentPage !== 'home' || menuOpen
  const textClass = isSolid ? 'text-velmora-espresso' : 'text-velmora-pearl'

  const handleNav = (item) => {
    setMenuOpen(false)
    if (item.page) {
      navigate(item.page)
      return
    }
    navigate('home')
    window.requestAnimationFrame(() => {
      document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${
        isSolid
          ? 'border-b border-velmora-champagne/80 bg-velmora-ivory/95 shadow-soft backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open navigation menu"
        >
          {menuOpen ? <X className={`h-6 w-6 ${textClass}`} /> : <Menu className={`h-6 w-6 ${textClass}`} />}
        </button>

        <button
          type="button"
          onClick={() => navigate('home')}
          className={`font-serifDisplay text-3xl font-semibold tracking-[0.18em] ${textClass}`}
        >
          VELMORA
        </button>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNav(item)}
              className={`text-xs font-bold uppercase tracking-[0.26em] transition duration-300 hover:text-velmora-gold ${textClass}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button type="button" aria-label="Search" className={`transition hover:text-velmora-gold ${textClass}`}>
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={onCartOpen}
            className={`relative transition hover:text-velmora-gold ${textClass}`}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-pearl">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-velmora-champagne bg-velmora-ivory px-5 py-5 text-velmora-espresso lg:hidden">
          <nav className="grid gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNav(item)}
                className="border-b border-velmora-champagne/70 pb-4 text-left text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
