import React from 'react'
import { ChevronRight } from 'lucide-react'

const footerLinks = {
  products: {
    title: 'Products',
    links: [
      'Double Folding Machine',
      'Double Folder',
      'Sheet Metal Folder',
      'Sheet Metal Folding Machine',
      'Metal Folder',
      'Metal Folder Machine',
      'Metal Folding Machine',
    ],
  },
  company: {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Blog', 'Events'],
  },
  support: {
    title: 'Support',
    links: ['Technical Support', 'Spare Parts', 'Documentation', 'Training', 'FAQ'],
  },
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">ARTITECT</span>
                <span className="text-xl font-light text-gray-400"> MACHINERY</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Precision sheet metal folding machines engineered for industry. Built for performance. Backed by global support.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'YouTube', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-amber-600 flex items-center justify-center text-gray-400 hover:text-white transition-all text-xs font-medium"
                >
                  {social.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} ARTITECT MACHINERY GmbH. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  )
}