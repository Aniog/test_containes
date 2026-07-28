import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react'

const footerLinks = [
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'Supplier Sourcing' },
      { to: '/services', label: 'Factory Verification' },
      { to: '/services', label: 'Quality Control' },
      { to: '/services', label: 'Shipping & Logistics' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/how-it-works', label: 'How It Works' },
      { to: '/case-studies', label: 'Case Studies' },
      { to: '/blog', label: 'Blog' },
      { to: '/contact', label: 'Contact Us' },
    ],
  },
  {
    title: 'Products',
    links: [
      { to: '/products', label: 'Electronics' },
      { to: '/products', label: 'Industrial Parts' },
      { to: '/products', label: 'Consumer Goods' },
      { to: '/products', label: 'All Categories' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded bg-brand-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SSourcing<span className="text-brand-400">China</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Professional China sourcing agent helping overseas buyers find reliable suppliers,
              verify factories, inspect quality, and manage logistics — all from one trusted partner.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400" />
                <span>+86 123 4567 890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span>Room 1208, Block A, International Trade Center, Shenzhen, China</span>
              </div>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-white mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-brand-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-400 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
