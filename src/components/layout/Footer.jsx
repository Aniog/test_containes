import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  Shop: [
    { label: "Earrings", to: "/shop?category=earrings" },
    { label: "Necklaces", to: "/shop?category=necklaces" },
    { label: "Huggies", to: "/shop?category=huggies" },
    { label: "Gift Sets", to: "/shop?category=sets" },
    { label: "New Arrivals", to: "/shop" },
  ],
  Help: [
    { label: "Shipping & Returns", to: "/journal" },
    { label: "Care Guide", to: "/journal" },
    { label: "FAQ", to: "/about" },
    { label: "Contact Us", to: "/about" },
  ],
  Company: [
    { label: "Our Story", to: "/about" },
    { label: "Sustainability", to: "/about" },
    { label: "Press", to: "/journal" },
    { label: "Careers", to: "/about" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl uppercase tracking-widest text-velmora-cream"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-velmora-sand">
              Demi-fine gold jewelry designed to be treasured. Made for everyday
              luxury, gifting, and the moments that matter.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-velmora-sand transition-colors hover:text-velmora-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-velmora-sand transition-colors hover:text-velmora-gold"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-velmora-sand transition-colors hover:text-velmora-gold"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 md:col-span-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-sans text-xs uppercase tracking-label text-velmora-gold">
                  {title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-velmora-sand transition-colors hover:text-velmora-cream"
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

        <Separator className="my-10 bg-velmora-cream/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-velmora-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["visa", "mastercard", "amex", "paypal"].map((icon) => (
              <span
                key={icon}
                className="flex h-6 items-center justify-center rounded bg-velmora-cream/10 px-2 text-[10px] uppercase tracking-wider text-velmora-sand"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
