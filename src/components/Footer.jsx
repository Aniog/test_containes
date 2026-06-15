import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white tracking-tight">
              SSourcing<span className="text-blue-400">China</span>
            </Link>
            <p className="mt-4 text-sm leading-6">
              Your professional sourcing partner in China. We help global businesses navigate the Chinese market safely and efficiently.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-white transition"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-blue-400 transition">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">Factory Audit</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">Shipping Consolidation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link to="/how-it-works" className="hover:text-blue-400 transition">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400 transition">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 shrink-0" />
                <span>R1205, Modern Plaza, Futian District, Shenzhen, China</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 shrink-0" />
                <span>+86 755 8888 8888</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 shrink-0" />
                <span>contact@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} SSourcing China Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
