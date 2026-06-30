import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-espresso text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider">VELMORA</Link>
            <p className="mt-4 text-warm-gray text-sm leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, priced to be accessible.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-warm-gray mb-4">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/collection" className="hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/collection" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/collection" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/collection" className="hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/collection" className="hover:text-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-warm-gray mb-4">Help</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-warm-gray mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-gray text-xs">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span key={method} className="text-[10px] uppercase tracking-wider text-warm-gray border border-warm-border px-2 py-1 rounded-sm">
                {method}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-warm-gray">
            <a href="#" className="hover:text-gold transition-colors text-xs">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors text-xs">Pinterest</a>
            <a href="#" className="hover:text-gold transition-colors text-xs">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
