import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'Bestsellers'],
  Help: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Track Order'],
  Company: ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="inline-block font-serif text-2xl font-semibold tracking-[0.18em] uppercase mb-5"
            >
              Velmora
            </Link>
            <p className="text-sm text-velmora-taupe-light leading-relaxed max-w-xs">
              Demi-fine gold jewelry designed to be treasured. Crafted with care, made for everyday luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-velmora-taupe-light hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-velmora-taupe-light hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-velmora-taupe-light hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-velmora-taupe-light hover:text-velmora-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5">Stay in the know</h4>
            <p className="text-sm text-velmora-taupe-light mb-4">Receive early access to new arrivals and exclusive offers.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 h-11 rounded-md border border-velmora-taupe/30 bg-transparent px-4 text-sm text-velmora-cream placeholder:text-velmora-taupe focus:outline-none focus:ring-1 focus:ring-velmora-gold"
              />
              <button
                type="submit"
                className="h-11 rounded-md bg-velmora-gold px-5 text-sm font-medium uppercase tracking-wider text-velmora-espresso hover:bg-velmora-gold-dark transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <Separator className="my-10 bg-velmora-taupe/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-velmora-taupe-light">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-velmora-gold transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-velmora-gold transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 border border-velmora-taupe/30 rounded text-[10px]">VISA</span>
            <span className="px-2 py-1 border border-velmora-taupe/30 rounded text-[10px]">MC</span>
            <span className="px-2 py-1 border border-velmora-taupe/30 rounded text-[10px]">AMEX</span>
            <span className="px-2 py-1 border border-velmora-taupe/30 rounded text-[10px]">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
