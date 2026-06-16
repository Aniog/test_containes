import { Wrench } from 'lucide-react'

const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'Double Folding Machine', href: '#products' },
      { label: 'Double Folder', href: '#products' },
      { label: 'Sheet Metal Folder', href: '#products' },
      { label: 'Metal Folding Machine', href: '#products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Facility', href: '#about' },
      { label: 'Quality Assurance', href: '#about' },
      { label: 'Careers', href: '#contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Sales', href: '#contact' },
      { label: 'Technical Support', href: '#contact' },
      { label: 'Spare Parts', href: '#contact' },
      { label: 'Warranty Info', href: '#contact' },
    ],
  },
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-900 border-t border-brand-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-brand-700 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-accent-500" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                ARTITECT <span className="text-accent-500">MACHINERY</span>
              </span>
            </a>
            <p className="text-brand-400 text-sm leading-relaxed max-w-sm mb-6">
              Leading manufacturer of precision folding machines and sheet metal
              fabrication equipment. Built for industry, trusted by professionals
              worldwide since 1998.
            </p>
            <p className="text-brand-500 text-xs">
              ISO 9001:2015 Certified &middot; CE Compliant &middot; Global Warranty
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-sm text-brand-400 hover:text-accent-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-500">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-brand-500 hover:text-brand-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-brand-500 hover:text-brand-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-brand-500 hover:text-brand-300 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
