import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals']
const helpLinks = ['Shipping', 'Returns', 'Care Guide', 'Size Guide', 'Contact']
const companyLinks = ['Our Story', 'Sustainability', 'Press', 'Careers']

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Demi-fine jewelry designed to be treasured. Crafted in 18K gold plate,
              made for everyday luxury.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {shopLinks.map((l) => (
                <li key={l}>
                  <Link to="/shop" className="transition-colors hover:text-foreground">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest">
              Help
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {helpLinks.map((l) => (
                <li key={l}>
                  <Link to="#" className="transition-colors hover:text-foreground">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {companyLinks.map((l) => (
                <li key={l}>
                  <Link to="#" className="transition-colors hover:text-foreground">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded border border-border px-2 py-1">Visa</span>
            <span className="rounded border border-border px-2 py-1">Mastercard</span>
            <span className="rounded border border-border px-2 py-1">Amex</span>
            <span className="rounded border border-border px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
