import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = [
  {
    title: 'Services',
    links: [
      { to: '/services', label: 'Supplier Sourcing' },
      { to: '/services', label: 'Factory Verification' },
      { to: '/services', label: 'Quality Inspection' },
      { to: '/services', label: 'Shipping Coordination' },
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
      { to: '/products', label: 'Industrial Equipment' },
      { to: '/products', label: 'Consumer Goods' },
      { to: '/products', label: 'Textiles & Apparel' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-gold">SS</span>ourcing China
            </Link>
            <p className="mt-4 text-slate-300 max-w-sm leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping — all with transparency and professionalism.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-white mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-slate-300 hover:text-gold transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" /> info@ssourcingchina.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4" /> +86 755 1234 5678
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
