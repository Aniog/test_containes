import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-b border-primary-foreground/20 pb-12 mb-8">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl tracking-widest uppercase mb-6">Velmora</h2>
            <p className="text-primary-foreground/80 text-sm max-w-sm">
              Fine demi-fine gold jewelry crafted to be treasured. Editorial design, premium quality, accessible luxury.
            </p>
          </div>

          {/* Shop Col */}
          <div>
            <h3 className="font-serif text-lg tracking-wider uppercase mb-6">Shop</h3>
            <ul className="space-y-4">
              <li><Link to="/shop?category=earrings" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">All Collections</Link></li>
            </ul>
          </div>

          {/* Help Col */}
          <div>
            <h3 className="font-serif text-lg tracking-wider uppercase mb-6">Help</h3>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h3 className="font-serif text-lg tracking-wider uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">Journal</Link></li>
              <li><Link to="/terms" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Social Icons Placeholders */}
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors" aria-label="Pinterest">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.854 0 1.269.64 1.269 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.39-1.72-4.058-4.17-4.058-2.824 0-4.485 2.12-4.485 4.306 0 .858.331 1.779.744 2.281.082.099.094.19.069.294-.078.32-.254 1.03-.288 1.16-.046.17-.152.21-.326.13-1.216-.564-1.974-2.34-1.974-3.774 0-3.056 2.217-5.86 6.386-5.86 3.344 0 5.942 2.383 5.942 5.565 0 3.327-2.102 6.002-5.023 6.002-.978 0-1.895-.508-2.208-1.106 0 0-.482 1.834-.6 2.29-.216.82-.798 1.848-1.196 2.47C10.057 23.855 10.999 24 12 24c5.523 0 10-4.477 10-10s-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;