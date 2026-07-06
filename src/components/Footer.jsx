import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import { toast } from 'sonner'

function noopLink(text) {
  return (
    <button
      onClick={() => toast('Coming soon', { description: `${text} — under development.` })}
      className="hover:text-white transition-colors text-left"
    >
      {text}
    </button>
  )
}

export function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest-xl uppercase text-white"
            >
              Velmora
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Demi-fine jewelry crafted to be treasured. Designed for everyday luxury and
              memorable gifting.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => toast('Coming soon', { description: 'Social links — under development.' })}
                className="hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </button>
              <button
                onClick={() => toast('Coming soon', { description: 'Social links — under development.' })}
                className="hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </button>
              <button
                onClick={() => toast('Coming soon', { description: 'Social links — under development.' })}
                className="hover:text-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-5">
              Help
            </h4>
            <ul className="space-y-3 text-sm">
              <li>{noopLink('Shipping & Returns')}</li>
              <li>{noopLink('Care Guide')}</li>
              <li>{noopLink('Size Guide')}</li>
              <li>{noopLink('FAQs')}</li>
              <li>{noopLink('Contact Us')}</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>{noopLink('Our Story')}</li>
              <li>{noopLink('Sustainability')}</li>
              <li>{noopLink('Journal')}</li>
              <li>{noopLink('Careers')}</li>
              <li>{noopLink('Press')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-wider text-white/30 border border-white/20 rounded px-2 py-1">
              Visa
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/30 border border-white/20 rounded px-2 py-1">
              Mastercard
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/30 border border-white/20 rounded px-2 py-1">
              Amex
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/30 border border-white/20 rounded px-2 py-1">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
