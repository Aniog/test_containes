import { Link } from "react-router-dom"
import { Instagram, Facebook, Youtube } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const SHOP_LINKS = [
  { to: "/shop?category=earrings", label: "Earrings" },
  { to: "/shop?category=necklaces", label: "Necklaces" },
  { to: "/shop?category=huggies", label: "Huggies" },
  { to: "/shop?category=sets", label: "Gift Sets" },
  { to: "/shop", label: "All Jewelry" },
]

const HELP_LINKS = [
  { to: "/help/shipping", label: "Shipping" },
  { to: "/help/returns", label: "Returns & Exchanges" },
  { to: "/help/care", label: "Materials & Care" },
  { to: "/help/size", label: "Size Guide" },
  { to: "/contact", label: "Contact Us" },
]

const COMPANY_LINKS = [
  { to: "/about", label: "Our Story" },
  { to: "/journal", label: "Journal" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/press", label: "Press" },
  { to: "/careers", label: "Careers" },
]

function Column({ title, links }) {
  return (
    <div>
      <h3 className="eyebrow mb-5 text-champagne">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="text-sm text-paper/70 transition-colors duration-300 hover:text-paper"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error")
      toast.error("Please enter a valid email address.")
      return
    }
    setStatus("success")
    toast.success("Welcome to Velmora. Check your inbox for 10% off.")
    setEmail("")
  }

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-8xl px-5 pb-10 pt-20 md:px-8 md:pb-16 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-3xl tracking-[0.32em] md:text-4xl">
              VELMORA
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">
              Demi-fine gold jewelry, made for everyday ritual. Designed in
              small batches, plated in 18K gold, finished by hand.
            </p>
            <form onSubmit={handleSubmit} className="mt-10 max-w-sm">
              <label
                htmlFor="footer-newsletter"
                className="eyebrow text-champagne"
              >
                The Letter
              </label>
              <div className="mt-4 flex border-b border-paper/20 pb-2">
                <input
                  id="footer-newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-transparent text-sm text-paper placeholder:text-paper/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-[11px] uppercase tracking-[0.28em] text-paper/80 transition-opacity duration-300 hover:opacity-70"
                >
                  Subscribe
                </button>
              </div>
              {status === "success" && (
                <p className="mt-3 text-xs text-champagne">
                  Welcome — your code is on its way.
                </p>
              )}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
            <Column title="Shop" links={SHOP_LINKS} />
            <Column title="Help" links={HELP_LINKS} />
            <Column title="Company" links={COMPANY_LINKS} />
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-xs text-paper/50">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-paper/60">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="transition-opacity duration-300 hover:opacity-100 hover:text-paper"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.25} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="transition-opacity duration-300 hover:opacity-100 hover:text-paper"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.25} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="transition-opacity duration-300 hover:opacity-100 hover:text-paper"
              >
                <Youtube className="h-4 w-4" strokeWidth={1.25} />
              </a>
            </div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-paper/40">
              <span>Visa</span>
              <span aria-hidden>·</span>
              <span>Mastercard</span>
              <span aria-hidden>·</span>
              <span>Amex</span>
              <span aria-hidden>·</span>
              <span>PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
