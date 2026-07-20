import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-stone-200 bg-[#fbfaf9]">
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <Link
            to="/"
            className="font-serif text-2xl font-medium uppercase tracking-[0.25em] text-stone-900"
          >
            Velmora
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
            Demi-fine gold jewelry designed to be treasured. Crafted for everyday
            luxury and moments worth remembering.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-stone-900">
            Shop
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-stone-600">
            <li><Link to="/shop?category=earrings" className="hover:text-amber-700">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-amber-700">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-amber-700">Huggies</Link></li>
            <li><Link to="/shop?category=sets" className="hover:text-amber-700">Gift Sets</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-stone-900">
            Help
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-stone-600">
            <li><Link to="/" className="hover:text-amber-700">Shipping & Returns</Link></li>
            <li><Link to="/" className="hover:text-amber-700">Care Guide</Link></li>
            <li><Link to="/" className="hover:text-amber-700">FAQs</Link></li>
            <li><Link to="/" className="hover:text-amber-700">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-stone-900">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-stone-600">
            <li><Link to="/" className="hover:text-amber-700">Our Story</Link></li>
            <li><Link to="/" className="hover:text-amber-700">Sustainability</Link></li>
            <li><Link to="/" className="hover:text-amber-700">Journal</Link></li>
            <li><Link to="/" className="hover:text-amber-700">Careers</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-8 md:flex-row">
        <p className="text-xs text-stone-500">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-stone-500">
          <Link to="/" aria-label="Instagram" className="hover:text-amber-700"><Instagram size={18} /></Link>
          <Link to="/" aria-label="Facebook" className="hover:text-amber-700"><Facebook size={18} /></Link>
          <Link to="/" aria-label="Twitter" className="hover:text-amber-700"><Twitter size={18} /></Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
