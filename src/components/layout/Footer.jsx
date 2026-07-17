import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide text-white mb-4 block">
              VELMORA
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Fine jewelry crafted with intention. Demi-fine pieces designed to be treasured, worn, and passed down.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-white/60 hover:text-gold transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" className="text-white/60 hover:text-gold transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="text-white/60 hover:text-gold transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/collection" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">All Jewelry</Link></li>
              <li><Link to="/collection?category=earrings" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Earrings</Link></li>
              <li><Link to="/collection?category=necklaces" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Necklaces</Link></li>
              <li><Link to="/collection?category=huggies" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Huggies</Link></li>
              <li><Link to="/collection?category=sets" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Our Story</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Journal</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors duration-200">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="hairline bg-white/10 mt-12 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors">
              <svg className="h-6 w-8" viewBox="0 0 38 24" fill="currentColor">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"/>
                <path fill="#00579F" d="M38 3.4s-1.3 0-1.5.1c-1 .3-1.7 1.1-1.9 2.1-.1.5-.1 1.4-.1 1.4h6.5s-.2-3.4-.4-4.4c-.3-1.2-1.2-2-2.6-2.1C38 0 38 0 38 0z"/>
                <path fill="#FAA61A" d="M24.8 19.5h-6.3s-.2 2.2 1.6 3.3c.8.5 2.1.7 3.3.7 1.1 0 1.9-.1 2.7-.4-.1 0-1.1-.5-1.1-1.9v-1.7z"/>
                <path fill="#00579F" d="M12 14.4c.1-.7.8-1.2 1.6-1.2h2.4c-.2.4-.3.9-.3 1.4 0 2.1 1.4 3.7 3.8 3.7 1.1 0 1.9-.3 2.5-.8.6-.5.9-1.1 1-1.9-.9.2-2.2.3-3.3.3-3 0-5.2-1.5-5.2-4.4 0-2.5 2.1-4 5-4.3 1.3-.1 2.7 0 4 .3-.1-.6-.3-1.2-.6-1.7-.4-.6-1.1-1-1.8-1.1-.9-.1-1.7.2-2.3.8-.6.5-.9 1.2-.8 2-.2 1-.7 1.9-1.5 2.6-.7.6-1.6.9-2.6.9-1.5 0-2.8-.8-3.3-2.2z"/>
                <path fill="#FAA61A" d="M14.6 8.5c.2-.8.8-1.4 1.6-1.6.9-.2 1.9.2 2.4.9l1.7-1c-.6-.8-1.6-1.3-2.7-1.3-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1.9 0 1.7-.4 2.2-1l-1.7-1c-.2.2-.6.4-.9.4-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.4 0 .7.2.9.4l1.7-1c-.6-.8-1.6-1.3-2.7-1.3-1.4 0-2.5.9-2.9 2.2z"/>
              </svg>
            </a>
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors">
              <svg className="h-6 w-8" viewBox="0 0 38 24" fill="currentColor">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"/>
                <path fill="#fff" d="M26.5 11.3h-2.7l1.4-8.4h2.7L26.5 11.3zM10.7 3.2l-2.9 8.2h-2l3.8-10.6h2.8l2.9 10.6h-2.1l-1.1-3.3h-2.4l-.2.1z"/>
                <path fill="#fff" d="M19.3 6.6c-.6-.3-1.5-.5-2.6-.5-2.9 0-4.9 1.5-4.9 4.5 0 3.2 2.2 4.5 5.2 4.5 1 0 1.8-.1 2.4-.3v-2.2c-.6.2-1.3.3-2.2.3-1.3 0-2.2-.5-2.3-1.7h6.2v-.8c0-3.2-1.7-4.3-3.8-4.3-.8.1-1.6.2-2.2.5h.4v1.8h-1.8v.9h3.4V6.6h-1.6z"/>
                <path fill="#fff" d="M32.8 12.8c0 .8.1 1.4.3 1.8h-2c-.1-.2-.1-.5-.1-.8 0-.8.7-1.4 1.8-1.4.5 0 .9.1 1.2.2l.5-1.6c-.3-.1-.8-.2-1.5-.2-1.4 0-2.5.8-2.5 2.3 0 .7.2 1.2.5 1.6-.4.2-.9.3-1.4.3-1.6 0-2.7-1-2.7-2.8 0-2.4 1.7-3.6 3.5-3.6 1.3 0 2.2.7 2.2 1.8 0 .5-.1.9-.3 1.2h.5v1.2h-1.2v.8h2.2v.4zM30.6 9.8c0-.6-.4-1-1.1-1-1.4 0-2.1 1.1-2.1 2.3 0 .6.4 1 1 1s1.1-.4 1.1-1v-1.3h1.1zm3.6-4.3v6c0 .9.5 1.3 1.4 1.3.5 0 .9-.1 1.2-.2l-.1-1.4c-.2.1-.4.1-.6.1-.5 0-.7-.2-.7-.8V5.5h1.2v-.8h-1.2V3.2l-1.2.5v1.1h-.8v.8h.8zm5.2 5.4c0 2.4-1.5 3.6-3.4 3.6s-3.4-1.2-3.4-3.6c0-2.5 1.6-3.6 3.4-3.6s3.4 1.1 3.4 3.6zm-5.3 0c0 1.3.7 2.1 1.9 2.1 1.2 0 1.9-.8 1.9-2.1 0-1.3-.7-2.1-1.9-2.1-1.2 0-1.9.8-1.9 2.1z"/>
              </svg>
            </a>
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors">
              <svg className="h-6 w-8" viewBox="0 0 38 24" fill="currentColor">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"/>
                <path fill="#000" d="M17.5 19.2c-2.9 0-4.3-1.6-4.3-4.3 0-3.6 3.2-5.3 7.6-5.3v-1.2c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6v1.2H16c-.5 0-.9.4-.9.9s.4.9.9.9h1.6c3.9 0 6.4 1.7 6.4 5.3 0 3.6-3 5.4-7.5 5.4h-1.7c-.5 0-.9.4-.9.9s.4.9.9.9h1.7v-3.8zm.3-4.2c1.9 0 3.1-1.1 3.1-2.9 0-1.7-1.2-2.8-3.1-2.8h-2.1v5.7h2.1z"/>
              </svg>
            </a>
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors">
              <svg className="h-6 w-8" viewBox="0 0 38 24" fill="currentColor">
                <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"/>
                <path fill="#fff" d="M16.2 18.1c-.4 0-.8-.2-.9-.5-.3-.6-.8-1-1.4-1.4-.8-.5-1.6-.8-2.5-1.1-.7-.2-1.3-.3-2-.5-.2-.1-.5 0-.6.2-.1.2 0 .5.2.6.8.2 1.5.4 2.2.6 1 .3 2 .7 2.9 1.3.5.3.9.8 1 1.4.1.4-.2.8-.5.9h-.4c-.2 0-.4.2-.4.4s.2.4.4.4h.4c.5 0 .9-.1 1.2-.3.4-.2.6-.6.6-1.1 0-.4-.2-.8-.5-1.1l-.8.7zm-8.4-1.2c-.3 0-.5-.2-.6-.4-.2-.4-.2-.8 0-1.2l.9-2.2c.1-.3.4-.5.7-.5h.4c.3 0 .6.2.7.5l.7 1.8.7-1.8c.1-.3.4-.5.7-.5h.4c.5 0 .8.6.5 1l-1.7 3.9c-.1.3-.4.5-.7.5h-.4c-.3 0-.5-.2-.7-.5l-.9-2.1-.3 1.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
