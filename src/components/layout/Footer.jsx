import { Mail, Phone, MapPin } from "lucide-react"
import { navLinks, products } from "@/data/content"

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-steel text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-white">
                <span className="text-lg font-extrabold">A</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-bold uppercase tracking-[0.18em]">
                  Artitect
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
                  Machinery
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Precision sheet metal folding machines engineered for fabricators
              worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-white/75 transition-colors hover:text-accent-soft"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Products
            </h4>
            <ul className="mt-4 space-y-3">
              {products.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => handleNav("#products")}
                    className="text-left text-sm text-white/75 transition-colors hover:text-accent-soft"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/75">
                <Mail className="h-4 w-4 text-accent-soft" />
                sales@artitectmachinery.com
              </li>
              <li className="flex items-center gap-3 text-sm text-white/75">
                <Phone className="h-4 w-4 text-accent-soft" />
                +1 (800) 555-0142
              </li>
              <li className="flex items-start gap-3 text-sm text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-soft" />
                1440 Industrial Blvd, Detroit, MI
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Double folding machines · Sheet metal folders · Metal folding machines
          </p>
        </div>
      </div>
    </footer>
  )
}
