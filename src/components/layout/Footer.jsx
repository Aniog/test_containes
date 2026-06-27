import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks = {
  Shop: ["Earrings", "Necklaces", "Huggies", "Gift Sets", "New Arrivals"],
  Help: ["Shipping", "Returns", "Care Guide", "Size Guide", "Contact"],
  Company: ["Our Story", "Sustainability", "Press", "Careers", "Wholesale"],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl uppercase tracking-[0.22em] text-charcoal">
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-warm-gray">
              Demi-fine jewelry for everyday luxury. Designed to be worn, loved, and treasured for years to come.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-warm-gray transition-colors hover:text-charcoal" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-warm-gray transition-colors hover:text-charcoal" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-warm-gray transition-colors hover:text-charcoal" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">
                {title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-warm-gray transition-colors hover:text-charcoal"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">
              We Accept
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((method) => (
                <span
                  key={method}
                  className="rounded border border-border bg-cream px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-warm-gray"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-warm-gray md:flex-row">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-charcoal">Privacy Policy</Link>
            <Link to="/" className="hover:text-charcoal">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
