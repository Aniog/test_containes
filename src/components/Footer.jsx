import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-700 text-white">
                <Globe2 className="h-5 w-5" />
              </span>
              <span className="text-base font-bold text-white">SSourcing China</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing partner for global buyers. We help you find the right factories,
              verify suppliers on the ground, control quality, and ship your orders worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Supplier Sourcing</li>
              <li>Factory Audits</li>
              <li>Quality Inspection</li>
              <li>Production Follow-up</li>
              <li>Shipping & Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
                <span>Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
                <a href="mailto:contact@ssourcingchina.com" className="hover:text-white">contact@ssourcingchina.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
                <span>+86 138 0000 0000 (WhatsApp / WeChat)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Sourcing agent services for global B2B buyers.</p>
        </div>
      </div>
    </footer>
  )
}
