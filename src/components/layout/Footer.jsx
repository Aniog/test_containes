import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#0A2540] font-semibold text-sm">SS</span>
              </div>
              <span className="font-semibold text-lg">SSourcing China</span>
            </div>
            <p className="text-[#94A3B8] text-sm">
              Professional sourcing services connecting global buyers with verified Chinese suppliers.
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

        <div className="border-t border-[#1E3A5F] mt-12 pt-8 text-center text-sm text-[#94A3B8]">
          <p>© {currentYear} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer