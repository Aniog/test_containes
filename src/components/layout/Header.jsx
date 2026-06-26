import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Applications", href: "#applications" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-slate-50">
            ARTITECT
          </span>
          <span className="text-xl font-light tracking-widest text-cyan-400">
            MACHINERY
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+18001234567"
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400"
          >
            <Phone className="w-4 h-4" />
            1-800-123-4567
          </a>
          <Button asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 w-full" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>
                Get a Quote
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
