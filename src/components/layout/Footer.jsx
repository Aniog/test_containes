import { Link } from "react-router-dom"
import { InstagramIcon, PinterestIcon, TiktokIcon } from "../ui/Icons.jsx"

const columns = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=earrings-huggies", label: "Huggies" },
      { to: "/shop?category=sets", label: "Gift Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "#", label: "Shipping & Returns" },
      { to: "#", label: "Care Guide" },
      { to: "#", label: "Size Guide" },
      { to: "#", label: "Contact" },
      { to: "#", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "#", label: "Sustainability" },
      { to: "#", label: "Press" },
      { to: "#", label: "Careers" },
    ],
  },
]

const PaymentBadge = ({ children }) => (
  <span className="inline-flex items-center justify-center h-7 px-2.5 border border-ivory/15 text-[10px] tracking-eyebrow uppercase text-ivory/60 rounded-sm">
    {children}
  </span>
)

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16 pt-20 md:pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-[24px] tracking-[0.4em] text-ivory">
              VELMORA
            </Link>
            <p className="mt-5 text-[14px] leading-relaxed text-ivory/70 max-w-xs font-light">
              Demi-fine jewelry, hand-finished in small batches. Designed to be worn close,
              and kept longer.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-ivory transition-colors">
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ivory/70 hover:text-ivory transition-colors">
                <PinterestIcon className="h-[18px] w-[18px]" />
              </a>
              <a href="#" aria-label="TikTok" className="text-ivory/70 hover:text-ivory transition-colors">
                <TiktokIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[10px] tracking-eyebrow uppercase text-ivory/55 font-medium">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[13px] text-ivory/85 hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-eyebrow uppercase text-ivory/55 font-medium">
              Studio
            </h4>
            <p className="mt-5 text-[13px] text-ivory/85 leading-relaxed">
              245 W 29th St<br />
              New York, NY 10001<br />
              Mon–Sat, 11–7
            </p>
          </div>
        </div>

        <div className="hairline-dark mt-16" />

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[11px] text-ivory/55 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentBadge>Visa</PaymentBadge>
            <PaymentBadge>Mastercard</PaymentBadge>
            <PaymentBadge>Amex</PaymentBadge>
            <PaymentBadge>Apple Pay</PaymentBadge>
            <PaymentBadge>PayPal</PaymentBadge>
          </div>
          <div className="flex items-center gap-5 text-[11px] text-ivory/55">
            <a href="#" className="hover:text-ivory">Privacy</a>
            <a href="#" className="hover:text-ivory">Terms</a>
            <a href="#" className="hover:text-ivory">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
