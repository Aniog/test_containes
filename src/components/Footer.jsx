import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const shopLinks = [
  { to: "/shop/earrings", label: "Earrings" },
  { to: "/shop/necklaces", label: "Necklaces" },
  { to: "/shop/huggies", label: "Huggies" },
  { to: "/shop/sets", label: "Gift Sets" },
]

const helpLinks = [
  { to: "/shipping", label: "Shipping & Returns" },
  { to: "/care", label: "Jewelry Care" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
]

const companyLinks = [
  { to: "/about", label: "Our Story" },
  { to: "/journal", label: "Journal" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/wholesale", label: "Wholesale" },
]

export function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Demi-fine jewelry designed to be treasured. Thoughtfully crafted in 18k gold plate for
              everyday elegance.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-white/70 hover:text-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/70 hover:text-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/70 hover:text-gold">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-white/50">
              Shop
            </h4>
            <ul className="mt-4 space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/80 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-white/50">
              Help
            </h4>
            <ul className="mt-4 space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/80 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-white/50">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/80 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/50">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
