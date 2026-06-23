import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Globe2 } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-9 w-9 rounded-lg bg-white text-brand items-center justify-center font-bold">S</span>
            <span className="font-bold text-lg">SSourcing China</span>
          </div>
          <p className="text-sm text-white/75 leading-relaxed">
            Independent sourcing agent based in China. We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production and coordinate shipping.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
            <Globe2 className="w-4 h-4" /> Serving buyers in 40+ countries
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
            <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>Supplier search &amp; verification</li>
            <li>Factory audit</li>
            <li>Sample &amp; price negotiation</li>
            <li>Production follow-up</li>
            <li>Quality inspection (QC)</li>
            <li>Shipping &amp; logistics</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-white/60" />
              <span>Yiwu &amp; Shenzhen, China</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-white/60" />
              <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">hello@ssourcingchina.com</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-white/60" />
              <span>+86 138 0000 0000 (WhatsApp)</span>
            </li>
            <li className="flex items-start gap-2">
              <Linkedin className="w-4 h-4 mt-0.5 text-white/60" />
              <span>linkedin.com/company/ssourcing-china</span>
            </li>
          </ul>
          <Link
            to="/contact"
            className="inline-block mt-5 bg-accent hover:bg-accent/90 text-white px-4 py-2.5 rounded-lg font-semibold text-sm"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-white/60">
          <div>© {year} SSourcing China. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>NDA Available on Request</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
