import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-base text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl tracking-ultra-wide text-velmora-gold mb-4">
              VELMORA
            </h2>
            <p className="text-velmora-taupe text-sm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs tracking-super-wide uppercase text-velmora-cream mb-4">Shop</h3>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals', 'Bestsellers'].map((item) => (
                <li key={item}>
                  <Link to="/collection" className="text-velmora-taupe text-sm hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs tracking-super-wide uppercase text-velmora-cream mb-4">Help</h3>
            <ul className="space-y-3">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-velmora-taupe text-sm hover:text-velmora-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-super-wide uppercase text-velmora-cream mb-4">Company</h3>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-velmora-taupe text-sm hover:text-velmora-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-velmora-surface mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 bg-velmora-surface rounded text-[10px] text-velmora-taupe tracking-wide"
                >
                  {method}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-velmora-taupe text-xs">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
