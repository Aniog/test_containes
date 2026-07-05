import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', view: 'shop' },
  { label: 'Collections', view: 'home', anchor: 'collections' },
  { label: 'About', view: 'home', anchor: 'story' },
  { label: 'Journal', view: 'home', anchor: 'journal' },
]

const Header = ({ currentView, onNavigate, onOpenCart, cartCount }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const overHero = currentView === 'home' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (link) => {
    onNavigate(link.view, link.anchor)
    setMenuOpen(false)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${overHero ? 'bg-transparent text-velmora-ivory' : 'border-b border-velmora-sand/70 bg-velmora-ivory/95 text-velmora-ink shadow-[0_10px_30px_rgba(36,25,22,0.06)] backdrop-blur-xl'}`}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button type="button" className="lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open navigation">
          <Menu className="h-6 w-6" />
        </button>

        <button type="button" onClick={() => onNavigate('home')} className="font-serif text-2xl font-semibold tracking-[0.22em] text-current sm:text-3xl">
          VELMORA
        </button>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <button key={link.label} type="button" onClick={() => navigate(link)} className="text-xs font-semibold uppercase tracking-[0.22em] text-current/90 transition hover:text-velmora-gold">
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" className="rounded-full p-2 text-current transition hover:text-velmora-gold" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onOpenCart} className="relative rounded-full p-2 text-current transition hover:text-velmora-gold" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-50 bg-velmora-ink/40 transition-opacity duration-300 lg:hidden ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <aside className={`h-full w-80 max-w-[86vw] bg-velmora-ivory p-6 text-velmora-ink shadow-velvet transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="mb-10 flex items-center justify-between">
            <span className="font-serif text-2xl tracking-[0.22em]">VELMORA</span>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="grid gap-5" aria-label="Mobile navigation">
            {links.map((link) => (
              <button key={link.label} type="button" onClick={() => navigate(link)} className="border-b border-velmora-sand/70 pb-4 text-left font-serif text-3xl text-velmora-ink transition hover:text-velmora-gold">
                {link.label}
              </button>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  )
}

export default Header
