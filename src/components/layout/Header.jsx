import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const NAV = [
  { id: "products", label: "Products" },
  { id: "why", label: "Why ARTITECT" },
  { id: "industries", label: "Industries" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const goTo = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-soft/95 backdrop-blur border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          onClick={goTo("top")}
          className="flex items-baseline gap-2 group"
          aria-label="ARTITECT MACHINERY — back to top"
        >
          <span className="font-display text-2xl md:text-[28px] leading-none text-ink tracking-tight">
            ARTITECT
          </span>
          <span className="hidden sm:inline text-[11px] uppercase tracking-eyebrow text-slate group-hover:text-brass-deep transition-colors">
            Machinery
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={goTo(item.id)}
              className="text-[13px] uppercase tracking-eyebrow text-slate hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={goTo("contact")}
            className="inline-flex items-center justify-center px-6 py-3 bg-ink text-cream-soft text-[12px] uppercase tracking-cta font-medium hover:bg-ink-soft transition-colors"
          >
            Request a quote
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream-soft border-t border-line">
          <nav className="max-w-container mx-auto px-6 md:px-10 py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={goTo(item.id)}
                className="py-3 text-[13px] uppercase tracking-eyebrow text-slate border-b border-line/60 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={goTo("contact")}
              className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-ink text-cream-soft text-[12px] uppercase tracking-cta font-medium"
            >
              Request a quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
