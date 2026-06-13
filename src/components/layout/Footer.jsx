import { Linkedin, Youtube, Twitter, Mail, ChevronUp } from 'lucide-react'

const footerLinks = {
  Products: [
    { label: 'Double Folding Machine', href: '#products' },
    { label: 'Double Folder Pro Series', href: '#products' },
    { label: 'Sheet Metal Folder SX', href: '#products' },
    { label: 'Metal Folding Machine MFX', href: '#products' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#' },
  ],
  Support: [
    { label: 'Documentation', href: '#' },
    { label: 'Parts & Service', href: '#' },
    { label: 'Training', href: '#' },
    { label: 'Warranty', href: '#' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-navy text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-heading text-2xl font-bold">ARTITECT</span>
              <span className="font-heading text-lg font-light italic text-brand-gold">
                Machinery
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              Precision metal folding machinery engineered for the demands of
              modern manufacturing. Trusted by industry leaders across 60+
              countries.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:sales@artitectmachinery.com"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm uppercase tracking-widest font-medium mb-5 text-white/80">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-brand-gold transition-colors text-sm"
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

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors">
              Terms of Service
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 border border-white/20 hover:border-brand-gold hover:text-brand-gold transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}