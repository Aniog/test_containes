import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=Earrings" },
      { label: "Necklaces", to: "/shop?category=Necklaces" },
      { label: "Huggies", to: "/shop?category=Huggies" },
      { label: "Sets", to: "/shop?category=Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/about" },
      { label: "Returns", to: "/about" },
      { label: "Materials & Care", to: "/about" },
      { label: "Contact", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Careers", to: "/about" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl tracking-[0.3em]">VELMORA</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made to be worn every day.
            </p>
            <div className="mt-6 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="text-ivory/70 transition-colors hover:text-gold"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] uppercase tracking-widest2 text-gold">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 md:flex-row">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-ivory/50">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"].map((p) => (
              <span
                key={p}
                className="rounded-sm border border-ivory/20 px-2 py-1 text-[9px] tracking-widest2"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
