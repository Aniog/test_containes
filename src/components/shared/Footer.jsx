import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Supplier Sourcing', href: '/services' },
    { label: 'Factory Verification', href: '/services' },
    { label: 'Quality Inspection', href: '/services' },
    { label: 'Production Follow-up', href: '/services' },
    { label: 'Shipping Coordination', href: '/services' },
  ],
  Resources: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Products We Source', href: '/products' },
    { label: 'FAQs', href: '/#faq' },
    { label: 'Get a Quote', href: '/contact?quote=true' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" aria-label="SSourcing China home" className="flex items-center gap-2 text-white mb-4 no-underline hover:no-underline">
              <span aria-hidden="true" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 font-bold text-sm">
                SS
              </span>
              <span className="text-lg font-bold tracking-tight">SSourcing China</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400 mb-6">
              Your on-the-ground sourcing partner in China. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-slate-300 hover:text-white no-underline hover:no-underline">
                <Mail className="h-4 w-4 text-blue-500" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+8613812345678" className="flex items-center gap-2 text-slate-300 hover:text-white no-underline hover:no-underline">
                <Phone className="h-4 w-4 text-blue-500" />
                +86 138 1234 5678
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="h-4 w-4 text-blue-500 mt-0.5" />
                <span>Room 1208, Tairan Building, Futian District, Shenzhen, China</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold mb-4 text-sm">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors no-underline hover:no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-white no-underline hover:no-underline" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
