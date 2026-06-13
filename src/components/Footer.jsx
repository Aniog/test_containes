import { ArrowUp } from 'lucide-react'

const footerLinks = {
  products: [
    'Double Folder AF-4000',
    'Sheet Metal Folder SM-2000',
    'Metal Folder Machine MF-6000',
    'Metal Folding Machine FF-3000',
    'Custom Solutions',
  ],
  company: [
    'About Us',
    'Our History',
    'Careers',
    'Press & Media',
    'Sustainability',
  ],
  support: [
    'Technical Support',
    'Installation Service',
    'Spare Parts',
    'Training Programs',
    'Documentation',
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-dark text-brand-surface">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent rounded-sm flex items-center justify-center">
                <span className="font-heading text-brand-dark font-bold text-lg leading-none">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-brand-surface font-bold text-lg tracking-widest leading-tight">
                  ARTITECT
                </span>
                <span className="font-heading text-brand-accent text-[10px] tracking-[0.3em] font-medium uppercase leading-tight">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-brand-surface/50 text-sm leading-relaxed mb-6">
              Precision metal folding machines engineered for performance.
              Serving fabrication professionals worldwide since 1998.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'YouTube', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-brand-surface/10 flex items-center justify-center text-brand-surface/50 hover:bg-brand-accent/20 hover:text-brand-accent transition-colors text-xs font-medium"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-brand-accent mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-brand-surface/50 text-sm hover:text-brand-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-brand-accent mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-brand-surface/50 text-sm hover:text-brand-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest uppercase text-brand-accent mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-brand-surface/50 text-sm hover:text-brand-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-surface/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-surface/30 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-surface/30 text-xs hover:text-brand-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-brand-surface/30 text-xs hover:text-brand-accent transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-brand-surface/10 flex items-center justify-center hover:bg-brand-accent/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} className="text-brand-surface/50" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
