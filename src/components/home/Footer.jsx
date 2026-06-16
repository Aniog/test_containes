import { ArrowUpRight } from 'lucide-react'
import { BRAND } from '@/data/site'

const FOOTER_LINKS = [
  {
    heading: 'Products',
    items: [
      { label: 'Double Folding Machine', href: '#products' },
      { label: 'Double Folder', href: '#products' },
      { label: 'Sheet Metal Folder', href: '#products' },
      { label: 'Sheet Metal Folding Machine', href: '#products' },
      { label: 'Metal Folder', href: '#products' },
      { label: 'Metal Folder Machine', href: '#products' },
      { label: 'Metal Folding Machine', href: '#products' },
    ],
  },
  {
    heading: 'Engineering',
    items: [
      { label: 'Principles', href: '#engineering' },
      { label: 'Specifications', href: '#engineering' },
      { label: 'Industries served', href: '#industries' },
      { label: 'Service & support', href: '#service' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Factory tours', href: '#contact' },
      { label: 'Careers', href: '#contact' },
      { label: 'Press', href: '#contact' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink-950 text-ink-50 border-t border-line-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-ink-800 text-copper-500"
              >
                <svg
                  viewBox="0 0 32 32"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 24V8h7l8 12V8h7v16" />
                </svg>
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-wide text-ink-50">
                  ARTITECT
                </span>
                <span className="text-[10px] uppercase tracking-widest-2 text-copper-500 mt-0.5">
                  Machinery
                </span>
              </div>
            </div>
            <p className="mt-6 text-sm text-ink-50/70 leading-relaxed max-w-sm">
              {BRAND.description}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-copper-500 hover:text-copper-200 transition-colors"
            >
              Start a project with us
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.heading} className="lg:col-span-2">
              <h3 className="text-xs uppercase tracking-widest-2 text-ink-50/50">
                {group.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-ink-50/80 hover:text-copper-500 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest-2 text-ink-50/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-50/80">
              <li>
                <a
                  href={`mailto:${BRAND.contactEmail}`}
                  className="hover:text-copper-500 transition-colors"
                >
                  {BRAND.contactEmail}
                </a>
              </li>
              <li>{BRAND.contactPhone}</li>
              <li className="leading-relaxed">{BRAND.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line-dark flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs text-ink-50/50">
          <span>© {year} {BRAND.name}. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink-50 transition-colors">
              Privacy policy
            </a>
            <a href="#" className="hover:text-ink-50 transition-colors">
              Terms of service
            </a>
            <a href="#" className="hover:text-ink-50 transition-colors">
              ISO 9001 certificate
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
