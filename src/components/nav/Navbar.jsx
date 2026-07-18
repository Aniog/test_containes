import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { count } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [cartOpen])

  const isHomeHero = location.pathname === '/' && !scrolled

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHomeHero
            ? 'bg-transparent text-cream-50'
            : 'bg-cream-50/95 backdrop-blur-md text-velvet-800 shadow-[0_1px_0_rgba(44,37,32,0.06)]'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 h-16 md:h-20 max-w-[1440px] mx-auto">
          {/* Mobile menu */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase">
            <Link to="/shop" className="hover:text-warm-600 transition-colors">Shop</Link>
            <Link to="/shop?category=earrings" className="hover:text-warm-600 transition-colors">Earrings</Link>
            <Link to="/shop?category=necklaces" className="hover:text-warm-600 transition-colors">Necklaces</Link>
            <Link to="/shop?category=huggies" className="hover:text-warm-600 transition-colors">Huggies</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl font-serif italic tracking-wide transition-all duration-500 ${
              isHomeHero ? 'text-cream-50' : 'text-velvet-800'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <button
              className="p-2 hover:text-warm-600 transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:text-warm-600 transition-colors relative"
              onClick={() => setCartOpen(true)}
              aria-label={`Cart (${count})`}
            >
              <ShoppingBag className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[10px] font-sans font-semibold bg-warm-600 text-cream-50 rounded-full">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            searchOpen ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`border-t ${isHomeHero ? 'border-cream-50/20' : 'border-velvet-800/10'} px-6 lg:px-12 py-3 max-w-[1440px] mx-auto`}>
            <input
              type="text"
              placeholder="Search..."
              className={`w-full bg-transparent text-sm outline-none placeholder-current/40 ${
                isHomeHero ? 'text-cream-50' : 'text-velvet-800'
              }`}
              autoFocus={searchOpen}
            />
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-velvet-950/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-cream-50 transform transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col pt-24 px-8 gap-6">
          <Link to="/shop" className="text-velvet-800 text-lg font-serif tracking-wide uppercase" onClick={() => setMobileOpen(false)}>Shop All</Link>
          <Link to="/shop?category=earrings" className="text-velvet-800 text-lg font-serif tracking-wide uppercase" onClick={() => setMobileOpen(false)}>Earrings</Link>
          <Link to="/shop?category=necklaces" className="text-velvet-800 text-lg font-serif tracking-wide uppercase" onClick={() => setMobileOpen(false)}>Necklaces</Link>
          <Link to="/shop?category=huggies" className="text-velvet-800 text-lg font-serif tracking-wide uppercase" onClick={() => setMobileOpen(false)}>Huggies</Link>
          <Link to="/shop?category=sets" className="text-velvet-800 text-lg font-serif tracking-wide uppercase" onClick={() => setMobileOpen(false)}>Sets</Link>
          <hr className="hairline-divider" />
          <Link to="/about" className="text-velvet-600 text-sm font-sans tracking-wide uppercase" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/journal" className="text-velvet-600 text-sm font-sans tracking-wide uppercase" onClick={() => setMobileOpen(false)}>Journal</Link>
        </div>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
