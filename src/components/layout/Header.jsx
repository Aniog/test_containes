import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

function NavItems({ onClick, isLight }) {
  return navLinks.map((link) => (
    <NavLink key={link.label} to={link.to} onClick={onClick} className={`text-xs font-semibold uppercase tracking-luxury transition hover:text-velmora-gold ${isLight ? 'text-velmora-porcelain' : 'text-velmora-espresso'}`}>{link.label}</NavLink>
  ))
}

export default function Header() {
  const { totals, setIsCartOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const transparent = location.pathname === '/' && !scrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${transparent ? 'bg-transparent text-velmora-porcelain' : 'border-b border-velmora-line bg-velmora-ivory/95 text-velmora-espresso shadow-soft backdrop-blur-xl'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <button className="lg:hidden" type="button" aria-label="Open menu" onClick={() => setMobileOpen(true)}><Menu className="h-6 w-6" /></button>
        <Link to="/" className="font-serif text-2xl font-semibold tracking-luxury lg:text-3xl">VELMORA</Link>
        <nav className="hidden items-center gap-9 lg:flex"><NavItems isLight={transparent} /></nav>
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Search" className="transition hover:text-velmora-gold"><Search className="h-5 w-5" /></button>
          <button type="button" aria-label="Open cart" onClick={() => setIsCartOpen(true)} className="relative transition hover:text-velmora-gold"><ShoppingBag className="h-5 w-5" />{totals.count > 0 && <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-velmora-gold text-[11px] font-bold text-velmora-espresso">{totals.count}</span>}</button>
        </div>
      </div>
      {mobileOpen && <div className="fixed inset-0 z-50 bg-velmora-espresso text-velmora-porcelain lg:hidden"><div className="flex h-16 items-center justify-between px-4"><span className="font-serif text-2xl tracking-luxury">VELMORA</span><button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}><X className="h-6 w-6" /></button></div><nav className="flex flex-col gap-7 px-8 py-10"><NavItems onClick={() => setMobileOpen(false)} isLight /></nav></div>}
    </header>
  )
}
