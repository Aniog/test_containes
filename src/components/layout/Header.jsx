import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Globe, MessageCircle } from "lucide-react"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { COMPANY, NAV_LINKS } from "@/data/site"

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow ${
        scrolled ? "shadow-sm border-b border-line" : "border-b border-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-[#0B2545] text-white text-xs">
        <Container>
          <div className="flex items-center justify-between h-9">
            <div className="flex items-center gap-4 text-white/85">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                English
              </span>
              <span className="text-white/30">|</span>
              <span>{COMPANY.hours}</span>
            </div>
            <div className="flex items-center gap-4 text-white/85">
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-white transition-colors"
              >
                {COMPANY.email}
              </a>
              <span className="text-white/30">|</span>
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, "")}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp: {COMPANY.whatsapp}
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-md bg-[#0B2545] flex items-center justify-center">
              <span className="text-white font-extrabold text-sm tracking-wide">
                SS
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-base md:text-lg font-bold text-[#0B2545]">
                {COMPANY.name}
              </div>
              <div className="text-[10px] md:text-xs text-ink-muted tracking-wide uppercase">
                China Sourcing Agent
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `nav-link text-sm font-semibold ${
                    isActive
                      ? "text-[#0B2545] active"
                      : "text-ink-subtle hover:text-[#0B2545]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button as={Link} to="/contact" variant="primary" size="md">
              Get a Free Quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <Container>
            <div className="py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `py-2.5 px-2 text-sm font-semibold rounded-md ${
                      isActive
                        ? "text-[#0B2545] bg-[#EDF1F7]"
                        : "text-ink-subtle hover:bg-[#F4F6F9]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-3 mt-2 border-t border-line">
                <Button
                  as={Link}
                  to="/contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

export default Header
