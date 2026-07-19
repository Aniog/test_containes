import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-card-foreground/70 py-16 md:py-24 border-t border-border/20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="md:col-span-1">
            <Link to="/" className="text-3xl font-serif tracking-widest text-[#fbfaf8] uppercase block mb-6">
              Velmora
            </Link>
            <p className="text-sm text-[#fbfaf8]/70 max-w-xs leading-relaxed">
              Crafting timeless elegance. Demi-fine jewelry designed for the modern muse, to be cherished every day.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#fbfaf8]">Shop</h4>
            <Link to="/shop" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">All Jewelry</Link>
            <Link to="/shop?category=Necklaces" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Necklaces</Link>
            <Link to="/shop?category=Earrings" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Earrings</Link>
            <Link to="/shop?category=Huggies" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Huggies</Link>
            <Link to="/collections/bestsellers" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Bestsellers</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#fbfaf8]">Help</h4>
            <Link to="/faq" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">FAQ</Link>
            <Link to="/shipping" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Shipping & Returns</Link>
            <Link to="/jewelry-care" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Jewelry Care</Link>
            <Link to="/contact" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Contact Us</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#fbfaf8]">Company</h4>
            <Link to="/about" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Our Story</Link>
            <Link to="/journal" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Journal</Link>
            <Link to="/sustainability" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Sustainability</Link>
            <Link to="/terms" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Terms of Service</Link>
            <Link to="/privacy" className="text-sm hover:text-[#fbfaf8] transition-colors w-fit">Privacy Policy</Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-xs text-[#fbfaf8]/50">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-[#fbfaf8]" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-[#fbfaf8]" aria-label="Pinterest">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-[#fbfaf8]" aria-label="TikTok">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};