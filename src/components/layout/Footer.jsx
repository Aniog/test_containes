import { Link } from "react-router-dom"
import { Instagram, Facebook } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  shop: [
    { label: "All Jewelry", href: "/shop" },
    { label: "Earrings", href: "/shop?category=earrings" },
    { label: "Necklaces", href: "/shop?category=necklaces" },
    { label: "Huggies", href: "/shop?category=huggies" },
    { label: "Gift Sets", href: "/shop?category=sets" },
  ],
  help: [
    { label: "Contact Us", href: "#" },
    { label: "Shipping & Returns", href: "#" },
    { label: "Care Guide", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Track Order", href: "#" },
  ],
  company: [
    { label: "Our Story", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Journal", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-semibold uppercase tracking-[0.22em]">
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-velmora-stone">
              Demi-fine jewelry designed to be treasured. Crafted with care, made for everyday luxury.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-velmora-stone hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-velmora-stone hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-velmora-stone hover:text-white" aria-label="Pinterest">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.5 15.5c.5 1.5 1.5 2.5 3 2.5 2.5 0 4-2 4-5 0-2.5-2-4.5-5-4.5-3.5 0-5.5 2.5-5.5 5 0 1 .5 2 1 2.5" />
                  <path d="M12 18l-1-6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-velmora-gold">Shop</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-velmora-stone hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-velmora-gold">Help</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-velmora-stone hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-velmora-gold">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-velmora-stone hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-velmora-charcoal" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-velmora-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-velmora-taupe">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
