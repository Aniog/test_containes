import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  shop: [
    { label: "All Jewelry", href: "/shop" },
    { label: "Earrings", href: "/shop?category=Earrings" },
    { label: "Necklaces", href: "/shop?category=Necklaces" },
    { label: "Huggies", href: "/shop?category=Huggies" },
    { label: "Gift Sets", href: "/shop?category=Sets" },
  ],
  help: [
    { label: "Shipping & Returns", href: "#" },
    { label: "Care Guide", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Sustainability", href: "#" },
    { label: "Press", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-medium uppercase tracking-ultra">
              Velmora
            </Link>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-taupe">
              Demi-fine jewelry designed to be treasured. Crafted with care, made for everyday luxury.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-taupe hover:text-champagne transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-taupe hover:text-champagne transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-taupe hover:text-champagne transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wide text-white">Shop</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-taupe hover:text-champagne transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wide text-white">Help</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-taupe hover:text-champagne transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wide text-white">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-taupe hover:text-champagne transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="h-6 w-10 rounded bg-white/10" aria-label="Visa" />
            <span className="h-6 w-10 rounded bg-white/10" aria-label="Mastercard" />
            <span className="h-6 w-10 rounded bg-white/10" aria-label="Amex" />
            <span className="h-6 w-10 rounded bg-white/10" aria-label="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  )
}
