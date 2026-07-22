import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Search, Instagram, Send } from "lucide-react"

export default function MobileMenu({ open, onClose, links }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div
      className={[
        "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={[
          "absolute inset-y-0 right-0 w-[85%] max-w-sm bg-cream border-l border-hairline shadow-2xl flex flex-col transition-transform duration-500 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
          <span className="font-serif text-[22px] tracking-wider3 text-ink font-semibold">VELMORA</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 -mr-2 text-ink hover:text-gold"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="px-6 py-8 flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {links.map((link, i) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={onClose}
                  className="block py-4 border-b border-hairline font-serif text-[28px] text-ink hover:text-gold transition-colors"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <label className="eyebrow text-muted">Search</label>
            <div className="mt-3 flex items-center border-b border-ink py-2.5 gap-2">
              <Search size={16} strokeWidth={1.5} className="text-muted" />
              <input
                type="text"
                placeholder="Search jewelry..."
                className="flex-1 bg-transparent text-ink placeholder:text-muted-soft text-sm focus:outline-none"
              />
            </div>
          </div>
        </nav>

        <div className="px-6 py-6 border-t border-hairline">
          <p className="eyebrow text-muted mb-3">Follow Us</p>
          <div className="flex items-center gap-4 text-ink">
            <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram size={18} strokeWidth={1.5} /></a>
            <a href="#" aria-label="Telegram" className="hover:text-gold"><Send size={18} strokeWidth={1.5} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
