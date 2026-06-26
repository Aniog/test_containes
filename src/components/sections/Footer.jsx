import { Linkedin, Youtube, Facebook, ArrowUp } from 'lucide-react'
import { products } from '@/lib/products'

const NAV = [
  { id: 'products', label: 'Products' },
  { id: 'why-us', label: 'Why ARTITECT' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[#0a1422] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[#C8A85B]/60 bg-[#0E1B2C]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#C8A85B]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21V8l9-5 9 5v13" strokeLinejoin="round" strokeLinecap="round" />
                  <path d="M9 21V12h6v9" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-base font-bold tracking-[0.18em] text-white">
                  ARTITECT
                </div>
                <div className="text-[10px] font-medium tracking-[0.32em] text-[#C8A85B]">
                  MACHINERY
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Precision sheet metal folding systems — designed, built, and
              supported by a single engineering team. Trusted by fabricators
              in 40+ countries.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-md border border-white/10 p-2 text-white/70 transition hover:border-[#C8A85B] hover:text-[#C8A85B]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="rounded-md border border-white/10 p-2 text-white/70 transition hover:border-[#C8A85B] hover:text-[#C8A85B]"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-md border border-white/10 p-2 text-white/70 transition hover:border-[#C8A85B] hover:text-[#C8A85B]"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A85B]">
              Site
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollTo(n.id)}
                    className="text-white/70 transition hover:text-[#C8A85B]"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Machines */}
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A85B]">
              Machines
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              {products.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => scrollTo('products')}
                    className="text-left text-white/70 transition hover:text-[#C8A85B]"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A85B]">
              Contact
            </div>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:sales@artitect-machinery.com"
                  className="hover:text-[#C8A85B]"
                >
                  sales@artitect-machinery.com
                </a>
              </li>
              <li>
                <a href="tel:+10000000000" className="hover:text-[#C8A85B]">
                  +1 (000) 000-0000
                </a>
              </li>
              <li>248 Foundry Avenue<br />Industrial Park District</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50 transition hover:text-[#C8A85B]"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}