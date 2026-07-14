import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Acme Co.</h3>
            <p className="text-sm leading-relaxed">
              Building great products and helping businesses grow since 2020.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">View Contacts</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@acmeco.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Acme Co. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
