import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/data/content"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink/95 backdrop-blur shadow-lg shadow-ink/20"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-white">
            <span className="text-lg font-extrabold">A</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Artitect
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
              Machinery
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => handleNav("#contact")}>
            Request a Quote
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink border-t border-white/10">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="py-3 text-left text-sm font-medium text-white/80 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="mt-2"
              onClick={() => handleNav("#contact")}
            >
              Request a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
