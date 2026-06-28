import React from 'react'
import { Settings, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-6 h-6 text-amber-500" />
              <span className="font-bold text-lg text-white tracking-tight uppercase">ARTITECT MACHINERY</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Engineering elegance in sheet metal folding. We provide high-performance, durable, and user-friendly machinery for industrial demands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Equipment</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-amber-500 transition-colors">Double Folding Machines</a></li>
              <li><a href="#products" className="hover:text-amber-500 transition-colors">Sheet Metal Folders</a></li>
              <li><a href="#products" className="hover:text-amber-500 transition-colors">Custom Metal Folders</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Technical Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
             <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0" />
                <span>123 Industrial Parkway,<br />Manufacturing District, 54321</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                <span>+1 (800) 555-FOLD</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                <span>sales@artitectmachinery.com</span>
              </li>
             </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
