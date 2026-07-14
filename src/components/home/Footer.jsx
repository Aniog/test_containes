import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop?category=sets', label: 'Sets' },
    { to: '/shop', label: 'All Products' }
  ]

  const helpLinks = [
    { to: '/contact', label: 'Contact Us' },
    { to: '/shipping', label: 'Shipping & Returns' },
    { to: '/faq', label: 'FAQ' },
    { to: '/size-guide', label: 'Size Guide' },
    { to: '/care', label: 'Jewelry Care' }
  ]

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/press', label: 'Press' },
    { to: '/careers', label: 'Careers' }
  ]

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl text-white tracking-wider">
                VELMORA
              </span>
            </Link>
            <p className="text-stone-400 mb-6 max-w-sm leading-relaxed">
              Demi-fine jewelry designed for the modern woman. Each piece tells a story 
              of quiet luxury and timeless elegance.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:border-amber-600 hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:border-amber-600 hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center hover:border-amber-600 hover:text-amber-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wider text-sm uppercase">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-stone-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wider text-sm uppercase">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-stone-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wider text-sm uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-stone-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          
          {/* Payment icons */}
          <div className="flex items-center gap-4">
            <span className="text-stone-500 text-xs">We accept:</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
                <span
                  key={method}
                  className="px-2 py-1 bg-stone-800 text-stone-400 text-xs rounded"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
