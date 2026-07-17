import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, CreditCard, Shield } from 'lucide-react'

export default function Footer() {
  const shopLinks = [
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Bestsellers', path: '/shop?sort=bestsellers' },
    { name: 'New Arrivals', path: '/shop?sort=new' }
  ]

  const helpLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'Contact Us', path: '/contact' }
  ]

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Journal', path: '/journal' },
    { name: 'Careers', path: '/careers' }
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter signup */}
        <div className="text-center mb-16">
          <h3 className="font-serif text-3xl mb-4">Stay Connected</h3>
          <p className="font-sans text-gray-400 mb-6">Get 10% off your first order</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 text-white 
                       placeholder-gray-500 focus:outline-none focus:border-amber-600 font-sans text-sm"
            />
            <button className="bg-amber-600 hover:bg-amber-700 px-6 py-3 font-sans text-sm uppercase tracking-wide">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <h4 className="font-serif text-2xl mb-4">VELMORA</h4>
            <p className="font-sans text-gray-400 text-sm leading-relaxed mb-6">
              Demi-fine gold jewelry crafted for the modern romantic. 
              Each piece tells a story of quiet luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h5 className="font-sans text-sm uppercase tracking-wider mb-4">Shop</h5>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="font-sans text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h5 className="font-sans text-sm uppercase tracking-wider mb-4">Help</h5>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="font-sans text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h5 className="font-sans text-sm uppercase tracking-wider mb-4">Company</h5>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="font-sans text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment icons & copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <CreditCard size={24} className="text-gray-500" />
              <Shield size={24} className="text-gray-500" />
              <span className="font-sans text-sm text-gray-500">Secure Payment</span>
            </div>
            
            <p className="font-sans text-sm text-gray-500">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
