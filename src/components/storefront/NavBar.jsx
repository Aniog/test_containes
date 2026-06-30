import { Link } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  ['Shop', '/shop'],
  ['Collections', '/shop?view=collections'],
  ['About', '/#story'],
  ['Journal', '/#journal'],
]

export default function NavBar({ cartCount, isScrolled, mobileOpen, setMobileOpen, onCartOpen }) {
  const transparent = !isScrolled
  const textTone = transparent ? 'text-ivory' : 'text-espresso'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${isScrolled ? 'border-b border-taupe/70 bg-ivory/95 shadow-sm backdrop-blur' : 'bg-transparent'}`}>
      <nav className={`mx-auto flex h-17 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 ${textTone}`} aria-label="Main navigation">
        <Link to="/" className={`font-serif text-2xl tracking-[0.28em] ${textTone}`} aria-label="Velmora home">VELMORA</Link>
        <div className="hidden items-center gap-9 md:flex">
          {links.map(([label, to]) => <Link key={label} to={to} className={`text-xs font-bold uppercase tracking-[0.22em] transition hover:text-champagne ${textTone}`}>{label}</Link>)}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className={`rounded-full bg-transparent p-2 transition hover:text-champagne focus:outline-none focus:ring-2 focus:ring-champagne ${textTone}`} aria-label="Search"><Search className="h-5 w-5" /></button>
          <button type="button" onClick={onCartOpen} className={`relative rounded-full bg-transparent p-2 transition hover:text-champagne focus:outline-none focus:ring-2 focus:ring-champagne ${textTone}`} aria-label={`Open cart with ${cartCount} items`}>
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[0.65rem] font-bold text-espresso">{cartCount}</span>}
          </button>
          <button type="button" className={`rounded-full bg-transparent p-2 md:hidden ${textTone}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="border-t border-taupe bg-ivory px-4 py-5 text-espresso md:hidden">
          <div className="grid gap-4">
            {links.map(([label, to]) => <Link key={label} to={to} className="text-sm font-bold uppercase tracking-[0.2em]">{label}</Link>)}
          </div>
        </div>
      )}
    </header>
  )
}
