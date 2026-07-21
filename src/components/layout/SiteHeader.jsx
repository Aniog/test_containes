import { useEffect, useMemo, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, Search, ShoppingBag, X } from "lucide-react"

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
]

const SiteHeader = ({ cartCount, onOpenCart }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.search])

  const isHome = location.pathname === "/"
  const isTransparent = isHome && !isScrolled && !menuOpen

  const shellClassName = useMemo(
    () =>
      isTransparent
        ? "border-transparent bg-transparent text-ivory"
        : "border-white/10 bg-velvet/92 text-ivory shadow-soft backdrop-blur-xl",
    [isTransparent],
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${shellClassName}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="rounded-full border border-white/10 p-3 text-current transition hover:border-gold hover:text-gold"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="font-serif text-2xl tracking-[0.4em] text-current sm:text-3xl">
          VELMORA
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.href ||
              (link.href !== "/" && location.pathname.startsWith(link.href))

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm uppercase tracking-[0.24em] transition ${
                  isActive ? "text-gold" : "text-ivory/82 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="rounded-full border border-white/10 p-3 text-current transition hover:border-gold hover:text-gold"
            aria-label="Search the collection"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            className="relative rounded-full border border-white/10 p-3 text-current transition hover:border-gold hover:text-gold"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-velvet">
                {cartCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-velvet px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm uppercase tracking-[0.24em] text-ivory/82 transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
