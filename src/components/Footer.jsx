import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-[#E2DDD5] bg-[#F9F7F2]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-medium uppercase tracking-[0.2em] text-[#1A1614]"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6B625B]">
              Demi-fine jewelry made to be treasured. Crafted with care, designed
              for everyday elegance.
            </p>
          </div>
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-[#1A1614]">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-[#6B625B]">
              <li><Link to="/shop?category=earrings" className="hover:text-[#B9975B]">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-[#B9975B]">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-[#B9975B]">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-[#B9975B]">Gift Sets</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-[#1A1614]">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-[#6B625B]">
              <li><Link to="/shipping" className="hover:text-[#B9975B]">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-[#B9975B]">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-[#B9975B]">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-[#B9975B]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-[#1A1614]">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-[#6B625B]">
              <li><Link to="/about" className="hover:text-[#B9975B]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#B9975B]">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-[#B9975B]">Sustainability</Link></li>
              <li><Link to="/wholesale" className="hover:text-[#B9975B]">Wholesale</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-[#E2DDD5] pt-8 md:flex-row">
          <p className="text-xs text-[#6B625B]">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[#6B625B]">
            <Link to="https://instagram.com" aria-label="Instagram" className="hover:text-[#B9975B]">
              <Instagram size={18} strokeWidth={1.5} />
            </Link>
            <Link to="https://facebook.com" aria-label="Facebook" className="hover:text-[#B9975B]">
              <Facebook size={18} strokeWidth={1.5} />
            </Link>
            <Link to="https://twitter.com" aria-label="Twitter" className="hover:text-[#B9975B]">
              <Twitter size={18} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-6 w-10 rounded bg-[#E2DDD5]" aria-label="Visa" />
            <span className="h-6 w-10 rounded bg-[#E2DDD5]" aria-label="Mastercard" />
            <span className="h-6 w-10 rounded bg-[#E2DDD5]" aria-label="Amex" />
            <span className="h-6 w-10 rounded bg-[#E2DDD5]" aria-label="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  )
}
