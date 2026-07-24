import React from "react"
import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"
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
    { label: "Shipping & Returns", href: "/shipping-returns" },
    { label: "Care Guide", href: "/care" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Press", href: "/press" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="inline-block font-serif text-2xl tracking-[0.18em] font-semibold mb-6"
            >
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed text-white/70 max-w-xs">
              Demi-fine jewelry designed for everyday moments and lasting
              impressions. Crafted to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5">
                  Shop
                </h4>
                <ul className="space-y-3">
                  {footerLinks.shop.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5">
                  Help
                </h4>
                <ul className="space-y-3">
                  {footerLinks.help.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5">
                  Company
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-wider text-white/40 px-2 py-1 border border-white/10 rounded-sm">
              Visa
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/40 px-2 py-1 border border-white/10 rounded-sm">
              Mastercard
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/40 px-2 py-1 border border-white/10 rounded-sm">
              Amex
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/40 px-2 py-1 border border-white/10 rounded-sm">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
