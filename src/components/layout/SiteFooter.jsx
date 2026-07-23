import { Instagram, Facebook, CreditCard, ShieldCheck } from 'lucide-react'
import { footerLinks } from '@/data/storefront'

export const SiteFooter = () => (
  <footer className="border-t border-brand-line bg-brand-ink px-5 py-14 text-brand-parchment md:px-8 lg:px-12">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_2fr]">
      <div className="space-y-5">
        <a href="#top" className="font-serif text-4xl tracking-[0.32em] text-brand-parchment">
          VELMORA
        </a>
        <p className="max-w-md text-sm leading-7 text-brand-sand">
          Premium demi-fine jewelry designed for self-purchase, thoughtful gifting,
          and the elegance of every day.
        </p>
        <div className="flex items-center gap-3 text-brand-sand">
          <a href="#" aria-label="Instagram" className="rounded-full border border-brand-line/40 p-3 hover:text-brand-parchment">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Facebook" className="rounded-full border border-brand-line/40 p-3 hover:text-brand-parchment">
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-overline text-brand-sand">
              {heading}
            </h3>
            <ul className="space-y-3 text-sm text-brand-parchment/90">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-gold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-brand-line/30 pt-6 text-sm text-brand-sand md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-line/30 px-3 py-2">
          <CreditCard className="h-4 w-4" /> Visa
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-line/30 px-3 py-2">
          <CreditCard className="h-4 w-4" /> Mastercard
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-line/30 px-3 py-2">
          <ShieldCheck className="h-4 w-4" /> Secure Payments
        </span>
      </div>
      <p className="text-brand-sand">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
    </div>
  </footer>
)
