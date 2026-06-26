import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-navy md:text-2xl">
              ARTITECT <span className="text-gold">MACHINERY</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+18001234567"
              className="flex items-center gap-2 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4 text-gold" />
              +1 800 123 4567
            </a>
            <Button asChild variant="accent" className="px-5 py-2">
              <a href="#contact">Get a quote</a>
            </Button>
          </div>

          <button
            className="rounded-lg p-2 text-navy md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      <div
        className={cn(
          "overflow-hidden bg-white transition-all duration-300 md:hidden",
          open ? "max-h-96 border-b border-slate-100" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="accent" className="mt-2">
            <a href="#contact" onClick={() => setOpen(false)}>
              Get a quote
            </a>
          </Button>
        </Container>
      </div>
    </header>
  )
}
