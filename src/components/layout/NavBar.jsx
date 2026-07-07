import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const desktopLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/#collections' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
]

export default function NavBar() {
  const location = useLocation()
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled
  const shellClassName = isTransparent
    ? 'border-transparent bg-transparent text-porcelain'
    : 'border-mist/70 bg-porcelain/95 text-espresso shadow-sm shadow-obsidian/5 backdrop-blur-xl'

  return (
    <header className={`sticky top-0 z-50 border-b transition duration-300 ${shellClassName}`}>
      <div className="container-shell">
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          <Link to="/" className="font-serif text-3xl tracking-[0.35em]">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {desktopLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-[0.28em] transition duration-300 hover:text-champagne"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${
                isTransparent
                  ? 'border-porcelain/25 bg-porcelain/10 text-porcelain hover:bg-porcelain/20'
                  : 'border-mist bg-porcelain text-espresso hover:bg-sand'
              }`}
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label="Open cart"
              className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${
                isTransparent
                  ? 'border-porcelain/25 bg-porcelain/10 text-porcelain hover:bg-porcelain/20'
                  : 'border-mist bg-porcelain text-espresso hover:bg-sand'
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-semibold text-obsidian">
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        <nav className="flex gap-5 overflow-x-auto pb-4 md:hidden">
          {desktopLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-xs uppercase tracking-[0.3em] opacity-90 transition duration-300 hover:text-champagne"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
