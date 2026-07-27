import React from "react"
import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-navy text-ink-onDark">
      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[4px] bg-teal text-white flex items-center justify-center font-bold text-[15px]">
                SS
              </div>
              <span className="text-[15px] font-semibold text-ink-onDark">
                SSourcing China
              </span>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-ink-onDarkMuted max-w-sm">
              China-based sourcing agent helping overseas buyers find reliable
              suppliers, verify factories, inspect quality, and ship on time.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-[14px] text-ink-onDarkMuted">
              <a
                href="mailto:hello@ssourcing.cn"
                className="inline-flex items-center gap-2 hover:text-ink-onDark"
              >
                <Mail size={16} />
                hello@ssourcing.cn
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone size={16} />
                +86 21 5555 0188
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} />
                Shanghai, China
              </span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[13px] font-semibold uppercase tracking-eyebrow text-teal-light">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-ink-onDarkMuted">
              <li><Link to="/services" className="hover:text-ink-onDark">Supplier Search</Link></li>
              <li><Link to="/services" className="hover:text-ink-onDark">Factory Audit</Link></li>
              <li><Link to="/services" className="hover:text-ink-onDark">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-ink-onDark">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-ink-onDark">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[13px] font-semibold uppercase tracking-eyebrow text-teal-light">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-ink-onDarkMuted">
              <li><Link to="/how-it-works" className="hover:text-ink-onDark">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-ink-onDark">Case Studies</Link></li>
              <li><Link to="/products" className="hover:text-ink-onDark">Products We Source</Link></li>
              <li><Link to="/blog" className="hover:text-ink-onDark">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-ink-onDark">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[13px] font-semibold uppercase tracking-eyebrow text-teal-light">
              Get a Sourcing Quote
            </h4>
            <p className="mt-4 text-[14px] leading-relaxed text-ink-onDarkMuted max-w-sm">
              Tell us what you need — product, specs, target quantity, and
              destination port. We reply within one business day with a sourcing
              plan and indicative cost.
            </p>
            <Link
              to="/contact#inquiry"
              className="mt-5 inline-flex items-center justify-center h-11 px-5 rounded-[4px] bg-teal text-white font-semibold text-[15px] hover:bg-teal-hover transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-content py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[13px] text-ink-onDarkMuted">
          <span>© {new Date().getFullYear()} SSourcing China. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>English / 中文</span>
            <span>Headquartered in Shanghai</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
