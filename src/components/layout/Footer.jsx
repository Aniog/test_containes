import { Link } from "react-router-dom"
import { MapPin, Mail, Phone, Linkedin, Twitter, Globe } from "lucide-react"

const footerLinks = {
  Services: [
    { label: "Supplier Sourcing", href: "/services" },
    { label: "Factory Verification", href: "/services" },
    { label: "Quality Inspection", href: "/services" },
    { label: "Production Follow-up", href: "/services" },
    { label: "Shipping Coordination", href: "/services" },
  ],
  Company: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Products We Source", href: "/products" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1F2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#1A4B8C] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div>
                <span className="font-bold text-white text-xl leading-none block">SSourcing China</span>
                <span className="text-[#6B7A8D] text-xs font-medium tracking-wide">Your Trusted Sourcing Partner</span>
              </div>
            </div>
            <p className="text-[#9AAABB] text-sm leading-relaxed mb-6 max-w-sm">
              We help global buyers find reliable Chinese suppliers, verify factories, manage quality control, and coordinate shipping — so you can focus on growing your business.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#9AAABB] text-sm">
                <MapPin className="w-4 h-4 text-[#1A4B8C] flex-shrink-0" />
                <span>Shenzhen & Yiwu, China</span>
              </div>
              <div className="flex items-center gap-2 text-[#9AAABB] text-sm">
                <Mail className="w-4 h-4 text-[#1A4B8C] flex-shrink-0" />
                <a href="mailto:info@ssourcing.cn" className="hover:text-white transition-colors">info@ssourcing.cn</a>
              </div>
              <div className="flex items-center gap-2 text-[#9AAABB] text-sm">
                <Globe className="w-4 h-4 text-[#1A4B8C] flex-shrink-0" />
                <span>Serving buyers in 40+ countries</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[#9AAABB] text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#2D3748] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7A8D] text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#6B7A8D] text-xs">Trusted by buyers in 40+ countries</span>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-[#2D3748] rounded-full flex items-center justify-center hover:bg-[#1A4B8C] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-[#9AAABB]" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#2D3748] rounded-full flex items-center justify-center hover:bg-[#1A4B8C] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-[#9AAABB]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
