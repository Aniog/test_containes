import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navLinks } from '@/data/siteContent.js'

const Footer = () => (
  <footer className="bg-slate-950 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white">SS</span>
          <div>
            <p className="text-lg font-bold">SSourcing China</p>
            <p className="text-sm text-slate-300">Practical sourcing support for overseas buyers.</p>
          </div>
        </div>
        <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
          China-based sourcing, supplier verification, quality inspection, production follow-up, and shipping coordination for international B2B buyers.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Pages</h3>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm md:grid-cols-1">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Contact</h3>
        <div className="mt-4 space-y-3 text-sm text-slate-300">
          <p className="flex gap-3"><MapPin className="h-5 w-5 text-blue-300" /> China-based sourcing office</p>
          <p className="flex gap-3"><Mail className="h-5 w-5 text-blue-300" /> inquiries@ssourcingchina.com</p>
          <p className="flex gap-3"><Phone className="h-5 w-5 text-blue-300" /> Request a callback through the inquiry form</p>
        </div>
      </div>
    </div>
    <div className="border-t border-slate-800 px-4 py-5 text-center text-sm text-slate-400">
      © 2026 SSourcing China. Built for professional sourcing inquiries.
    </div>
  </footer>
)

export default Footer
