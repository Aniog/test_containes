import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Youtube, Globe } from 'lucide-react'

const footerLinks = {
  Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping Info', 'Returns & Exchanges', 'Care Guide', 'FAQ', 'Contact Us'],
  Company: ['About Us', 'Our Story', 'Journal', 'Sustainability', 'Careers'],
}

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Klarna']

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        {/* Newsletter reminder */}
        <div className="text-center mb-16">
          <p className="font-serif text-2xl md:text-3xl text-[#F5F0EB] mb-3">
            Join Our World
          </p>
          <p className="text-sm text-[#A0988E] max-w-md mx-auto">
            Subscribe for early access to new collections, styling inspiration, and 10% off your first order.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-[0.2em] text-[#F5F0EB] hover:text-[#C9A96E] transition-colors"
            >
              VELMORA
            </Link>
            <p className="text-xs text-[#A0988E] mt-3 leading-relaxed max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Elevated essentials, made to be treasured.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-medium text-[#F5F0EB] uppercase tracking-[0.15em] mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-[#A0988E] hover:text-[#C9A96E] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="hairline pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-xs text-[#A0988E]">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-xs text-[#2A2A2A] uppercase tracking-wider"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Youtube, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-[#A0988E] hover:text-[#C9A96E] transition-colors"
                aria-label="Social media"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}