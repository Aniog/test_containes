import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Youtube, Github } from 'lucide-react'
import BrandMark from '@/components/ui/BrandMark'

const PRODUCT_LINKS = [
  { label: 'Double Folding Machine', href: '#products' },
  { label: 'Double Folder', href: '#products' },
  { label: 'Sheet Metal Folder', href: '#products' },
  { label: 'Sheet Metal Folding Machine', href: '#products' },
  { label: 'Metal Folder', href: '#products' },
  { label: 'Metal Folder Machine', href: '#products' },
  { label: 'Metal Folding Machine', href: '#products' },
]

const COMPANY_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Request a Quote', href: '#quote' },
]

const Footer = () => {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <BrandMark tone="light" />
            <p className="mt-6 text-cream/70 text-base leading-relaxed max-w-sm">
              ARTITECT MACHINERY engineers cast-iron folding systems for fabricators who
              measure success in microns — and decades.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-copper-bright mt-0.5 shrink-0" />
                <span className="text-cream/80">
                  No. 88, Precision Industrial Park, Jiading District, Shanghai 201800, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-copper-bright shrink-0" />
                <span className="text-cream/80">+86 21 0000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-copper-bright shrink-0" />
                <a href="mailto:hello@artitect-machinery.com" className="text-cream/80 hover:text-copper-bright transition-colors">
                  hello@artitect-machinery.com
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-eyebrow text-copper-bright">Products</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-cream/70 hover:text-copper-bright transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-eyebrow text-copper-bright">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-cream/70 hover:text-copper-bright transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-eyebrow text-copper-bright">Newsletter</h3>
            <p className="mt-5 text-sm text-cream/70 leading-relaxed">
              Quarterly notes on new machines, case studies, and folding techniques. No spam.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center border-b border-cream/20 focus-within:border-copper-bright transition-colors"
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:outline-none text-sm"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="text-copper-bright text-xs uppercase tracking-widest hover:text-copper-deep transition-colors py-3"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-8 flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="text-cream/50 hover:text-copper-bright transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-cream/50 hover:text-copper-bright transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" aria-label="GitHub" className="text-cream/50 hover:text-copper-bright transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-copper mt-16" />

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} ARTITECT MACHINERY Co., Ltd. — All rights reserved.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-copper-bright transition-colors">Privacy</a>
            <a href="#" className="hover:text-copper-bright transition-colors">Terms</a>
            <a href="#" className="hover:text-copper-bright transition-colors">Cookies</a>
            <span>ISO 9001 · CE · UL certified</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
