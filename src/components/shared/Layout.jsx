import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Globe } from "lucide-react"
import { NAV_LINKS, PRIMARY_CTA, SITE } from "@/data/site"
import { cn } from "@/lib/utils"
import Button from "@/components/ui/Button"

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
        <Globe className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-extrabold tracking-tight text-slate-900">
          SSourcing <span className="text-accent-dark">China</span>
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
          Sourcing Agent
        </span>
      </span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled
          ? "border-slate-200 bg-white/95 backdrop-blur"
          : "border-transparent bg-white"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to={PRIMARY_CTA.to} size="sm">
            {PRIMARY_CTA.label}
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2.5 text-base font-medium",
                    isActive
                      ? "bg-slate-50 text-primary"
                      : "text-slate-700 hover:bg-slate-50"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to={PRIMARY_CTA.to} className="mt-2 w-full">
              {PRIMARY_CTA.label}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                <Globe className="h-5 w-5" />
              </span>
              <span className="text-base font-extrabold tracking-tight text-white">
                SSourcing China
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping global buyers find reliable
              suppliers, verify factories, inspect quality, and ship with
              confidence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="text-slate-400">Supplier Sourcing</li>
              <li className="text-slate-400">Factory Verification</li>
              <li className="text-slate-400">Quality Inspection</li>
              <li className="text-slate-400">Production Follow-up</li>
              <li className="text-slate-400">Shipping & Logistics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>{SITE.email}</li>
              <li>{SITE.phone}</li>
              <li>{SITE.address}</li>
              <li>{SITE.hours}</li>
            </ul>
            <Button to={PRIMARY_CTA.to} variant="primary" size="sm" className="mt-5">
              {PRIMARY_CTA.label}
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Sourcing agent services based in Shenzhen, China.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
