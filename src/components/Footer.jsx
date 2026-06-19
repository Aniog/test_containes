import { Link } from 'react-router-dom'
import { Camera, Play, Globe } from 'lucide-react'

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Sets', path: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', path: '/shipping' },
      { label: 'Returns & Exchanges', path: '/returns' },
      { label: 'Care Guide', path: '/care' },
      { label: 'FAQ', path: '/faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Contact', path: '/contact' },
    ],
  },
]

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Klarna']

export default function Footer() {
  return (
    <footer className="bg-[#1C1A17] text-[#E5DDD3]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-bold tracking-[0.12em] text-white">
              VELMORA
            </Link>
            <p className="font-sans text-xs text-[#8C867C] mt-3 leading-relaxed max-w-[200px]">
              Demi-fine gold jewelry crafted to be treasured. Ethically made, elegantly designed.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="p-2 text-[#8C867C] hover:text-[#C69C6D] transition-colors" aria-label="Instagram">
                <Camera size={18} />
              </a>
              <a href="#" className="p-2 text-[#8C867C] hover:text-[#C69C6D] transition-colors" aria-label="TikTok">
                <Play size={18} />
              </a>
              <a href="#" className="p-2 text-[#8C867C] hover:text-[#C69C6D] transition-colors" aria-label="Pinterest">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-sans text-sm text-[#8C867C] hover:text-[#C69C6D] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-[#2D2A24]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="font-sans text-[10px] tracking-[0.04em] text-[#8C867C] px-2 py-1 border border-[#2D2A24] rounded"
                >
                  {icon}
                </span>
              ))}
            </div>

            <p className="font-sans text-xs text-[#8C867C]">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}