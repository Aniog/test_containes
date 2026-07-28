import { Link } from 'react-router-dom'

const footerLinks = {
  Company: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'How It Works', to: '/how-it-works' },
  ],
  Resources: [
    { label: 'Products We Source', to: '/products' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Blog', to: '/blog' },
  ],
  Contact: [
    { label: 'Contact', to: '/contact' },
  ],
}

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_repeat(3,1fr)] lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">SSourcing China</h2>
          <p className="mt-4 max-w-md text-base leading-7 text-white/75">
            Practical sourcing support for overseas buyers who need reliable suppliers, better factory visibility, and steady execution from inquiry to shipment.
          </p>
          <p className="mt-6 text-sm text-white/60">SEO title: China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China</p>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{group}</p>
            <div className="mt-5 space-y-3">
              {links.map((link) => (
                <Link key={link.to} to={link.to} className="block text-sm text-white/75 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 SSourcing China. Frontend preview for sourcing inquiry generation.</p>
          <p>China-based sourcing agent for global buyers.</p>
        </div>
      </div>
    </footer>
  )
}
