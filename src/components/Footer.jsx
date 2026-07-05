import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Sets", to: "/shop" },
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
    <footer className="bg-espresso-950 text-cream">
      <div className="mx-auto max-w-8xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="font-serif text-3xl tracking-ultra">VELMORA</p>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-cream/70">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made for everyday luxury.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/70 transition-colors hover:text-gold-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/70 transition-colors hover:text-gold-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-cream/70 transition-colors hover:text-gold-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-[11px] uppercase tracking-widest text-gold-300">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment + legal */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 md:flex-row">
          <p className="font-sans text-[11px] uppercase tracking-widest text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE"].map((p) => (
              <span
                key={p}
                className="rounded border border-cream/20 px-2.5 py-1 font-sans text-[9px] uppercase tracking-widest text-cream/60"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex gap-5 font-sans text-[11px] uppercase tracking-widest text-cream/50">
            <a href="#" className="transition-colors hover:text-cream">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-cream">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
