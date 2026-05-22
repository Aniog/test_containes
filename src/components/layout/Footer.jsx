import { Link } from 'react-router-dom'
import { Pizza, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 text-white font-extrabold text-xl mb-3">
            <Pizza className="w-6 h-6 text-red-500" />
            <span>Napoli's Pizza</span>
          </div>
          <p className="text-sm text-stone-400 leading-relaxed">
            Authentic Neapolitan pizza crafted with love, using only the finest imported Italian ingredients since 1987.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-400 transition-colors">Home</Link></li>
            <li><Link to="/store" className="hover:text-red-400 transition-colors">Menu & Store</Link></li>
            <li><Link to="/booking" className="hover:text-red-400 transition-colors">Book a Table</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact & Hours</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
              <span>123 Via Roma, Little Italy, NY 10013</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-400 shrink-0" />
              <span>(212) 555-0192</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-400 shrink-0" />
              <span>hello@napolispizza.com</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
              <span>Mon–Thu 12pm–10pm<br />Fri–Sun 12pm–11pm</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800 text-center py-4 text-xs text-stone-500">
        © {new Date().getFullYear()} Napoli's Pizza. All rights reserved.
      </div>
    </footer>
  )
}
