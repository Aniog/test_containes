import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
                <span className="text-sm font-bold">SS</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">SSourcing China</div>
                <div className="text-xs text-slate-500">Trusted Sourcing Partner</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-slate-600">
              We help overseas buyers source reliable suppliers, verify factories, inspect quality, and coordinate shipping from China.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link to="/services" className="hover:text-slate-900">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-slate-900">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-slate-900">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-slate-900">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@ssourcingchina.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +86 20 1234 5678</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Guangzhou, China</li>
            </ul>
            <div className="mt-4 flex items-center gap-3 text-slate-500">
              <Linkedin className="h-5 w-5 hover:text-slate-900 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-slate-900 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
