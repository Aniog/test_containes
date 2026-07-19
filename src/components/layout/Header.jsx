import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const links = [
  { label: 'Shop', to: '/shop' }, { label: 'Collections', to: '/shop' }, { label: 'About', to: '/#story' }, { label: 'Journal', to: '/#journal' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, setIsCartOpen } = useCart()
  const location = useLocation()
  const solid = scrolled || location.pathname !== '/' || mobileOpen
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${solid ? 'border-b border-velmora-sand/80 bg-velmora-ivory/95 text-velmora-ink shadow-sm backdrop-blur' : 'text-velmora-cream'}`}>
      <nav className="velmora-container flex h-20 items-center justify-between gap-5">
        <Link to="/" className="font-display text-3xl font-semibold tracking-nav" onClick={() => setMobileOpen(false)}>VELMORA</Link>
        <div className="hidden items-center gap-9 lg:flex">{links.map((link) => <Link key={link.label} to={link.to} className="text-xs font-extrabold uppercase tracking-nav transition hover:text-velmora-gold">{link.label}</Link>)}</div>
        <div className="flex items-center gap-3">
          <button type="button" aria-label="Search" className="rounded-full p-2 transition hover:bg-velmora-gold/15 hover:text-velmora-gold"><Search className="h-5 w-5" /></button>
          <button type="button" aria-label="Open cart" onClick={() => setIsCartOpen(true)} className="relative rounded-full p-2 transition hover:bg-velmora-gold/15 hover:text-velmora-gold"><ShoppingBag className="h-5 w-5" />{itemCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-gold px-1 text-xs font-bold text-velmora-ink">{itemCount}</span>}</button>
          <button type="button" aria-label="Toggle menu" onClick={() => setMobileOpen((open) => !open)} className="rounded-full p-2 transition hover:bg-velmora-gold/15 lg:hidden">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </nav>
      {mobileOpen && <div className="border-t border-velmora-sand bg-velmora-ivory px-5 pb-6 pt-2 text-velmora-ink lg:hidden">{links.map((link) => <Link key={link.label} to={link.to} onClick={() => setMobileOpen(false)} className="block border-b border-velmora-sand/70 py-4 text-sm font-extrabold uppercase tracking-nav">{link.label}</Link>)}</div>}
    </header>
  )
}
