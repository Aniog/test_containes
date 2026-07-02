import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?category=Huggies' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHomeTop = location.pathname === '/' && !isScrolled

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const linkClass = ({ isActive }) =>
    `text-xs font-bold uppercase tracking-[0.22em] transition hover:text-velmora-bronze ${isActive ? 'text-velmora-bronze' : 'text-velmora-espresso'}`

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b transition duration-300 ${isHomeTop ? 'border-velmora-espresso/20 bg-transparent text-velmora-espresso' : 'border-velmora-line bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-xl'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10" aria-label="Main navigation">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.22em] text-current" aria-label="Velmora homepage">VELMORA</Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className={linkClass}>{link.label}</NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="hidden rounded-full p-2 transition hover:bg-velmora-gold/20 md:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 transition hover:bg-velmora-gold/20" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-xs font-extrabold text-velmora-espresso">{cartCount}</span>}
          </button>
          <button type="button" onClick={() => setMobileOpen((open) => !open)} className="rounded-full p-2 transition hover:bg-velmora-gold/20 md:hidden" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="border-t border-velmora-line bg-velmora-ivory px-5 py-5 text-velmora-espresso md:hidden">
          <div className="grid gap-4">
            {links.map((link) => <Link key={link.label} to={link.to} className="py-2 text-sm font-bold uppercase tracking-[0.24em] text-velmora-espresso">{link.label}</Link>)}
          </div>
        </div>
      )}
    </header>
  )
}
