import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { itemCount, toggleDrawer } = useCart()
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location])

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [searchOpen])

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome || mobileOpen
    ? 'text-charcoal'
    : 'text-cream'

  const searchResults = searchQuery.trim().length > 1
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const handleSearchSelect = (productId) => {
    setSearchOpen(false)
    setSearchQuery('')
    navigate(`/product/${productId}`)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-container mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textColor} transition-colors`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl font-semibold tracking-wider ${textColor} transition-colors`}>
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-xs font-sans font-medium uppercase tracking-nav ${textColor} hover:text-gold transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`${textColor} hover:text-gold transition-colors duration-200`}
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative ${textColor} hover:text-gold transition-colors duration-200`}
              onClick={toggleDrawer}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-cream border-t border-stone-200 px-5 py-6">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm font-sans font-medium uppercase tracking-nav text-charcoal hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-cream">
          <div className="max-w-2xl mx-auto px-5 pt-6">
            <div className="flex items-center gap-4 mb-8">
              <Search className="w-5 h-5 text-stone-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jewelry..."
                className="flex-1 font-sans text-lg text-charcoal bg-transparent placeholder:text-stone-300 focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => { setSearchOpen(false); setSearchQuery('') }}
                className="text-stone-400 hover:text-charcoal transition-colors"
                aria-label="Close search"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {searchQuery.trim().length > 1 && (
              <div>
                {searchResults.length > 0 ? (
                  <div className="space-y-1">
                    <p className="font-sans text-xs uppercase tracking-nav text-stone-400 mb-4">
                      {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                    </p>
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleSearchSelect(product.id)}
                        className="w-full flex items-center gap-4 py-3 px-2 hover:bg-stone-50 transition-colors text-left"
                      >
                        <div className="w-12 h-14 bg-gradient-to-br from-gold-light/30 to-gold/10 rounded-sm flex-shrink-0" />
                        <div>
                          <p className="font-serif text-sm font-medium uppercase tracking-product text-charcoal">
                            {product.name}
                          </p>
                          <p className="font-sans text-xs text-stone-500">{product.description} — ${product.price}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="font-sans text-stone-500">No results for "{searchQuery}"</p>
                    <p className="font-sans text-xs text-stone-400 mt-2">Try searching for earrings, necklaces, or huggies</p>
                  </div>
                )}
              </div>
            )}

            {searchQuery.trim().length <= 1 && (
              <div>
                <p className="font-sans text-xs uppercase tracking-nav text-stone-400 mb-4">Popular searches</p>
                <div className="flex flex-wrap gap-2">
                  {['Earrings', 'Necklaces', 'Huggies', 'Gold', 'Gift Set'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-4 py-2 border border-stone-200 font-sans text-xs text-stone-500 hover:border-gold hover:text-gold transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
