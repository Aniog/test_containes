import { Link } from "react-router-dom"
import { Instagram, Mail } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import { useEffect, useRef } from "react"
import strkImgConfig from "@/strk-img-config.json"

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", to: "/shop" },
      { label: "Earrings",    to: "/shop?category=earrings" },
      { label: "Necklaces",   to: "/shop?category=necklaces" },
      { label: "Huggies",     to: "/shop?category=huggies" },
      { label: "Gift Sets",   to: "/shop?collection=heirloom" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "/about" },
      { label: "Care Guide",         to: "/about" },
      { label: "Size Guide",         to: "/about" },
      { label: "Contact",            to: "/about" },
      { label: "FAQ",                to: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story",  to: "/about" },
      { label: "Journal",    to: "/journal" },
      { label: "Sustainability", to: "/about" },
      { label: "Press",      to: "/journal" },
    ],
  },
]

export default function Footer() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <footer
      ref={containerRef}
      className="bg-espresso text-cream/85 mt-24 sm:mt-32"
    >
      <div className="container-editorial py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Logo + brand */}
          <div className="lg:col-span-4">
            <div className="font-serif tracking-[0.32em] text-[22px] font-medium text-cream">
              VELMORA
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-cream/65 max-w-sm">
              Demi-fine jewelry, made by hand. 18K gold plated, hypoallergenic,
              designed in our studio and made to last.
            </p>
            <div className="mt-7 flex items-center gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-cream/70 hover:text-gold-200 transition-colors"
              >
                <Instagram className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </a>
              <a
                href="mailto:hello@velmora.co"
                aria-label="Email us"
                className="text-cream/70 hover:text-gold-200 transition-colors"
              >
                <Mail className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-[11px] uppercase tracking-wider-3 font-medium text-cream/60">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-[14px] text-cream/85 hover:text-gold-200 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Promise */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-wider-3 font-medium text-cream/60">
              Our Promise
            </h4>
            <ul className="mt-5 space-y-3 text-[14px] text-cream/85">
              <li>Hypoallergenic</li>
              <li>18K Gold Plated</li>
              <li>30-Day Returns</li>
              <li>Free Worldwide Shipping</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 hairline" style={{ background: "linear-gradient(90deg, transparent, rgba(247,240,225,0.16) 20%, rgba(247,240,225,0.16) 80%, transparent)" }} />

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-[12px] text-cream/55">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons — represented as small typographic marks */}
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider-2 text-cream/55">
            <span className="px-2 py-1 border border-cream/15 rounded-sm">Visa</span>
            <span className="px-2 py-1 border border-cream/15 rounded-sm">Mastercard</span>
            <span className="px-2 py-1 border border-cream/15 rounded-sm">Amex</span>
            <span className="px-2 py-1 border border-cream/15 rounded-sm">Apple Pay</span>
            <span className="px-2 py-1 border border-cream/15 rounded-sm">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
