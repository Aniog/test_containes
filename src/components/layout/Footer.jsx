import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Instagram, Send } from "lucide-react"
import { toast } from "sonner"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings", to: "/shop?category=earrings" },
      { label: "Necklaces", to: "/shop?category=necklaces" },
      { label: "Huggies", to: "/shop?category=huggies" },
      { label: "Gift Sets", to: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact Us", to: "/about" },
      { label: "Shipping", to: "/about" },
      { label: "Returns & Exchanges", to: "/about" },
      { label: "Care Guide", to: "/about" },
      { label: "FAQs", to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Press", to: "/about" },
      { label: "Careers", to: "/about" },
    ],
  },
]

const payments = [
  { id: "visa", label: "Visa" },
  { id: "master", label: "Mastercard" },
  { id: "amex", label: "American Express" },
  { id: "paypal", label: "PayPal" },
  { id: "apple", label: "Apple Pay" },
  { id: "shop", label: "Shop Pay" },
]

function PaymentBadge({ label }) {
  return (
    <div className="flex h-7 min-w-[44px] items-center justify-center rounded-sm border border-bone/15 bg-bone/5 px-2 text-[10px] font-medium uppercase tracking-[0.16em] text-bone/80">
      {label}
    </div>
  )
}

export default function Footer() {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.")
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setEmail("")
      toast.success("Welcome — your 10% code is on its way.")
    }, 600)
  }

  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-editorial px-6 py-20 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-[0.32em]">
              VELMORA
            </Link>
            <p className="mt-5 max-w-[280px] font-serif text-lg leading-relaxed text-bone/75">
              Demi-fine jewelry, made to be worn and re-worn.
            </p>
            <form onSubmit={onSubmit} className="mt-8 max-w-[360px]">
              <label htmlFor="footer-email" className="block text-[10px] uppercase tracking-[0.24em] text-bone/55">
                Join the list · 10% off
              </label>
              <div className="mt-3 flex border-b border-bone/20 focus-within:border-champagne">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-transparent py-3 text-sm text-bone placeholder:text-bone/40 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-2 px-3 text-[11px] font-medium uppercase tracking-[0.22em] text-bone transition-opacity duration-300 hover:opacity-80 disabled:opacity-50"
                >
                  {submitting ? "Sending" : "Subscribe"}
                  <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </form>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone transition-colors duration-300 hover:border-champagne hover:text-champagne"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone transition-colors duration-300 hover:border-champagne hover:text-champagne"
                aria-label="Pinterest"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12.5c0-2.5 1.5-5 4-5 2.5 0 3.5 2 3.5 3.5 0 2-1 3.5-2.5 3.5-1 0-1.5-.5-1.5-1.5 0-1 1-2.5 1-3.5" />
                  <path d="M10 18l1-5" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone transition-colors duration-300 hover:border-champagne hover:text-champagne"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 16a4 4 0 1 0 4-4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {columns.map((col) => (
                <div key={col.title}>
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.24em] text-bone/55">
                    {col.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-sm text-bone/80 transition-colors duration-300 hover:text-champagne"
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
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-bone/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bone/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry · All rights reserved
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {payments.map((p) => (
              <PaymentBadge key={p.id} label={p.label} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
