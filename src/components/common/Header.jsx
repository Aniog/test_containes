import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useStore } from '@/context/StoreContext'

const navigation = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const Header = () => {
  const { itemCount, mobileNavOpen, setCartOpen, setMobileNavOpen, setSearchOpen } = useStore()
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleAnchorNavigation = (targetId) => {
    if (location.pathname !== '/') {
      navigate(`/#${targetId}`)
      return
    }

    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-velmora-ink/95 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 text-velmora-ivory md:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex rounded-full border border-white/10 p-2 text-velmora-ivory md:hidden"
          aria-label="Open mobile navigation"
          onClick={() => setMobileNavOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="font-serif text-3xl tracking-[0.28em] text-velmora-ivory md:min-w-[10rem]">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            if (item.to.startsWith('/#')) {
              return (
                <button
                  key={item.label}
                  type="button"
                  className="text-sm uppercase tracking-[0.24em] text-velmora-mist transition-colors duration-300 hover:text-velmora-ivory"
                  onClick={() => handleAnchorNavigation(item.to.replace('/#', ''))}
                >
                  {item.label}
                </button>
              )
            }

            return (
              <NavLink
                key={item.label}
                to={item.to}
                className="text-sm uppercase tracking-[0.24em] text-velmora-mist transition-colors duration-300 hover:text-velmora-ivory"
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="flex items-center justify-end gap-2 md:min-w-[10rem]">
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-velmora-ivory transition-colors duration-300 hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Open search"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative rounded-full border border-white/10 p-2 text-velmora-ivory transition-colors duration-300 hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Open cart drawer"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ink">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden ${mobileNavOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMobileNavOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-[86vw] max-w-sm flex-col bg-velmora-panel px-6 py-5 text-velmora-ivory transition-transform duration-300 md:hidden ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-serif text-3xl tracking-[0.26em]">VELMORA</span>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2"
            aria-label="Close mobile navigation"
            onClick={() => setMobileNavOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="grid gap-5">
          {navigation.map((item) => {
            if (item.to.startsWith('/#')) {
              return (
                <button
                  key={item.label}
                  type="button"
                  className="border-b border-white/10 pb-4 text-left text-sm uppercase tracking-[0.28em] text-velmora-mist transition-colors duration-300 hover:text-velmora-ivory"
                  onClick={() => {
                    setMobileNavOpen(false)
                    handleAnchorNavigation(item.to.replace('/#', ''))
                  }}
                >
                  {item.label}
                </button>
              )
            }

            return (
              <NavLink
                key={item.label}
                to={item.to}
                className="border-b border-white/10 pb-4 text-sm uppercase tracking-[0.28em] text-velmora-mist transition-colors duration-300 hover:text-velmora-ivory"
                onClick={() => setMobileNavOpen(false)}
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>
      </aside>
    </header>
  )
}

export default Header
