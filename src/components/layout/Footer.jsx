import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-1 space-y-6">
            <Link to="/">
              <h2 className="font-serif text-2xl tracking-[0.1em] text-primary uppercase">Velmora</h2>
            </Link>
            <p className="text-sm text-background/70 font-sans leading-relaxed max-w-xs">
              Meticulously crafted demi-fine jewelry for everyday elegance. Designed to be treasured.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-lg tracking-wider uppercase text-primary">Shop</h3>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm hover:text-primary transition-colors text-background/80">All Jewelry</Link></li>
              <li><Link to="/category/earrings" className="text-sm hover:text-primary transition-colors text-background/80">Earrings</Link></li>
              <li><Link to="/category/necklaces" className="text-sm hover:text-primary transition-colors text-background/80">Necklaces</Link></li>
              <li><Link to="/category/huggies" className="text-sm hover:text-primary transition-colors text-background/80">Huggies & Cuffs</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-lg tracking-wider uppercase text-primary">Help</h3>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-sm hover:text-primary transition-colors text-background/80">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm hover:text-primary transition-colors text-background/80">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-sm hover:text-primary transition-colors text-background/80">Jewelry Care</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors text-background/80">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-lg tracking-wider uppercase text-primary">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors text-background/80">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm hover:text-primary transition-colors text-background/80">Journal</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-primary transition-colors text-background/80">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-primary transition-colors text-background/80">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/60">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">Instagram</a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">Pinterest</a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}