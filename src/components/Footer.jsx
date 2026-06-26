import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#0F172A] font-bold text-lg">SS</span>
              </div>
              <span className="font-semibold text-xl">SSourcing China</span>
            </div>
            <p className="text-[#94A3B8] text-sm">
              Professional China sourcing agent helping global buyers find reliable suppliers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li><Link to="/products" className="hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>info@ssourcingchina.com</li>
              <li>+86 21 5888 0000</li>
              <li>Shanghai, China</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#334155] text-center text-sm text-[#64748B]">
          © {currentYear} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer