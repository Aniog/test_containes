import { Instagram, Facebook, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1A1512] px-4 pb-8 pt-16 text-[#F6F3EF] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-serif text-2xl uppercase tracking-[0.25em]"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#CFC7BC]">
              Demi-fine jewelry designed for everyday luxury. Crafted to be treasured, gifted, and worn with intention.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-[#CFC7BC] transition-colors hover:text-[#C49A6C]">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#CFC7BC] transition-colors hover:text-[#C49A6C]">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#CFC7BC] transition-colors hover:text-[#C49A6C]">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A6C]">Shop</h4>
            <ul className="space-y-3 text-sm text-[#CFC7BC]">
              <li><Link to="/shop" className="transition-colors hover:text-white">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="transition-colors hover:text-white">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="transition-colors hover:text-white">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="transition-colors hover:text-white">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="transition-colors hover:text-white">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A6C]">Help</h4>
            <ul className="space-y-3 text-sm text-[#CFC7BC]">
              <li><a href="#" className="transition-colors hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Care Guide</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Size Guide</a></li>
              <li><a href="#" className="transition-colors hover:text-white">FAQs</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A6C]">Company</h4>
            <ul className="space-y-3 text-sm text-[#CFC7BC]">
              <li><Link to="/about" className="transition-colors hover:text-white">Our Story</Link></li>
              <li><Link to="/journal" className="transition-colors hover:text-white">Journal</Link></li>
              <li><a href="#" className="transition-colors hover:text-white">Sustainability</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Careers</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-[#9A9082]">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#9A9082]">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Amex</span>
              <span>PayPal</span>
              <span>Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
