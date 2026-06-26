import { Factory, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'Double Folding Machine', href: '#products' },
      { name: 'Double Folder', href: '#products' },
      { name: 'Sheet Metal Folder', href: '#products' },
      { name: 'Metal Folding Machine', href: '#products' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Careers', href: '#' },
      { name: 'News', href: '#' },
    ],
    support: [
      { name: 'Technical Support', href: '#contact' },
      { name: 'Documentation', href: '#' },
      { name: 'Warranty', href: '#' },
      { name: 'Spare Parts', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Factory className="w-8 h-8 text-white" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none">
                  ARTITECT
                </span>
                <span className="text-xs font-semibold tracking-widest leading-none mt-0.5 text-white/70">
                  MACHINERY
                </span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Precision-engineered sheet metal folding machinery for industrial applications. Trusted by manufacturers worldwide for quality and reliability.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {currentYear} ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
