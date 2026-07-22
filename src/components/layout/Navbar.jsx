import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, Search, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
]

export function Navbar({ onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, setIsOpen } = useCart()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const solid = scrolled || pathname !== "/"

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        solid ? "border-b border-line bg-ivory/95 shadow-[0_1px_24px_rgba(38,32,26,0.05)] backdrop-blur-md" : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container grid h-16 grid-cols-[auto_1fr_auto] items-center md:h-20">
        <div className="flex items-center gap-1">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className={cn(
                  "-ml-2 flex size-10 items-center justify-center rounded-full transition-colors md:hidden",
                  solid ? "text-ink hover:bg-ink/5" : "text-ivory hover:bg-ivory/10"
                )}
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] max-w-sm">
              <SheetTitle className="px-6 pt-7">
                <span className="font-serif text-2xl font-medium uppercase tracking-[0.3em] text-ink">Velmora</span>
              </SheetTitle>
              <nav className="mt-8 flex flex-col">
                {[{ to: "/", label: "Home" }, ...NAV_LINKS].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-line px-6 py-4 font-serif text-xl font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-cream hover:text-bronze"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto px-6 pb-8 pt-10">
                <p className="text-xs leading-relaxed text-ink-soft">
                  Demi-fine jewelry in 18K gold plate. Free worldwide shipping & 30-day returns.
                </p>
              </div>
            </SheetContent>
          </Sheet>

          <Link
            to="/"
            className={cn(
              "font-serif text-xl font-medium uppercase tracking-[0.32em] transition-colors md:text-2xl",
              solid ? "text-ink" : "text-ivory"
            )}
          >
            Velmora
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-[11px] font-medium uppercase tracking-[0.22em] transition-colors",
                  solid ? "text-ink hover:text-bronze" : "text-ivory/90 hover:text-ivory",
                  isActive && "text-bronze"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            aria-label="Search"
            onClick={onSearchOpen}
            className={cn(
              "flex size-10 items-center justify-center rounded-full transition-colors",
              solid ? "text-ink hover:bg-ink/5" : "text-ivory hover:bg-ivory/10"
            )}
          >
            <Search className="size-[18px]" />
          </button>
          <button
            type="button"
            aria-label="Open bag"
            onClick={() => setIsOpen(true)}
            className={cn(
              "relative flex size-10 items-center justify-center rounded-full transition-colors",
              solid ? "text-ink hover:bg-ink/5" : "text-ivory hover:bg-ivory/10"
            )}
          >
            <ShoppingBag className="size-[18px]" />
            {count > 0 && (
              <span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-bronze text-[9px] font-semibold text-ivory">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
