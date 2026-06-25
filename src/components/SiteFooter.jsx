import { Link } from 'react-router-dom'

const links = [
  ['Services', '/services'],
  ['How It Works', '/how-it-works'],
  ['Products We Source', '/products'],
  ['Case Studies', '/case-studies'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
]

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link to="/" className="text-2xl font-black tracking-tight text-white">SSourcing China</Link>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            A China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Company</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {links.map(([label, to]) => (
              <Link key={to} to={to} className="hover:text-white">{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Inquiries</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Send product details, target market, quantity, and timeline. We will review your requirements and reply with practical next steps.
          </p>
          <a href="/contact#inquiry" className="mt-5 inline-flex rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-amber-300">
            Get a Free Sourcing Quote
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400">
        © 2026 SSourcing China. Practical sourcing support for global buyers.
      </div>
    </footer>
  )
}
