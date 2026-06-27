import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = ['Shop', 'Collections', 'About', 'Journal']

const Header = ({ currentView, onNavigate, cartCount, onCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const overHero = currentView === 'home' && !isScrolled

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (target) => {
    setMobileOpen(false)
    onNavigate(target)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b transition-all duration-500 ${
        overHero
          ? 'border-ivory/15 bg-transparent text-ivory'
          : 'border-champagne/25 bg-ivory/92 text-espresso shadow-[0_10px_35px_rgba(35,26,21,0.06)] backdrop-blur-xl'
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <button
          type="button"
          onClick={() => navigate('home')}
          className="font-serif text-2xl tracking-[0.22em] transition hover:opacity-75 sm:text-3xl"
          aria-label="Go to Velmora homepage"
        >
          VELMORA
        </button>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => navigate(link === 'Shop' ? 'shop' : 'home')}
              className="text-xs font-semibold uppercase tracking-[0.28em] transition hover:text-goldDeep"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="hidden rounded-full p-2 transition hover:bg-champagne/15 sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative rounded-full p-2 transition hover:bg-champagne/15"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-espresso">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full p-2 transition hover:bg-champagne/15 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-champagne/20 bg-ivory text-espresso transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-96' : 'max-h-0 border-transparent'
        }`}
      >
        <div className="grid gap-1 px-5 py-5">
          {links.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => navigate(link === 'Shop' ? 'shop' : 'home')}
              className="border-b border-champagne/20 py-4 text-left text-xs font-semibold uppercase tracking-[0.28em] text-espresso"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
