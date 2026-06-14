import React from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const PRODUCT_LINKS = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
]

const COMPANY_LINKS = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  return (
    <footer className="bg-slate text-bg">
      <div className="container-x py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-bg text-ink">
                <span className="font-display text-[16px]">A</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg tracking-tight">
                  ARTITECT
                </span>
                <span className="text-[10px] tracking-eyebrow uppercase text-bg/60 mt-0.5">
                  Machinery
                </span>
              </span>
            </div>
            <p className="mt-6 text-[15px] text-bg/70 leading-relaxed max-w-md">
              We design and build precision double folding machines, sheet
              metal folders, and metal folding systems for fabricators who
              care about the feel of a finished bend.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-bg/70">
              <a
                href="mailto:engineering@artitect-machinery.com"
                className="inline-flex items-center gap-3 hover:text-bg transition-colors"
              >
                <Mail className="h-4 w-4 text-accent" />
                engineering@artitect-machinery.com
              </a>
              <a
                href="tel:+18005550199"
                className="inline-flex items-center gap-3 hover:text-bg transition-colors"
              >
                <Phone className="h-4 w-4 text-accent" />
                +1 (800) 555-0199
              </a>
              <span className="inline-flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                220 Foundry Lane, Pittsburgh, PA 15222
              </span>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="eyebrow text-bg/60">Product Range</h4>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 text-sm text-bg/80">
              {PRODUCT_LINKS.map((name) => (
                <li key={name}>
                  <a
                    href="#products"
                    className="hover:text-bg transition-colors inline-flex items-center gap-2"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow text-bg/60">Company</h4>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-bg/80">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-bg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-bg border-b border-accent pb-1 hover:gap-3 transition-all"
            >
              Start a project with us
              <ArrowUpRight className="h-4 w-4 text-accent" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-bg/50">
          <span>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>ISO 9001:2015 certified manufacturing</span>
            <span>CE marked controls</span>
            <span>12-month full machine warranty</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
