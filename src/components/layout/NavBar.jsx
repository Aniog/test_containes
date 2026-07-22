import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function NavBar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const overHero = location.pathname === '/' && !scrolled

  const handleHashLink = (event, to) => {
    if (!to.includes('#')) return
    event.preventDefault()
    const [pathname, hash] = to.split('#')
    if (location.pathname !== pathname) {
      navigate(to)
      setMobileOpen(false)
      return
    }
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', to)
    setMobileOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  const navText = overHero ? 'text-velmora-ivory' : 'text-velmora-espresso'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${overHero ? 'bg-transparent' : 'border-b border-velmora-mist/80 bg-velmora-ivory/95 shadow-sm backdrop-blur-xl'}`}>
      <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
        <button type="button" className={`lg:hidden ${navText}`} onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>

        <Link to="/" className={`font-serif text-3xl font-semibold tracking-[0.18em] transition ${navText}`} aria-label="Velmora home">
          VELMORA
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} onClick={(event) => handleHashLink(event, link.to)} className={`text-xs font-bold uppercase tracking-[0.24em] transition hover:text-velmora-gold ${navText}`}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className={`flex items-center gap-4 ${navText}`}>
          <button type="button" className="hidden transition hover:text-velmora-gold sm:block" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative transition hover:text-velmora-gold" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-gold px-1 text-[10px] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-50 bg-velmora-espresso/40 backdrop-blur-sm transition lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'}`}>
        <div className={`h-full w-80 max-w-[85vw] bg-velmora-ivory p-6 text-velmora-espresso shadow-drawer transition duration-500 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between">
            <span className="font-serif text-3xl font-semibold tracking-[0.18em]">VELMORA</span>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="rounded-full border border-velmora-mist p-2">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-12 flex flex-col gap-6">
            {links.map((link) => (
              <Link key={link.label} to={link.to} onClick={(event) => handleHashLink(event, link.to)} className="border-b border-velmora-mist pb-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-espresso">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
