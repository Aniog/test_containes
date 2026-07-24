import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-[#1a1918] text-[#faf8f5] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase block mb-6">
              VELMORA
            </Link>
            <p className="text-[#a09e9c] text-sm leading-relaxed mb-6 font-sans">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#a09e9c] hover:text-[#c5a059] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#a09e9c] hover:text-[#c5a059] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#a09e9c] hover:text-[#c5a059] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#a09e9c] hover:text-[#c5a059] transition-colors" aria-label="Pinterest">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-4 text-sm text-[#a09e9c] font-sans">
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/bestsellers" className="hover:text-white transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Help</h4>
            <ul className="space-y-4 text-sm text-[#a09e9c] font-sans">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/track-order" className="hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-[#a09e9c] font-sans">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/wholesale" className="hover:text-white transition-colors">Wholesale</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-[#2c2a29]" />

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a09e9c] font-sans">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="flex gap-2 opacity-50">
            {/* Payment Icons Placeholders */}
            <div className="w-8 h-5 bg-white/20 rounded"></div>
            <div className="w-8 h-5 bg-white/20 rounded"></div>
            <div className="w-8 h-5 bg-white/20 rounded"></div>
            <div className="w-8 h-5 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
