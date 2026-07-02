import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Care Guide', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '#' },
    { label: 'Careers', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl uppercase tracking-widest font-semibold text-cream"
            >
              Velmora
            </Link>
            <p className="mt-4 font-sans text-sm text-stone-light leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday luxury. Designed to be worn, loved, and
              treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-cream mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-stone-light hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-cream mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-stone-light hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-cream mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="font-sans text-sm text-stone-light hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="font-sans text-sm text-stone-light hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline border-ink-soft mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-stone-light">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-light px-2 py-1 border border-ink-soft rounded">
              Visa
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-light px-2 py-1 border border-ink-soft rounded">
              Mastercard
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-light px-2 py-1 border border-ink-soft rounded">
              Amex
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-light px-2 py-1 border border-ink-soft rounded">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
