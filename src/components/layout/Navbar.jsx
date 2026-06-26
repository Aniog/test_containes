import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Container, Button } from "@/components/ui"
import { navLinks } from "@/data/content"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-cloud/90 text-ink shadow-sm backdrop-blur-md"
          : "bg-transparent text-white",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Logo className={scrolled ? "text-accent-dark" : "text-accent"} />
          <span className="text-lg font-extrabold tracking-tight">
            ARTITECT<span className="text-accent"> MACHINERY</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button as="a" href="#contact" size="sm">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-cloud text-ink lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium hover:bg-mist"
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href="#contact"
              size="sm"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}

function Logo({ className }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 26 L16 6 L28 26" />
      <path d="M9 26 L16 14 L23 26" />
      <path d="M4 26 H28" />
    </svg>
  )
}

export default Navbar
