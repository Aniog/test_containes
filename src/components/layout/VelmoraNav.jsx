import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function VelmoraNav({ cartCount, onCartOpen }) {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || mobileOpen || pathname !== '/'

  return (
    <header className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${solid ? 'border-b border-velmora-sand/80 bg-velmora-ivory/95 text-velmora-espresso shadow-[0_12px_40px_rgba(31,23,18,0.08)] backdrop-blur-xl' : 'bg-transparent text-velmora-ivory'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
        <Link to="/" className="font-serif text-3xl tracking-[0.24em] text-current">VELMORA</Link>
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => <NavLink key={link.label} to={link.to} className="text-xs font-semibold uppercase tracking-[0.28em] text-current/85 transition hover:text-velmora-champagne">{link.label}</NavLink>)}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="hidden rounded-full p-2 text-current transition hover:bg-current/10 md:inline-flex" aria-label="Search"><Search className="h-5 w-5" /></button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 text-current transition hover:bg-current/10" aria-label="Open cart"><ShoppingBag className="h-5 w-5" />{cartCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-velmora-bronze text-[0.65rem] font-bold text-velmora-ivory">{cartCount}</span>}</button>
          <button type="button" onClick={() => setMobileOpen((value) => !value)} className="rounded-full p-2 text-current transition hover:bg-current/10 md:hidden" aria-label="Toggle navigation">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </nav>
      <div className={`overflow-hidden border-t border-velmora-sand/60 bg-velmora-ivory text-velmora-espresso transition-all duration-500 md:hidden ${mobileOpen ? 'max-h-80' : 'max-h-0 border-transparent'}`}>
        <div className="grid gap-1 px-5 py-5">{links.map((link) => <NavLink key={link.label} to={link.to} onClick={() => setMobileOpen(false)} className="border-b border-velmora-sand/60 py-4 text-sm font-semibold uppercase tracking-[0.26em] text-velmora-espresso">{link.label}</NavLink>)}</div>
      </div>
    </header>
  )
}
