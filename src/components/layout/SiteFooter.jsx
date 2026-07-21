import { Facebook, Instagram, Gem } from "lucide-react"
import { Link } from "react-router-dom"

const footerLinks = {
  Shop: [
    { label: "All Jewelry", href: "/shop" },
    { label: "Earrings", href: "/shop?category=Earrings" },
    { label: "Necklaces", href: "/shop?category=Necklaces" },
    { label: "Huggies", href: "/shop?category=Huggies" },
  ],
  Help: [
    { label: "Shipping & Returns", href: "/shop" },
    { label: "Gift Packaging", href: "/about" },
    { label: "Care Guide", href: "/journal" },
    { label: "Contact", href: "/about" },
  ],
  Company: [
    { label: "Our Story", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Collections", href: "/collections" },
    { label: "Terms", href: "/about" },
  ],
}

const payments = ["VISA", "MASTERCARD", "AMEX", "PAYPAL"]

const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-velvet text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-3xl tracking-[0.35em] text-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-ivory/70">
              Editorial demi-fine jewelry designed for gifting, self-adornment, and the kinds of everyday rituals worth treasuring.
            </p>
            <div className="mt-8 flex items-center gap-3 text-ivory/80">
              <a
                href="https://instagram.com"
                className="rounded-full border border-white/10 p-3 transition hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://pinterest.com"
                className="rounded-full border border-white/10 p-3 transition hover:border-gold hover:text-gold"
                aria-label="Velmora editorial board"
              >
                <Gem className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                className="rounded-full border border-white/10 p-3 transition hover:border-gold hover:text-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs uppercase tracking-[0.3em] text-gold">{heading}</h3>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-ivory/72 transition hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {payments.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-ivory/70"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.24em] text-ivory/55">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
