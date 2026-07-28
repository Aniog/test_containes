import { Link } from 'react-router-dom'
import { navLinks } from '@/siteData'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-900">
              SS
            </div>
            <div>
              <p className="text-base font-semibold text-white">SSourcing China</p>
              <p className="text-sm text-slate-400">China sourcing agent for overseas buyers</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
            We help buyers source products in China with clearer supplier screening, factory verification, quality inspection, production follow-up, and shipping coordination.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              to="/contact"
            >
              Get a Free Sourcing Quote
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              to="/services"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-300">Pages</p>
          <div className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.path} className="text-sm text-slate-300 transition hover:text-white" to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-300">Contact</p>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <p>info@ssourcingchina.com</p>
            <p>Based in China, supporting buyers worldwide</p>
            <p>Professional, practical, and inquiry-focused sourcing support</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
