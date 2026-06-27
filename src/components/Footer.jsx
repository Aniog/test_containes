import { Link } from "react-router-dom"
import { Camera, Heart, MessageCircle } from "lucide-react"

const socialLinks = [
  { name: "Instagram", icon: Camera, href: "#" },
  { name: "Pinterest", icon: Heart, href: "#" },
  { name: "Twitter", icon: MessageCircle, href: "#" },
]

const footerColumns = [
  {
    title: "Shop",
    links: [
      { name: "All Jewelry", path: "/shop" },
      { name: "Earrings", path: "/shop?category=earrings" },
      { name: "Necklaces", path: "/shop?category=necklaces" },
      { name: "Huggies", path: "/shop?category=huggies" },
      { name: "Gift Sets", path: "/shop?category=sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Shipping & Delivery", path: "#" },
      { name: "Returns & Exchanges", path: "#" },
      { name: "Care Guide", path: "#" },
      { name: "FAQ", path: "#" },
      { name: "Contact Us", path: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Our Story", path: "/about" },
      { name: "Journal", path: "/journal" },
      { name: "Sustainability", path: "#" },
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-semibold tracking-[0.2em] uppercase"
              style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, made to last, and priced for the modern woman.
            </p>
          </div>

          {/* Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="hairline opacity-20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            <div className="flex items-center gap-3 text-white/40">
              <svg viewBox="0 0 24 24" className="w-8 h-5" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              <svg viewBox="0 0 24 24" className="w-8 h-5" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              <svg viewBox="0 0 24 24" className="w-8 h-5" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>
          </div>

          <p className="text-xs text-white/40 text-center md:text-right">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}