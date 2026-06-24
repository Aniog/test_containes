import { Phone, Mail, MapPin } from 'lucide-react'

const productLinks = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
]

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-extrabold tracking-tight">
                ARTITECT
              </span>
              <span className="text-xl font-light tracking-tight text-white/70">
                MACHINERY
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Precision sheet metal folding equipment engineered for
              manufacturers who demand excellence.
            </p>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+1 (555) 234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>sales@artitectmachinery.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>1200 Industrial Parkway, Cleveland, OH 44114</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#products"
                    onClick={(e) => scrollTo(e, '#products')}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Our Facility', 'Quality Standards', 'Careers'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#about"
                      onClick={(e) => scrollTo(e, '#about')}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {['Technical Support', 'Spare Parts', 'Service Network', 'Training'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      onClick={(e) => scrollTo(e, '#contact')}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
