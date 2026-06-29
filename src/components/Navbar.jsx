import { useEffect, useState, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart } from '@/hooks/useCart'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { setIsOpen, count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setSearchOpen(false)
    setMobileOpen(false)
  }, [location])

  const submitSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
      setQuery('')
      setSearchOpen(false)
    }
  }

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#story' },
    { label: 'Journal', to: '/#journal' },
  ]

  const isHome = location.pathname === '/'
  const glass = scrolled || !isHome

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        glass
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="font-heading text-2xl md:text-3xl uppercase tracking-[0.22em]"
          >
            Velmora
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`text-xs uppercase tracking-brand hover:text-primary transition-colors ${
                    glass ? 'text-foreground' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={`p-1 transition-colors ${glass ? 'text-foreground' : 'text-white'}`}
            >
              <Search size={20} />
            </button>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open cart"
              className={`relative p-1 transition-colors ${glass ? 'text-foreground' : 'text-white'}`}
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full">
                  {count}
                </span>
              )}
            </button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button
                  aria-label="Open menu"
                  className={`p-1 ${glass ? 'text-foreground' : 'text-white'}`}
                >
                  <Menu size={22} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background w-[280px]">
                <div className="flex flex-col gap-6 pt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="font-heading text-2xl uppercase tracking-brand hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>

      {searchOpen && (
        <div className="absolute inset-x-0 top-0 bg-background border-b border-border h-16 md:h-20 flex items-center px-4 sm:px-6 lg:px-8 animate-in slide-in-from-top-2">
          <form onSubmit={submitSearch} className="max-w-2xl mx-auto w-full flex items-center gap-3">
            <Search size={18} className="text-muted-foreground" />
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jewelry..."
              className="flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0"
            />
            <Button type="submit" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Search
            </Button>
            <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
              <X size={20} className="text-muted-foreground" />
            </button>
          </form>
        </div>
      )}
    </header>
  )
}
